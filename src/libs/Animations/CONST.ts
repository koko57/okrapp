import {Dimensions} from 'react-native';
import {rect, Skia} from '@shopify/react-native-skia';

export const HEART = Skia.Path.MakeFromSVGString(
  'M 32 60 C -29.2 19.6 13.2 -12 31.2 4.4 C 31.6 4.8 31.6 5.2 32 5.2 A 12.4 12.4 90 0 1 32.8 4.4 C 50.8 -12 93.2 19.6 32 60 Z',
)!;

export const {width, height} = Dimensions.get('window');
export const CENTER = {x: width / 2, y: height / 2};
export const SRC = HEART.computeTightBounds();
export const PADDING = 64;
export const DST = rect(
  PADDING,
  PADDING,
  width - 2 * PADDING,
  height - PADDING * 2 - 120,
);

export const BPM = 44;
export const DURATION = (60 * 1000) / BPM;
export const VALUE_COUNT = 3;
