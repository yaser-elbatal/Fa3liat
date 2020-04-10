import React, { useState, useEffect } from "react";
import { Platform, StatusBar, StyleSheet, View, Switch } from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AuthNavigator, DrwerNAv } from "./navigation/AuthStack";
import { UserProvider } from "./UserContext";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [token, settoken] = useState("");

  const setLogin = () => {
    settoken("yasser");
  };
  const setLogout = () => {
    settoken("");
  };
  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "sukar-black": require("./assets/fonts/sukar-black.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        {Platform.OS != "ios" && <StatusBar />}

        <UserProvider value={{ setLogin, setLogout }}>
          {token ? <DrwerNAv /> : <AuthNavigator />}
        </UserProvider>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
