import { StyleSheet, TextStyle, ViewStyle, Dimensions } from 'react-native';

interface IStyle {
  container: ViewStyle;
  listStyle: ViewStyle;
  itemStyle: ViewStyle;
  itemTextStyle: TextStyle;
  contentStyle: ViewStyle;
  selectedMark: ViewStyle;
  axisContainer: ViewStyle;
  axisItemContainer: ViewStyle;
  axis: ViewStyle;
}

export const { width } = Dimensions.get('window');

export const ITEM_WIDTH = width / 7;
export const ITEM_HEIGHT = 76;

export default StyleSheet.create<IStyle>({
  container:         {
    width,
    height: ITEM_HEIGHT,
  },
  listStyle:         {
    height: 76,
    zIndex: 999,
  },
  contentStyle:      {
    paddingHorizontal: (width - ITEM_WIDTH) / 2,
  },
  itemStyle:         {
    width:          ITEM_WIDTH,
    height:         ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems:     'center',
  },
  itemTextStyle:     {
    fontWeight: '600',
  },
  selectedMark:      {
    width:           76,
    height:          36,
    backgroundColor: '#000',
    borderRadius:    76 / 2,
    alignSelf:       'center',
    position:        'absolute',
    top:             20,
    zIndex:          99,
  },
  axisContainer:     {
    height:        ITEM_HEIGHT,
    flexDirection: 'row',
    position:      'absolute',
    top:           0,
    zIndex:        9,
  },
  axisItemContainer: {
    width:          ITEM_WIDTH,
    height:         ITEM_HEIGHT,
    justifyContent: 'space-between',
  },
  axis:              {
    width:           1,
    height:          10,
    alignSelf:       'center',
  },
});
