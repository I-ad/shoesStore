import React from 'react';
import { Animated, ScrollView, Text, View } from 'react-native';
import ColorsComponent from '../ColorsComponent';
import SizeComponent from '../SizeComponent';
import styles from './styles';
import colorList from '../ColorsComponent/colorList';
import sizeList from '../SizeComponent/sizeList';

interface IProps {
  setCurrentIndex(index: number): void;

  scrollY: Animated.AnimatedValue;
  currentColorIndex: number;
}

class ItemDetailsComponent extends React.Component<IProps> {
  private _onScroll: (e: any) => void = (e) => {
    Animated.event([{ nativeEvent: { contentOffset: { y: this.props.scrollY } } }])(e);
  };

  public render(): JSX.Element {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentStyle}
        onScroll={this._onScroll}
        scrollEventThrottle={16}
        decelerationRate={0}
      >
        <Text style={styles.type}>Men's Shoe</Text>
        <Text style={styles.mainTitle}>Nike React Element 55</Text>
        <View style={styles.breakerStyle} />
        <View>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>Colors</Text>
            <Text style={styles.sectionSubTitle}>{colorList.length}</Text>
          </View>
          <ColorsComponent
            setCurrentIndex={this.props.setCurrentIndex}
          />
        </View>
        <View style={styles.breakerStyle} />
        <View>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>Size</Text>
            <Text style={styles.sectionSubTitle}>
              {`${sizeList[0].content}-${sizeList[sizeList.length - 1].content}`}
            </Text>
          </View>
          <SizeComponent />
        </View>
        <View style={styles.breakerStyle} />
        <Text style={styles.descriptionTitle}>AN ELEMENT OF SURPRISE</Text>
        <Text style={styles.descriptionText}>Borrowing design lines from heritage Nike running shoes such as the
          Internationalist, the Nike React
          Element 55 Men's Shoe embraces history and pushes it into the future. Nike React foam delivers lightweight
          comfort, while rubber outsole pods and reflective details offer a cutting-edge look that begs a
          reaction.</Text>
        <Text style={styles.descriptionTitle}>Cool Comfort</Text>
        <Text style={styles.descriptionText}>A textile and synthetic upper, elevated with a high sheen, gives a
          lightweight look and feel. Robust
          taping and zigzag stitching wind along the back of the upper for a cool, deconstructed vibe.</Text>
        <Text style={styles.descriptionTitle}>Plush, Resilient Cushioning</Text>
        <Text style={styles.descriptionText}>Nike React technology is a lightweight, durable foam that delivers a
          smooth, responsive ride. A soft
          sockliner wicks moisture and conforms to your foot to further amplify shock absorption.</Text>
        <Text style={styles.descriptionTitle}>Next-Level Traction</Text>
        <Text style={styles.descriptionText}>Extending to the midsole, springy rubber nodules are strategically placed
          at the front and heel of the
          outsole to deliver great grip.
        </Text>
        <Text style={styles.descriptionTitle}>More Details</Text>
        <Text style={styles.descriptionText}>
          <Text style={styles.descriptionListText}>- Reflective details help you stand out Pull tab for easy on and
            off{'\n'}</Text>
          <Text style={styles.descriptionListText}>- Shown: Metallic Gold/White/White/Black{'\n'}</Text>
          <Text style={styles.descriptionListText}>- Style: BQ6166-700{'\n'}</Text>
        </Text>
      </ScrollView>
    );
  }
}

export default ItemDetailsComponent;
