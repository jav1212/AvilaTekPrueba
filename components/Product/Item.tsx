import React from 'react';
import Banner from '../Utils/Banner';
import CustomButton from './CustomButton';
import { MONTSERRAT, WORK_SANS } from '../Utils/fonts';

type Props = {
  name: string;
  price: number;
  rating: [];
  imagenSrc: string;
};

function Item({ name, price, rating, imagenSrc }: Props) {
  return (
    <div
      className=" flex flex-col justify-around items-center"
      style={{ height: '334px', width: '200px', maxWidth: '200px' }}
    >
      <div className=" flex justify-center">
        <Banner src={imagenSrc} width={145} height={200} />
      </div>
      <div className=" flex flex-col">
        <h1
          className={` text-textColor-black font-medium ${MONTSERRAT.className}`}
        >
          {name}
        </h1>
        <div className=" flex">
          {rating.map((element) => (
            <div className=" mr-1">
              <Banner src={element} height={12} width={13} />
            </div>
          ))}
        </div>
        <h1 className={` text-neutral-600 font-medium ${WORK_SANS.className}`}>
          ${price}
        </h1>
      </div>
      <CustomButton />
    </div>
  );
}

export default Item;
