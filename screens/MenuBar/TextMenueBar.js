import React from "react";
import { View } from "react-native";
import { Images, width } from "../../common";
import TextModule from "./TextModule";
import { _toHome, _toArt, _toApoutApp } from "../../navigation/Navigator";

const TextMenueBar = ({ navigation }) => {
  return (
    <View>
      <TextModule
        label="الرئيسيه"
        image={Images.home}
        onPress={() => _toHome(navigation)}
      />
      <TextModule
        label="الهيئات"
        image={Images.filter}
        onPress={() => _toArt(navigation)}
      />
      <TextModule
        label="عن التطبيق"
        image={Images.about}
        onPress={() => _toApoutApp(navigation)}
      />
      <TextModule label="مشاركه التطبيق" image={Images.share} />
      <TextModule label=" احكام وشروط" image={Images.terms} />
      <TextModule label="اتصل بنا" image={Images.contactUs} />
      <TextModule label="اعدادات" image={Images.setting} />
      <TextModule label="تسجيل خروج" image={Images.logout} />
    </View>
  );
};
export { TextMenueBar };
