import React, { useState } from "react";
import { View, StyleSheet, TextInput, I18nManager, Image } from "react-native";
import { Colors, width } from "../common";
import { SText } from "../components";
// import { SText } from "./Text";

const InputIon = ({
  icon,
  cStyle,
  iconStyle,
  inputStyle,
  image,
  imageFocused,
  placeholder,
  value,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      <SText title={placeholder} style={styles.header} /> 
     
      <View
        style={[
          styles.inputC,
         { borderColor:'#B0B0B3' },
          cStyle
        ]}
      >
      

        <TextInput
          placeholder={placeholder}
          style={[styles.inputStyle, inputStyle]}
          underlineColorAndroid="transparent"
          placeholderTextColor={Colors.white}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
       
      </View>
    </View>
  );
};
export { InputIon };

const styles = StyleSheet.create({
  container: {
    height: width * 0.18,
    justifyContent: "flex-end",
    position: 'relative',

  },
  header: {
    color: '#B0B0B3',
    position:'absolute',
    top:12,
    left:50,
    paddingHorizontal:5,
    zIndex:50,
    backgroundColor:'white',
    fontSize:12
   
  },
  inputC: {
    flexDirection: "row",
    alignItems: "center",
    height: width * 0.12,
    borderRadius: width,
    width: "80%",
    alignSelf: "center",
    paddingHorizontal: width * 0.03,
    paddingStart: width * 0.037,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 65,

   
  },
  inputStyle: {
    flex: 1,
    fontSize: width * 0.037,
    fontFamily: "sukar-black",
    color: '#B0B0B3',
    textAlign: I18nManager.isRTL ? "right" : "left",
    position:'relative',

  },
  
});
