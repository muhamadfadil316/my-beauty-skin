import type { Product, ProductFilters } from "@/types/product";

function matchesCandidate(values: string[], candidate: string) {
  if (!candidate) {
    return true;
  }

  return values.some((value) => value.toLowerCase().includes(candidate.toLowerCase()));
}

export function filterProducts(products: Product[], filters: ProductFilters) {
  const query = filters.query.trim().toLowerCase();

  const filtered = products.filter((product) => {
    const searchTarget = [product.name, product.brand, product.description, ...product.ingredients]
      .join(" ")
      .toLowerCase();

    const searchMatch = !query || searchTarget.includes(query);
    const categoryMatch = !filters.category || product.category === filters.category;
    const skinTypeMatch = matchesCandidate(product.skinType, filters.skinType);
    const concernMatch = matchesCandidate(product.concern, filters.concern);

    return searchMatch && categoryMatch && skinTypeMatch && concernMatch;
  });

  return [...filtered].sort((left, right) => {
    switch (filters.sortBy) {
      case "rating-desc":
        return right.rating - left.rating;
      case "price-asc":
        return left.price - right.price;
      case "price-desc":
        return right.price - left.price;
      case "name-asc":
        return left.name.localeCompare(right.name);
      case "featured":
      default:
        return Number(right.featured) - Number(left.featured) || right.rating - left.rating;
    }
  });
}
