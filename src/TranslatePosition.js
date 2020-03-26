/*
You may need to translate something over the screen ,it operate without effecting layout
here we are going to translate : initial value : 0


for x -->toValue =+ve use for left to right
                 =-ve use for right to left
                 
                 
for y -->toValue =+ve use for top to bottom
                 =-ve use for bottom to top

*/



import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated
} from "react-native";

class TranslatePosition extends React.Component {
  constructor() {
    super();
    this.state = {
      animation: new Animated.Value(0)
    };
  }
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300, //from 0-->300
      duration: 1500
    }).start(() => {
      // in this call back we can continue other animation or setState as per our need

      //this.state.animation.setValue(0);  jump back to 0 without any animation smoothness
      Animated.timing(this.state.animation, {
        toValue: 0, //from 300-->0
        duration: 2000
      }).start();
    }); //animation single value to another value over a period of time
  };
  render() {
    //dynamic style
    //inorder to translate we have to use transform which takes an array
    const animatedStyle = {
      transform: [
        {
          translateY: this.state.animation
        }
      ]
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

export default TranslatePosition;
