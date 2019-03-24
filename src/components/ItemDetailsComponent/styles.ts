import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { headingH1, headingH5, headingH6, subHeadingH5 } from '../../common/commonStyle';
import { width, HEADER_MAX_HEIGHT } from '../CoverComponent/styles';

interface IStyle {
  container: ViewStyle;
  contentStyle: ViewStyle;
  type: TextStyle;
  mainTitle: TextStyle;
  rowBetween: ViewStyle;
  sectionTitle: TextStyle;
  sectionSubTitle: TextStyle;
  descriptionTitle: TextStyle;
  descriptionText: TextStyle;
  descriptionListText: TextStyle;
  breakerStyle: ViewStyle;
}

export default StyleSheet.create<IStyle>({
  container:           {
    width,
  },
  contentStyle:        {
    paddingTop:    HEADER_MAX_HEIGHT,
    paddingBottom: 50,
  },
  type:                {
    ...headingH6,
    color:      '#666666',
    marginLeft: 10,
    marginTop:  20,
  },
  mainTitle:           {
    ...headingH1,
    color:            '#000',
    marginHorizontal: 10,
    marginLeft:       10,
    marginTop:        10,
  },
  rowBetween:          {
    flexDirection:     'row',
    justifyContent:    'space-between',
    paddingHorizontal: 10,
  },
  sectionTitle:        {
    ...headingH5,
    color:        '#000',
    marginBottom: 10,
  },
  sectionSubTitle:     {
    ...subHeadingH5,
    color: '#000',
  },
  descriptionTitle:    {
    ...headingH5,
    color:            '#000',
    marginTop:        20,
    marginHorizontal: 10,
  },
  descriptionText:     {
    ...subHeadingH5,
    color:            '#000',
    marginTop:        6,
    marginHorizontal: 10,
    flexDirection:    'column',
  },
  descriptionListText: {
    flexDirection: 'column',
    marginLeft:    6,
  },
  breakerStyle:        {
    left:             0,
    right:            0,
    height:           1,
    marginHorizontal: 10,
    backgroundColor:  '#F2F2F2',
    marginVertical:   20,
  },
});
