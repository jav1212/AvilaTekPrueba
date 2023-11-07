import React from 'react';
import { MONTSERRAT } from '../Utils/fonts';

function Navbar() {
  return (
    <div
      className={` bg-systemBackground-200 w-full flex justify-center items-center font-medium text-secondary-600 ${MONTSERRAT.className}`}
      style={{ height: '30px' }}
    >
      <div className=" w-10/12 flex justify-around">
        <div className=" text-small">Inicio</div>
        <div className=" text-small">Comprar por marca</div>
        <div className=" text-small">Comprar por mascota</div>
        <div className=" text-small">Nuestro servicios</div>
        <div className=" text-small">Promociones</div>
        <div className=" text-small">Nosotros</div>
      </div>
    </div>
  );
}

export default Navbar;
