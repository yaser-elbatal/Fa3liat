import React, { useState } from "react";
import { Image } from "react-native";
import { BgImage } from "../../../components";
import { Images } from "../../../common";
import { InputIcon, Btn } from "../../../components";
import styles from "./style";
import {
  _toActivation,
  _toLogin,
  _toHome,
} from "../../../navigation/Navigator";
import UserContext from "../../../UserContext";

const Activation = ({ navigation }) => {
  const [ActivateNum, SetActivateNum] = ["00000"];
  const { setLogin, setLogout } = React.useContext(UserContext);

  return (
    <BgImage>
      <Image source={Images.logo} style={styles.image} />
      <InputIcon
        placeholder={"كود التفعيل"}
        onChangeText={(e) => SetActivateNum(e)}
        image={Images.check}
        imageFocused={Images.check}
        value={ActivateNum}
      />
      <Btn
        text={"تأكيد"}
        btnStyle={styles.loginBtn}
        textStyle={styles.btnText}
        onPress={(() => _toHome(navigation), setLogin)}
      />
    </BgImage>
  );
};
export { Activation };
