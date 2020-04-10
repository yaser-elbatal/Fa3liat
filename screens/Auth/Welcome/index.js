import React from "react";
import { Image, I18nManager } from "react-native";
import { BgImage } from "../../../components";
import { Images } from "../../../common";
import styles from "./style";
import { CircleBtn } from "./CircleBtn";
import { _toLogin } from "../../../navigation/Navigator";

const Welcome = ({ navigation }) => {
  const goLogin = () => _toLogin(navigation);
  I18nManager.forceRTL(true);

  return (
    <BgImage>
      <Image source={Images.logo} style={styles.image} />
      <CircleBtn title="الإنجليزية" style={styles.fCircle} onPress={goLogin} />
      <CircleBtn
        selected
        title="العربية"
        style={styles.sCircle}
        onPress={goLogin}
      />
    </BgImage>
  );
};

export { Welcome };
