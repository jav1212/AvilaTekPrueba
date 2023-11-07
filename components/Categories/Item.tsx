import React from 'react';
import Banner from '../Utils/Banner';
import { MONTSERRAT } from '../Utils/fonts';

type Props = { name: string };

function Item({ name }: Props) {
  return (
    <div
      className=" flex flex-col justify-between"
      style={{ width: '160px', height: '177px' }}
    >
      <Banner src="/Dog icon.png" height={149} width={160} />
      <div>
        <h2
          className={` text-center font-semibold text-textColor-black ${MONTSERRAT.className}`}
        >
          {name}
        </h2>
      </div>
    </div>
  );
}

export default Item;
