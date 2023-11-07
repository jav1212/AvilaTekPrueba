import React, { ReactElement } from 'react';

type Props = {
  height: string;
  components: ReactElement[];
  identifiers: ReactElement[];
};

function ProductSection({ height, components, identifiers }: Props) {
  return (
    <div className=" w-full flex pt-14 pb-14 justify-center items-center">
      <div className="w-5/6 flex flex-col justify-between" style={{ height }}>
        <div>{identifiers}</div>
        <div className=" flex justify-between">{components}</div>
      </div>
    </div>
  );
}

export default ProductSection;
