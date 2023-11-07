import React from 'react';
import { MONTSERRAT } from './fonts';

type Props = { text: string };

function Title({ text }: Props) {
  return (
    <h4
      className={` text-header4 text-primary-300 font-bold weight-700 ${MONTSERRAT.className}`}
    >
      {text}
    </h4>
  );
}

export default Title;
