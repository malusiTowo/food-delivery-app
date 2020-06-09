import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeStackParamList } from "../../../navigation/ParamList/HomeStackParamList";

import Home from "./Home";
import RestaurantDetail from "./RestaurantDetail";

const HomeStack = createStackNavigator<HomeStackParamList>();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode="none" initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="RestaurantDetail" component={RestaurantDetail} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
