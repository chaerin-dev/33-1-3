import { widthHeight } from '@/types/style';

const widthHeightToPx = (widthHeight: widthHeight) =>
  typeof widthHeight === 'number' ? widthHeight + 'px' : widthHeight;

export default widthHeightToPx;