import React, { useState } from 'react';
import Image from 'next/image';
import Banner from '../Utils/Banner';
import useMove from '../../hooks/useMove';

function Carousel() {
  const carouselData = [
    { id: 0, src: '/o CTA btn.png' },
    { id: 1, src: '/Rectangle 4.png' },
    { id: 2, src: '/o CTA btn.png' },
    { id: 3, src: '/Rectangle 4.png' },
  ];
  const [index, setIndex] = useState<number>(0);
  const useMoveHooke = useMove({
    state: index,
    setState: setIndex,
    carouselSize: carouselData.length,
  });
  console.log(carouselData.length);

  const handleOnClick = (e) => {
    setIndex(parseInt(e.target.id));
  };

  return (
    <div
      className=" w-full flex flex-col justify-center items-center"
      style={{ height: '580px', objectFit: 'fill' }}
    >
      <Image
        src={carouselData[index].src}
        alt=""
        width={1600}
        height={580}
        sizes="width: 100%, height: 580px"
        quality="100"
        style={{ marginTop: '116px' }}
      />
      <div
        className=" absolute"
        style={{
          marginTop: '560px',
        }}
      >
        {carouselData.map((element, item) => (
          <button
            key={item}
            aria-label="a"
            id={element.id.toString()}
            className={` m-3 ${
              index == carouselData.indexOf(element)
                ? 'bg-primary-300'
                : ' bg-secondary-100'
            }  rounded-md`}
            style={{ width: '50px', height: '6px' }}
            type="button"
            key={item}
            onClick={handleOnClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
