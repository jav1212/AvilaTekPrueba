import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import React from 'react';
import { MONTSERRAT } from '../Utils/fonts';
import Banner from '../Utils/Banner';

function Location() {
  return (
    <div className=" w-fit h-fit flex justify-center items-center">
      <Banner src="/Location icon.png" height={14} width={14} />
      <h1
        className={`${MONTSERRAT.className} text-[12px] text-center mr-2 ml-2 text-textColor-white`}
      >
        Bello Monte
      </h1>
      <Banner src="/Frame.png" height={10} width={10} />
    </div>
  );
}

export default Location;
