export interface Certificate {
  origin: string;
  health_status: string;
  awards: string[];
}

export interface Category {
  _id: string;
  categoryName: string;
  description: string;
  __v: number;
}

export interface Genotype {
  _id: string;
  genotypeName: string;
  __v: number;
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
  price: number; // Price in VND
  image: string[]; // Array of image URLs
  categoryId: Category; // Associated category
  genotypeId: Genotype; // Associated genotype
  __v: number; // Version key
}
