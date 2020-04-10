import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome, Login, Register, Activation } from "../screens/Auth";
import { Home, Profile } from "../screens/Events";
import { myProfile } from "../screens/Events/Profile/myProfile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerMenue } from "../screens/MenuBar/index";
import { Sports } from "../screens/Events/sports";
import { Art } from "../screens/Art/Art";
import { AboutApp } from "../screens/MenuBar/contentMenu/AboutApp/AboutApp";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrwerNAv = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerMenue {...props} />}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProfileRegister" component={Profile} />
        <Stack.Screen name="RegisterPrfile" component={myProfile} />
        <Stack.Screen name="sports" component={Sports} />
        <Stack.Screen name="Art" component={Art} />
        <Stack.Screen name="AboutApp" component={AboutApp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" headerMode="none">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Activation" component={Activation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { AuthNavigator, DrwerNAv };
