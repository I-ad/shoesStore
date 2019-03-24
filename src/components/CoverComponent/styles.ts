import { StyleSheet, ViewStyle, Dimensions } from 'react-native';

interface IStyle {
  container: ViewStyle;
  imagesStyle: ViewStyle;
}

export const { width } = Dimensions.get('window');
export const HEADER_MAX_HEIGHT = width * 1.400;
export const HEADER_MIN_HEIGHT = width * 0.666;
export const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
export default StyleSheet.create<IStyle>({
  container:   {
    width,
    backgroundColor: '#F6F6F6',
    position:        'absolute',
    zIndex:          999999,
  },
  imagesStyle: {
    width,
  },
});
