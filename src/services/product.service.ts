import { mockProducts } from "@/data/mock-products";
import type { Product, ProductFilters, ProductSortOption } from "@/types/product";
import { filterProducts } from "@/utils/filter-products";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProductsFromMockData() {
  await delay(120);
  return mockProducts;
}

export async function getProductBySlug(slug: string) {
  await delay(60);
  return mockProducts.find((product) => product.slug === slug) ?? null;
}

export async function searchProducts(filters: ProductFilters) {
  await delay(100);
  return filterProducts(mockProducts, filters);
}

export async function getFeaturedProducts(limit = 8) {
  await delay(80);
  return mockProducts.filter((product) => product.featured).slice(0, limit);
}

export function getProductsSync() {
  return mockProducts;
}

export function sortProducts(
  products: Product[],
  sortBy: ProductSortOption = "featured",
) {
  return filterProducts(products, {
    query: "",
    category: "",
    skinType: "",
    concern: "",
    sortBy,
  });
}
