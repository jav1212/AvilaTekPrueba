import React from 'react';

type Props = { text: string };

function Subtitle({ text }: Props) {
  return (
    <p className=" text-small font-medium font-[Calibri] text-secondary-500">
      {text}
    </p>
  );
}

export default Subtitle;
