import React from 'react';
import Banner from '../Utils/Banner';
import { MONTSERRAT } from '../Utils/fonts';

type Props = { name: string; description: string; imageSrc: string };

function Item({ name, description, imageSrc }: Props) {
  return (
    <div
      className=" flex flex-col justify-between"
      style={{ height: '154px', width: '320px' }}
    >
      <div className=" flex">
        <Banner src={imageSrc} width={80} height={80} />
      </div>
      <div className=" flex flex-col">
        <h1
          className={` text-body font-semibold text-textColor-black ${MONTSERRAT.className}`}
        >
          {name}
        </h1>
        <h1 className=" text-small font-medium font-[Calibri] text-textColor-black">
          {description}
        </h1>
      </div>
    </div>
  );
}

export default Item;
