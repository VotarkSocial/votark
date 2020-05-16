import { Dimensions, Platform, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * 2*scale/3 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(Math.log(newSize)+Math.pow(newSize,(1/2))))*4
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(Math.log(newSize)+Math.pow(newSize,(1/2))))*4 - 2
  }
}