import React from 'react';
import {
  Animated,
  PanResponder,
  PanResponderInstance,
  ScrollView,
  TextStyle,
  View,
  ViewStyle,
  Platform,
} from 'react-native';
import sizeList from './sizeList';
import styles, { ITEM_WIDTH } from './styles';

interface IState {
  scrollX: Animated.AnimatedValue;
  markerX: Animated.AnimatedValue;
}

class SizeComponent extends React.Component<{}, IState> {
  private _panResponder: PanResponderInstance;

  constructor(props: {}) {
    super(props);
    this.state = {
      scrollX: new Animated.Value(0),
      markerX: new Animated.Value(0),
    };
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder:  () => Platform.OS !== 'ios',
      onPanResponderGrant:          (e, gestureState) => {
        //
      },
      onPanResponderMove:           (e, gestureState) => {
        if (gestureState.dx > 0) {
          Animated.timing(this.state.markerX, {
            toValue:  100,
            duration: 100,
          }).start();
        } else {
          Animated.timing(this.state.markerX, {
            toValue:  -100,
            duration: 100,
          }).start();
        }
      },
      onPanResponderRelease:        () => {
        Animated.spring(this.state.markerX, {
          toValue: 0,
          damping: 6,
        }).start();
      },
    });
  }

  private _onScroll: (e: any) => void = (e) => {
    Animated.event([{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }])(e);
  };

  private _onScrollEnd = () => {
    Animated.spring(this.state.markerX, {
      toValue: 0,
      damping: 6,
    }).start();
  };

  private _contextTextInterpolate: (index: number) => TextStyle = (index) => {
    const position = Animated.divide(this.state.scrollX, ITEM_WIDTH);
    const color: any = position.interpolate({
      inputRange:  [index - 3, index - 2, index - 1, index, index + 1, index + 2, index + 3],
      outputRange: ['#E5E5E5', '#CCCCCC', '#999999', '#FFF', '#999999', '#CCCCCC', '#E5E5E5'],
      extrapolate: 'clamp',
    });
    const fontSize: any = position.interpolate({
      inputRange:  [index - 1, index, index + 1],
      outputRange: [14, 18, 14],
      extrapolate: 'clamp',
    });
    return {
      color,
      fontSize,
    };
  };

  private _markerInterpolate: () => ViewStyle = () => {
    const translateX: any = this.state.markerX.interpolate({
      inputRange:  [-100, 0, 100],
      outputRange: [-50, 0, 50],
    });
    return {
      transform: [{
        translateX,
      }],
    };
  };

  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <ScrollView
          {...this._panResponder.panHandlers}
          style={styles.listStyle}
          contentContainerStyle={styles.contentStyle}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onScroll={this._onScroll}
          scrollEventThrottle={16}
          snapToAlignment="start"
          snapToInterval={ITEM_WIDTH}
          decelerationRate={0}
          onMomentumScrollEnd={this._onScrollEnd}
        >
          {sizeList.map((item, index) => {
            return (
              <Animated.View
                key={item.id}
                style={[
                  styles.itemStyle,
                ]}
              >
                <Animated.Text
                  style={[styles.itemTextStyle, this._contextTextInterpolate(index)]}
                >
                  {item.content}
                </Animated.Text>
              </Animated.View>
            );
          })}
        </ScrollView>
        <Animated.View style={[styles.selectedMark, this._markerInterpolate()]} />
        <View style={styles.axisContainer}>
          {sizeList.map((item, index) => {
            return (
              <View key={`${item.id}-axis-top-Y`} style={styles.axisItemContainer}>
                <View style={[styles.axis, { backgroundColor: index === 3 ? '#000' : '#F0F0F0' }]} />
                <View style={[styles.axis, { backgroundColor: index === 3 ? '#000' : '#F0F0F0' }]} />
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default SizeComponent;
