import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import { ICONS_HEADER } from './IconsData';
import Location from './Location';
import SocialMedia from './SocialMedia';

function Header() {
  return (
    <div className=" w-full flex-col justify-center items-center fixed z-10">
      <div
        className=" w-full bg-primary-300 flex justify-end items-center"
        style={{ height: '26px' }}
      >
        <Location />
        <SocialMedia template="mr-4 ml-4" data={ICONS_HEADER} />
      </div>
      <SearchBar />
      <Navbar />
    </div>
  );
}

export default Header;
