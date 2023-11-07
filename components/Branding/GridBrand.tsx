import React from 'react';
import Banner from '../Utils/Banner';
import { Branding } from './BrandingType';

type Props = { template: string; height: string; gridItems: Branding[] };

function GridBrand({ template, height, gridItems }: Props) {
  return (
    <div className={`  ${template} `} style={{ height }}>
      {gridItems.map((element, index) => (
        <Banner key={index} src={element.imageSrc} height={80} width={127} />
      ))}
    </div>
  );
}

export default GridBrand;
