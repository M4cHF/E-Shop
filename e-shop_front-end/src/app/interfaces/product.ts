import { Category } from './category';

export interface Product {
  idProduct: number;
  nameProduct: string;
  descriptionProduct: string;
  priceProduct: number;
  imageUrl: string;
  category: Category | null;
}
