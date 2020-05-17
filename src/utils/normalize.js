import { Dimensions, Platform, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = Math.sqrt(Math.pow(SCREEN_WIDTH,2) + Math.pow(SCREEN_HEIGHT,2))/25;

export function normalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(Math.log(newSize)+Math.pow(newSize,(1/2)))) 
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(Math.log(newSize)+Math.pow(newSize,(1/2)))) - 2
  }
}