export interface Certificate {
  origin: string;
  health_status: string;
  awards: string[];
}

export interface Category {
  _id: string;
  categoryName: string;
  description: string;
}

export interface Genotype {
  _id: string;
  genotypeName: string;
}

export interface Product {
  certificates: Certificate;
  _id: string;
  productName: string;
  status: string;
  madeBy: string;
  gender: boolean;
  size: number;
  yob: number;
  character: string;
  screeningRate: number;
  foodOnDay: number;
  description: string;
  price: number;
  image: string[];
  categoryId: Category;
  genotypeId: Genotype;
}
