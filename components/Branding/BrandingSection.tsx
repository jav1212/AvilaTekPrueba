import React from 'react';

type Props = {
  height: string;
  components: List<Component>;
  identifiers: List<Component>;
};

function BrandingSection({ height, components, identifiers }: Props) {
  return (
    <div className=" w-full flex pt-14 pb-14 justify-center items-center">
      <div className="w-5/6 flex flex-col justify-between" style={{ height }}>
        <div>{identifiers}</div>
        <div className=" flex justify-between">
          <div className=" mr-12">
            <h1
              className=" font-[Calibri] text-textColor-black"
              style={{ width: '360px' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit
              ut viverra fames sed.
            </h1>
          </div>

          {components}
        </div>
      </div>
    </div>
  );
}

export default BrandingSection;
