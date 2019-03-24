import * as React from 'react';
import { Animated, ImageStyle, ScrollView } from 'react-native';
import colorList from './colorList';
import styles, { ITEM_SPACE, ITEM_WIDTH, SELECTED_ITEM_SPACE, SELECTED_ITEM_WIDTH, SNAP_ITEM } from './styles';

interface IState {
  scrollX: Animated.AnimatedValue;
}

interface IProps {
  setCurrentIndex(index: number): void;
}

class ColorsComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      scrollX: new Animated.Value(0),
    };
  }

  private _onScroll: (e: any) => void = (e) => {
    Animated.event([{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }])(e);
  };

  private _onScrollEnd = (e: any) => {
    const index = Number((e.nativeEvent.contentOffset.x / 80).toFixed(0));
    this.props.setCurrentIndex(index);
  };
  private _imageSizeInterpolate: (index: number) => ImageStyle = (index) => {
    const position = Animated.divide(this.state.scrollX, SNAP_ITEM);
    const size: any = position.interpolate({
      inputRange:  [index - 1, index, index + 1],
      outputRange: [ITEM_WIDTH, SELECTED_ITEM_WIDTH, ITEM_WIDTH],
      extrapolate: 'clamp',
    });
    const marginHorizontal: any = position.interpolate({
      inputRange:  [index - 1, index, index + 1],
      outputRange: [ITEM_SPACE, SELECTED_ITEM_SPACE, ITEM_SPACE],
      extrapolate: 'clamp',
    });
    return {
      width:  size,
      height: size,
      marginHorizontal,
    };
  };

  public render(): JSX.Element {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentStyle}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={this._onScroll}
        onMomentumScrollEnd={this._onScrollEnd}
        scrollEventThrottle={1}
        snapToAlignment="start"
        snapToInterval={SNAP_ITEM}
        decelerationRate={0}
      >
        {colorList.map((item, index) => {
          return (
            <Animated.Image
              key={item.id}
              source={{ uri: item.image }}
              style={[
                styles.imageStyle,
                this._imageSizeInterpolate(index),
              ]}
            />
          );
        })}
      </ScrollView>
    );
  }
}

export default ColorsComponent;
