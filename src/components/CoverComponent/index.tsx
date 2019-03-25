import React from 'react';
import { Animated, ImageStyle } from 'react-native';
import listImage from '../../listImages';
import styles, { HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT, HEADER_SCROLL_DISTANCE } from './styles';

interface IProps {
  currentColorIndex: number;
  scrollY: Animated.AnimatedValue;
}

class CoverComponent extends React.Component<IProps> {

  private _imageInterpolate: () => ImageStyle = () => {
    const { scrollY } = this.props;
    const imageHeight: any = scrollY.interpolate({
      inputRange:  [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    return {
      height: imageHeight,
    };
  };
  private _scrollInterpolate: () => ImageStyle = () => {
    const { scrollY } = this.props;
    const translateY: any = scrollY.interpolate({
      inputRange:  [HEADER_SCROLL_DISTANCE, HEADER_MAX_HEIGHT],
      outputRange: [0, -HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    return {
      transform: [{
        translateY,
      }],
    };
  };

  public render(): JSX.Element {
    const { currentColorIndex } = this.props;
    const images = listImage[currentColorIndex].images;
    return (
      <Animated.ScrollView
        horizontal={true}
        style={[styles.container, this._scrollInterpolate()]}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {images.map((item) => {
          return (
            <Animated.Image
              key={item}
              source={{ uri: item }}
              style={[styles.imagesStyle, this._imageInterpolate()]}
              resizeMode="contain"
            />
          );
        })}
      </Animated.ScrollView>
    );
  }
}

export default CoverComponent;
