import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthStackParamList } from "./ParamList/AuthStackParamList";

import Landing from "../screens/Auth/Landing";
import Login from "../screens/Auth/Login";
import SignUp from "../screens/Auth/SignUp";
import VerifyNumber from "../screens/Auth/VerifyNumber";
import ForgotPassword from "../screens/Auth/ForgotPassword";

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      initialRouteName="Landing"
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="VerifyNumber" component={VerifyNumber} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
