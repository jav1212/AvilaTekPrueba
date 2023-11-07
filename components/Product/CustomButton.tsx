import React from 'react';
import { MONTSERRAT } from '../Utils/fonts';
import Banner from '../Utils/Banner';

function CustomButton() {
  return (
    <button
      className=" bg-primary-300 rounded-md flex justify-center items-center"
      type="button"
      style={{ height: '24px', width: '110px' }}
    >
      <div className="flex justify-center items-center">
        <div>
          <Banner src="/Shopping cart 1.png" height={10} width={12} />
        </div>

        <h2
          className={` ml-2 text-[12px] text-textColor-white ${MONTSERRAT.className}`}
        >
          Agregar
        </h2>
      </div>
    </button>
  );
}

export default CustomButton;
