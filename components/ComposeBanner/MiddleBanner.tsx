import React from 'react';
import Banner from '../Utils/Banner';
import Images from './ImageType';

type Props = { images: [] };

function MiddleBanner({ images }: Props) {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className=" flex w-5/6">
        {images.map((element, index) => (
          <Banner
            key={index}
            src={element.src}
            height={element.height}
            width={element.width}
          />
        ))}
      </div>
    </div>
  );
}

export default MiddleBanner;
