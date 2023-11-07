import React from 'react';
import Logo from './Logo';
import SearchInput from './SearchInput';
import Icons from './Icons';

function SearchBar() {
  return (
    <div
      className=" w-full bg-systemBackground-100 flex justify-between items-center"
      style={{ height: '60px' }}
    >
      <div className=" ml-14 flex justify-center items-start">
        <Logo />
      </div>
      <div className=" flex justify-center items-center">
        <SearchInput />
      </div>
      <div className=" mr-14 flex justify-center items-end">
        <Icons />
      </div>
    </div>
  );
}

export default SearchBar;
