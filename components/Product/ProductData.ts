import { Product, ProductSection } from './ProductType';

const uniqueProduct: Product = {
  name: '1st Choice Puppy Chiot',
  rating: [
    '/Dog paw.png',
    '/Dog paw.png',
    '/Dog paw.png',
    '/Dog paw unfill.png',
    '/Dog paw unfill.png',
  ],
  price: 9.99,
  imageSrc: '/Puppy Chiot 1.png',
};

const featured: ProductSection = {
  subtitle: 'Lorem ipsum dolor sit amet.',
  title: 'PRODUCTOS DESTACADOS',
  products: [],
};

const popular: ProductSection = {
  subtitle: 'Lorem ipsum dolor sit amet.',
  title: 'PRODUCTOS POPULARES',
  products: [],
};

const latest: ProductSection = {
  subtitle: 'Lorem ipsum dolor sit amet.',
  title: 'ULTIMOS PRODUCTOS',
  products: [],
};

for (let i = 0; i < 6; i++) {
  if (i < 5) popular.products.push(uniqueProduct);
  featured.products.push(uniqueProduct);
  latest.products.push(uniqueProduct);
}

export const FEATURED_PRODUCTS = featured;
export const LATEST_PRODUCTS = latest;
export const POPULAR_PRODUCTS = popular;
