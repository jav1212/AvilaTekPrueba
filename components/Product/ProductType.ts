export type Product = {
  name: string;
  rating: string[];
  price: number;
  imageSrc: string;
};

export type ProductSection = {
  subtitle: string;
  title: string;
  products: Product[];
};
