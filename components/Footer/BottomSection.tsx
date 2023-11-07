import React from 'react';
import { MONTSERRAT } from '../Utils/fonts';
import { FOOTER_DATA } from './FooterData';

type Props = {
  height: string;
};

function BottomSection({ height }: Props) {
  return (
    <div className=" w-full flex pt-14 pb-14 pl-14 justify-start items-start">
      <div className="w-5/6 flex  justify-between" style={{ height }}>
        {FOOTER_DATA.map((element, index) => (
          <div className=" flex flex-col" style={{ width: element.width }}>
            <h1
              className={` text-primary-300 text-header5 font-semibold ${MONTSERRAT.className}`}
              key={index}
            >
              {element.title}
            </h1>
            <div
              className=" flex flex-col justify-between mt-4"
              style={{ height: element.height }}
            >
              {element.items.map((item) => (
                <h2 className=" text-secondary-500 font-medium font-[Calibri] text-small">
                  {item}
                </h2>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottomSection;
