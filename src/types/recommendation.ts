import type { Product } from "@/types/product";

export interface RecommendationMatch {
  label: string;
  slug: string;
  reason: string;
  keywords: string[];
  products: Product[];
}

export interface RecommendationState {
  query: string;
  result: RecommendationMatch | null;
}
