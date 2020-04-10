import React, { useRef, useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { _toHome, _toLogin, _toProfileRegister } from "../navigation/Navigator";
import { useNavigation } from "@react-navigation/native";
import RBSheet from "react-native-raw-bottom-sheet";
import { SearchBottom } from "../screens/Events/Search";
import { height, width, Images } from "../common";

export const BottomNavigator = () => {
  const [selected, setSelected] = useState(1);
  const navigation = useNavigation();
  const refRBSheet = useRef();

  return (
    <View style={styles.cnotainer}>
      <TouchableOpacity
        onPress={() => {
          _toHome(navigation);
          setSelected(1);
        }}
      >
        <Image source={Images.bhome} style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelected(2)}>
        <Image source={Images.gray} style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{ elevation: 0 }}
        onPress={() => {
          _toHome(navigation);
          setSelected(3);
          refRBSheet.current.open();
        }}
      >
        <Image source={Images.search} style={styles.image} />
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        animationType="slide"
        duration={100}
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            flex: 1,
          },
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#EF659C",
            width: 50,
            bottom: 10,
          },
        }}
      >
        <SearchBottom onPress={() => refRBSheet.close} />
      </RBSheet>

      <TouchableOpacity onPress={() => setSelected(4)}>
        <Image source={Images.save} style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          _toProfileRegister(navigation);
        }}
      >
        <Image source={Images.profile} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cnotainer: {
    flex: 1,
    flexDirection: "row",
    bottom: width * 0.0001,
    backgroundColor: "#121320",
    justifyContent: "space-around",
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    width: width,
    padding: width * 0.03,
  },
  image: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: "stretch",
    alignSelf: "center",
  },
});
