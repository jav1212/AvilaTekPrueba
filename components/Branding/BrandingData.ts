import { Branding, brandingSection } from './BrandingType';

const uniqueBrand: Branding = {
  imageSrc: '/c4ac5c165044d15d239982e6b22a7317 4.jpg',
};

const branding: brandingSection = {
  subtitle: 'Lorem ipsum dolor sit amet.',
  title: 'TRABAJAMOS CON LAS MEJORES MARCAS',
  brands: [uniqueBrand, uniqueBrand, uniqueBrand, uniqueBrand, uniqueBrand],
};

export const BRANDING_DATA = branding;
