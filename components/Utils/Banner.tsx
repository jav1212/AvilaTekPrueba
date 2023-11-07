import Image from 'next/image';
import React from 'react';

type Props = { height: number; width: number; src: string };

export default function Banner({ height, width, src }: Props) {
  return <Image src={src} height={height} width={width} alt="" />;
}
