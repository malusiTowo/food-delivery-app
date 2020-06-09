import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import RestaurantTab from "./RestaurantTab";

const Tab = createMaterialTopTabNavigator();

function RestaurantProductTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#535BFE",
        inactiveTintColor: "#ccc",
        style: {
          backgroundColor: "transparent"
        },
        indicatorStyle: {
          borderBottomColor: "#535BFE"
        }
      }}
    >
      <Tab.Screen
        options={{ title: "Popular" }}
        name="Popular"
        component={RestaurantTab}
      />
      <Tab.Screen
        options={{ title: "Burgers" }}
        name="Burgers"
        component={RestaurantTab}
      />
      <Tab.Screen
        options={{ title: "Pizzas" }}
        name="Pizzas"
        component={RestaurantTab}
      />
    </Tab.Navigator>
  );
}

export default RestaurantProductTabs;
