import React from 'react';
import Item from './Item';
import Subtitle from '../Utils/Subtitle';
import Title from '../Utils/Title';

function Categories() {
  const categories = [
    'Perro',
    'Gato',
    'Peces',
    'Roedores',
    'Reptiles',
    'Placeholder',
  ];

  return (
    <div className=" w-full flex pt-14 mt-8 justify-center items-center">
      <div
        className=" w-5/6 flex flex-col justify-between"
        style={{ height: '239px' }}
      >
        <div>
          <Subtitle text="Lorem ipsum dolor sit amet." />
          <Title text="UNA GRAN VARIEDAD DE CATEGORIAS" />
        </div>

        <div className="flex justify-between">
          {categories.map((element, index) => (
            <Item key={index} name={element} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
