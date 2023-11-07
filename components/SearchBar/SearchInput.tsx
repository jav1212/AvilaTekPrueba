import React from 'react';
import { MONTSERRAT } from '../Utils/fonts';
import Banner from '../Utils/Banner';

function SearchInput() {
  return (
    <div className=" flex relative">
      <input
        className={` rounded-md border-secondary-200 border p-4 placeholder:font-light  placeholder:text-slate-200  border-r-2  ${MONTSERRAT.className}`}
        style={{ width: '320px', height: '33px' }}
        placeholder="Buscador"
      />
      <div
        className="absolute right-3"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        <Banner src="/Search.png" height={16} width={16} />
      </div>
    </div>
  );
}

export default SearchInput;
