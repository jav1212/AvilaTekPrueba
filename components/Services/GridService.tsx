import React from 'react';
import Item from './Item';
import { Service } from './ServiceType';

type Props = { template: string; height: string; gridItems: List<Service> };

function GridService({ template, height, gridItems }: Props) {
  return (
    <div className={`  ${template} gap-x-20 `} style={{ height }}>
      {gridItems.map((element, index) => (
        <Item
          key={index}
          name={element.name}
          description={element.description}
          imageSrc={element.imageSrc}
        />
      ))}
    </div>
  );
}

export default GridService;
