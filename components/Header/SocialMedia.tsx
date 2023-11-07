import React from 'react';
import Banner from '../Utils/Banner';

type Props = {
  data: List<>;
  template: string;
};

function SocialMedia({ data, template }: Props) {
  return (
    <div className={`   w-fit h-fit flex ${template}`}>
      {data.map((element, index) => (
        <div
          className=" mr-1 ml-1"
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

export default SocialMedia;
