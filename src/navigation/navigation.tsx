import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "native-base";
import * as Font from "expo-font";
// import { inject, observer } from "mobx-react";
import { ActivityIndicator } from "react-native";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const CUSTOM_FONTS = {
  Roboto: require("../../node_modules/native-base/Fonts/Roboto.ttf"),
  RobotoMedium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf")
};

interface AppProps {}
const Navigation: React.FC<AppProps> = () => {
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
      <AppStack />
    </NavigationContainer>
  );
};

export default Navigation;
