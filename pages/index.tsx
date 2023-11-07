import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import Categories from '../components/Categories/Categories';
import MiddleBanner from '../components/ComposeBanner/MiddleBanner';
import ProductSection from '../components/Product/ProductSection';
import Banner from '../components/Utils/Banner';
import GridProduct from '../components/Product/GridProduct';
import GridService from '../components/Services/GridService';
import Title from '../components/Utils/Title';
import Subtitle from '../components/Utils/Subtitle';
import ServiceSection from '../components/Services/ServiceSection';
import {
  BANNER_DATA_1,
  BANNER_DATA_2,
} from '../components/ComposeBanner/MiddleBannerData';
import {
  FEATURED_PRODUCTS,
  LATEST_PRODUCTS,
  POPULAR_PRODUCTS,
} from '../components/Product/ProductData';
import { SERVICE_DATA } from '../components/Services/ServiceData';
import { BRANDING_DATA } from '../components/Branding/BrandingData';
import BrandingSection from '../components/Branding/BrandingSection';
import GridBrand from '../components/Branding/GridBrand';
import Footer from '../components/Footer/Footer';
import BottomSection from '../components/Footer/BottomSection';

function HomePage() {
  return (
    <div className=" w-full flex flex-col">
      <Header />
      <Carousel />
      <Categories />
      <ProductSection
        height="771px"
        identifiers={[
          <Subtitle text={FEATURED_PRODUCTS.subtitle} />,
          <Title text={FEATURED_PRODUCTS.title} />,
        ]}
        components={[
          <Banner src="/Ad.png" width={440} height={708} />,
          <GridProduct
            template="grid grid-cols-3 gap-7"
            gridItems={FEATURED_PRODUCTS.products}
            height="708px"
          />,
        ]}
      />
      <MiddleBanner images={BANNER_DATA_1} />
      <ProductSection
        height="397px"
        identifiers={[
          <Subtitle text={POPULAR_PRODUCTS.subtitle} />,
          <Title text={POPULAR_PRODUCTS.title} />,
        ]}
        components={[
          <GridProduct
            template="flex justify-between w-full"
            gridItems={POPULAR_PRODUCTS.products}
            height="334px"
          />,
        ]}
      />
      <MiddleBanner images={BANNER_DATA_2} />
      <ProductSection
        height="771px"
        identifiers={[
          <Subtitle text={LATEST_PRODUCTS.subtitle} />,
          <Title text={LATEST_PRODUCTS.title} />,
        ]}
        components={[
          <GridProduct
            template="grid grid-cols-3 gap-7"
            gridItems={FEATURED_PRODUCTS.products}
            height="708px"
          />,
          <Banner src="/Ad.png" width={440} height={708} />,
        ]}
      />
      <ServiceSection
        height="484px"
        identifiers={[
          <Subtitle text={SERVICE_DATA.subtitle} />,
          <Title text={SERVICE_DATA.title} />,
        ]}
        components={[
          <GridService
            template="grid grid-cols-3 w-full"
            gridItems={SERVICE_DATA.services}
            height="358px"
          />,
        ]}
      />
      <BrandingSection
        height="157px"
        identifiers={[
          <Subtitle text={BRANDING_DATA.subtitle} />,
          <Title text={BRANDING_DATA.title} />,
        ]}
        components={[
          <GridBrand
            template="flex justify-between w-full"
            height="80px"
            gridItems={BRANDING_DATA.brands}
          />,
        ]}
      />
      <BottomSection height="205px" />
      <Footer />
    </div>
  );
}

export default HomePage;
