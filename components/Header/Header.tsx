import Carousel from '../Carousel/Carousel';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
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
        <SocialMedia
          template="mr-4 ml-4"
          data={[
            { src: '/instagram 1.png', height: 13, width: 13 },
            { src: '/twitter 1.png', height: 13, width: 16 },
            { src: '/facebook 1.png', height: 13, width: 7 },
          ]}
        />
      </div>
      <SearchBar />
      <Navbar />
    </div>
  );
}

export default Header;
