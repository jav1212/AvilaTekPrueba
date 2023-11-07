export type Product = {
  name: string;
  rating: List<string>;
  price: number;
  imageSrc: string;
};

export type ProductSection = {
  subtitle: string;
  title: string;
  products: List<Product>;
};
