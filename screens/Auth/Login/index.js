import React, { useState, useContext } from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import { Images } from "../../../common";
import styles from "./style";
import { InputIcon, SText, Btn, BgImage } from "../../../components";
import { _toRegister, _toHome } from "../../../navigation/Navigator";
import UserContext from "../../../UserContext";

const Login = ({ navigation }) => {
  const [phone, setPhone] = useState("00000");
  const [password, setPassword] = useState("");
  const { setLogin, setLogout } = useContext(UserContext);

  return (
    <BgImage btnName="تسجيل" btnPress={() => _toRegister(navigation)}>
      <Image source={Images.logo} style={styles.image} />

      <InputIcon
        placeholder={"رقم الجوال / البريد الالكتروني"}
        onChangeText={(e) => setPhone(e)}
        image={Images.whitePhone}
        imageFocused={Images.bluePhone}
        value={phone}
      />
      <InputIcon
        placeholder={"كلمة المرور"}
        onChangeText={(e) => setPassword(e)}
        image={Images.whiteLock}
        imageFocused={Images.blueLock}
        value={password}
      />
      <View style={styles.rowSpace}>
        <TouchableWithoutFeedback>
          <SText title="نسيت كلمة المرور؟" style={styles.text} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => _toHome(navigation)}>
          <SText title="دخول كذائر" style={styles.text} />
        </TouchableWithoutFeedback>
      </View>
      <Btn
        text={"دخول"}
        btnStyle={styles.loginBtn}
        textStyle={styles.btnText}
        onPress={(() => _toHome(navigation), setLogin)}
      />
    </BgImage>
  );
};

export { Login };
