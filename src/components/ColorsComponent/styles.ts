import { ImageStyle, StyleSheet, ViewStyle, Dimensions } from 'react-native';

interface IStyle {
  container: ViewStyle;
  contentStyle: ViewStyle;
  imageStyle: ImageStyle;
}

const { width } = Dimensions.get('window');
export const ITEM_WIDTH = 80;
export const ITEM_SPACE = 1;
export const SNAP_ITEM = ITEM_WIDTH + ITEM_SPACE;

export const SELECTED_ITEM_WIDTH = 120;
export const SELECTED_ITEM_SPACE = 5;
export const SELECTED_SNAP_ITEM = SELECTED_ITEM_WIDTH + SELECTED_ITEM_SPACE;

export default StyleSheet.create<IStyle>({
  container:    {
    height: 120,
  },
  contentStyle: {
    alignItems:        'center',
    paddingHorizontal: (width - SELECTED_SNAP_ITEM) / 2,
  },
  imageStyle:   {
    marginHorizontal: 0.5,
  },
});
