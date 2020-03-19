/*
we are here controlling the opacity so initial value will be -->1 


*/

import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated
} from "react-native";

class Opacity extends React.Component {
  constructor() {
    super();
    this.state = {
      animation: new Animated.Value(1) //opacity :100%
    };
  }
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 1000
    }).start(() => {
      // in this call back we can continue other animation or setState as per our need
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 2000
      }).start();
    }); //animation single value to another value over a period of time
  };
  render() {
    //dynamic style

    const animatedStyle = {
      opacity: this.state.animation
    };
    return (
      <>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]}></Animated.View>
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

export default Opacity;
