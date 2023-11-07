import React, { useState, useEffect } from 'react';

type Props = {
  state;
  setState;
  carouselSize;
};

const useMove = ({ state, setState, carouselSize }: Props) => {
  useEffect(() => {
    const interval = setInterval(
      () => {
        if (carouselSize === state + 1) setState(0);
        else setState(state + 1);
      },
      // Devuelve un valor que se pueda utilizar para limpiar el intervalo.
      7000
    );

    return () => clearInterval(interval);
  }, [carouselSize, setState, state]);
};

export default useMove;
