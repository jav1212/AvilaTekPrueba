import React from 'react';
import Item from './Item';

type Props = { template: string; height: string; gridItems: [] };

function GridProduct({ template, height, gridItems }: Props) {
  return (
    <div className={`  ${template} `} style={{ height }}>
      {gridItems.map((element, index) => (
        <Item
          key={index}
          name={element.name}
          rating={element.rating}
          price={element.price}
          imagenSrc={element.imageSrc}
        />
      ))}
    </div>
  );
}

export default GridProduct;
