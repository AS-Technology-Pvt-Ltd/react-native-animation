/*
controlling the size of particular element without controlling its layout
 initial:1 ->100%


 // fliping card in particular direction 

 toValue : -1 ,

 and scaleX,scaleY-->in anydirection use animationValue

*/

import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated
} from "react-native";

class Scalling extends React.Component {
  constructor() {
    super();
    this.state = {
      animation: new Animated.Value(1) //size:100%
    };
  }
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 2, //negative value flip up side down
      duration: 1000
    }).start(() => {
      // in this call back we can continue other animation or setState as per our need
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 3000
      }).start();
    }); //animation single value to another value over a period of time
  };
  render() {
    //dynamic style

    const animatedStyle = {
      transform: [
        {
          scaleX: this.state.animation
        }
      ]
    };
    return (
      <>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]}>
            <Text>Hello</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "tomato"
  }
});

export default Scalling;
