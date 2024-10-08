export interface TProduct {
  id: string;
  // necessary
  type: number;
  adult_price: number;
  child_price: number;

  // optional
  age: number;
  detail_tr: string[];
  detail_en: string[];
  desc_tr: string;
  desc_en: string;

  [key: string]: any;
}
