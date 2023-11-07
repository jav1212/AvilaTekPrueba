import React from 'react';
import Banner from '../Utils/Banner';

function Icons() {
  const data = [
    { src: '/Location icon black.png', height: 16, width: 16 },
    { src: '/Pet icon.png', height: 16, width: 16 },
    { src: '/User.png', height: 16, width: 16 },
    { src: '/Shopping cart.png', height: 16, width: 16 },
  ];

  return (
    <div className=" mr-4 ml-4  w-fit h-fit flex">
      {data.map((element, index) => (
        <div
          className=" mr-1 ml-1 h-fit"
          key={index}
          style={{ height: element.height, width: element.width }}
        >
          <Banner
            src={element.src}
            height={element.height}
            width={element.width}
          />
        </div>
      ))}
    </div>
  );
}

export default Icons;
