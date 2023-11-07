import React from 'react';
import Banner from '../Utils/Banner';

function Footer() {
  return (
    <div className=" w-full relative " style={{ height: '94px' }}>
      <div className="flex justify-between">
        <div className=" flex items-end ml-14">
          <Banner src="/Dog house.png" height={40} width={39} />
        </div>
        <div className=" mr-14">
          <Banner src="/VectorTree.png" height={60} width={53} />
        </div>
      </div>
      <div
        className=" flex justify-center items-center bg-primary-300"
        style={{ height: '36px' }}
      >
        <h4
          className=" text-center mr-2 font-medium text-textColor-white font-[Calibri text-small"
          style={{ lineHeight: '18px' }}
        >
          Copyright © 2021 Maxi Pet. Todos los Derechos Reservados. Desarrollado
          por Avila Tek
        </h4>
        <Banner src="/Avila.png" height={18} width={28} />
      </div>
    </div>
  );
}

export default Footer;
