import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { inject, observer } from "mobx-react";
import { View } from "native-base";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import Root from "../mobx/Root";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const CUSTOM_FONTS = {
  Roboto: require("../../node_modules/native-base/Fonts/Roboto.ttf"),
  RobotoMedium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf")
};

interface AppProps {
  root: typeof Root;
}
const Navigation: React.FC<AppProps> = ({ root }) => {
  // ! check if user logged in
  const [isLoading, setIsLoading] = useState(true);

  const loadFonts = async () => {
    try {
      await Font.loadAsync(CUSTOM_FONTS);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color="black" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {root.user.name.length > 0 ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default inject("root")(observer(Navigation));
