import React from 'react';

type Props = {
  height: string;
  components: List<Component>;
  identifiers: List<Component>;
};

function ServiceSection({ height, components, identifiers }: Props) {
  return (
    <div className=" w-full flex  pb-14 justify-center items-center">
      <div className="w-5/6 flex flex-col justify-between" style={{ height }}>
        <div>{identifiers}</div>
        <h2 className=" font-[Calibri] text-textColor-black ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
          viverra fames sed.
        </h2>
        <div className=" flex justify-between">{components}</div>
      </div>
    </div>
  );
}

export default ServiceSection;
