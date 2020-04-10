import React from "react";
import { Image, View, StyleSheet, ScrollView } from "react-native";
import { width, Images, height, Colors } from "../../common";
import { CornerBtn } from "../CornerBtn";

const BgImage = ({ children, btnName, btnPress }) => {
  return (
    <View style={styles.container}>
      <Image source={Images.bgImage} style={styles.image} />
      <View style={styles.opacityBg} />
      <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
      {btnName && <CornerBtn btnName={btnName} btnPress={btnPress} />}
    </View>
  );
};
export { BgImage };

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    position: "absolute",
    width: width,
    height: height,
    resizeMode: "stretch"
  },
  opacityBg: {
    position: "absolute",
    width: width,
    height: height,
    backgroundColor: Colors.bgOpacity
  }
});
