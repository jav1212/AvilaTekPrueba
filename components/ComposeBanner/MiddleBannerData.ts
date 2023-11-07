import { List } from 'immutable';
import Image from './ImageType';

const bannerData1: List<Image> = [
  {
    src: '/shutterstock_1082072867-2-768x512 1.png',
    width: 580,
    height: 220,
  },
  {
    src: '/dog-food-1296x728-header 1.png',
    height: 220,
    width: 580,
  },
];

const bannerData2: List<Image> = [
  {
    src: '/Ad2.png',
    width: 1160,
    height: 220,
  },
];

export const BANNER_DATA_1 = bannerData1;
export const BANNER_DATA_2 = bannerData2;
