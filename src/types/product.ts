export type ProductCategory = "Skincare" | "Bodycare" | "Haircare" | "Makeup";

export type ProductSortOption =
  | "featured"
  | "rating-desc"
  | "price-asc"
  | "price-desc"
  | "name-asc";

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: ProductCategory;
  skinType: string[];
  concern: string[];
  rating: number;
  description: string;
  ingredients: string[];
  usage: string;
  featured?: boolean;
  bestSeller?: boolean;
}

export interface ProductFilters {
  query: string;
  category: string;
  skinType: string;
  concern: string;
  sortBy: ProductSortOption;
}
