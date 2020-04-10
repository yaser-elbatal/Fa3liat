import React, { useState } from "react";
import { Image } from "react-native";
import { BgImage } from "../../../components";
import { Images } from "../../../common";
import styles from "./style";
import { InputIcon, Btn } from "../../../components";
import { _toLogin, _toActivation } from "../../../navigation/Navigator";

const Register = ({ navigation }) => {
  const [userName, setUserName] = useState("أوامر الشبكة");

  return (
    <BgImage btnName="دخول" btnPress={() => _toLogin(navigation)}>
      <Image source={Images.logo} style={styles.image} />
      <InputIcon
        placeholder={"اسم المستخدم"}
        onChangeText={e => setUserName(e)}
        image={Images.whiteProfile}
        imageFocused={Images.blueProfile}
        value={userName}
      />
      <InputIcon
        placeholder={"رقم الجوال"}
        onChangeText={e => console.log(e)}
        image={Images.whitePhone}
        imageFocused={Images.bluePhone}
      />
      <InputIcon
        placeholder={"البريد الالكتروني"}
        onChangeText={e => console.log(e)}
        image={Images.whiteEmail}
        imageFocused={Images.blueEmail}
      />
      <InputIcon
        placeholder={"كلمة المرور"}
        onChangeText={e => console.log(e)}
        image={Images.whiteLock}
        imageFocused={Images.blueLock}
      />
      <InputIcon
        placeholder={"تأكيد كلمة المرور"}
        onChangeText={e => console.log(e)}
        image={Images.whiteLock}
        imageFocused={Images.blueLock}
      />
      <Btn
        text={"تسجيل"}
        btnStyle={styles.loginBtn}
        textStyle={styles.btnText}
        onPress={() => _toActivation(navigation)}
      />
    </BgImage>
  );
};

export { Register };
