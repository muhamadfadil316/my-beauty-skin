import { mockProducts } from "@/data/mock-products";
import { getProductsSync } from "@/services/product.service";
import type { RecommendationMatch } from "@/types/recommendation";

const recommendationRules = [
  {
    label: "Acne friendly products",
    slug: "acne",
    keywords: ["jerawat", "acne", "bruntusan", "beruntusan", "breakout"],
    concern: ["acne", "oil-control", "pore"],
    reason:
      "Kata kunci yang Anda masukkan mengarah ke produk dengan fokus acne care, oil control, dan pori yang lebih bersih.",
  },
  {
    label: "Hydrating products",
    slug: "hydrating",
    keywords: ["kulit kering", "kering", "dehydrated", "hidrasi", "dry skin"],
    concern: ["hydrating", "barrier", "softening"],
    reason:
      "Pola pencarian menunjukkan kebutuhan hidrasi sehingga produk dengan formula pelembap diprioritaskan.",
  },
  {
    label: "Calming products",
    slug: "calming",
    keywords: ["kulit sensitif", "sensitif", "merah", "perih", "calm"],
    concern: ["calming", "soothing", "barrier"],
    reason:
      "Input Anda cocok dengan produk yang punya karakter menenangkan dan menjaga barrier kulit.",
  },
  {
    label: "Hair fall products",
    slug: "hair-fall",
    keywords: ["rambut rontok", "rontok", "hair fall", "rambut tipis"],
    concern: ["hair fall", "strengthening", "scalp care"],
    reason:
      "Kata kunci Anda menunjukkan fokus perawatan rambut rontok dan penguatan akar rambut.",
  },
];

function matchesRule(query: string) {
  const normalized = query.toLowerCase();

  return recommendationRules.find((rule) =>
    rule.keywords.some((keyword) => normalized.includes(keyword.toLowerCase())),
  );
}

export function getRecommendationByQuery(query: string): RecommendationMatch {
  const fallbackRule = recommendationRules[0];
  const rule = query.trim() ? matchesRule(query) ?? fallbackRule : fallbackRule;

  const products = getProductsSync().filter((product) =>
    product.concern.some((item) =>
      rule.concern.some((candidate) => item.toLowerCase().includes(candidate)),
    ),
  );

  const rankedProducts = [...products, ...mockProducts]
    .filter(
      (product, index, list) =>
        list.findIndex((candidate) => candidate.id === product.id) === index,
    )
    .sort((left, right) => right.rating - left.rating)
    .slice(0, 6);

  return {
    label: rule.label,
    slug: rule.slug,
    reason: rule.reason,
    keywords: rule.keywords,
    products: rankedProducts,
  };
}

export async function getRecommendationResult(query: string) {
  return getRecommendationByQuery(query);
}
