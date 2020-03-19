import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Opacity from "./src/Opacity";
import TranslatePosition from "./src/TranslatePosition";
import Scalling from "./src/Scaling";

export default function App() {
  return (
    <View style={styles.container}>
      <Scalling />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
