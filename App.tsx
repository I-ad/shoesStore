import * as React from 'react';
import { Animated, SafeAreaView, View } from 'react-native';
import CoverComponent from './src/components/CoverComponent';
import ItemDetailsComponent from './src/components/ItemDetailsComponent';

interface IState {
  scrollY: Animated.AnimatedValue;
  currentColorIndex: number;
}

export default class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      scrollY:           new Animated.Value(0),
      currentColorIndex: 0,
    };
  }

  public setCurrentColorIndex: (currentColorIndex: number) => void = (currentColorIndex) => {
    this.setState({ currentColorIndex });
  };

  public render() {
    const { scrollY } = this.state;
    return (
      <View style={{ flex: 1}}>
        <ItemDetailsComponent
          scrollY={scrollY}
          setCurrentIndex={this.setCurrentColorIndex}
          currentColorIndex={this.state.currentColorIndex}
        />
        <CoverComponent
          currentColorIndex={this.state.currentColorIndex}
          scrollY={scrollY}
        />
      </View>
    );
  }
}
