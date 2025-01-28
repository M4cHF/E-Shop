import { Product } from "./product";

export interface Category {
    idCategory: number; 
    nameCategory: string; 
    products?: Product[];
  }