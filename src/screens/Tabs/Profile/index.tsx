import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ProfileStackParamList } from "../../../navigation/ParamList/ProfileStackParamList";
import Profile from "./Profile";
import Payment from "./Payment";
import Shipping from "./Shipping";

const ProfileStack = createStackNavigator<ProfileStackParamList>();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator headerMode="none" initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Payment" component={Payment} />
      <ProfileStack.Screen name="Shipping" component={Shipping} />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackScreen;
