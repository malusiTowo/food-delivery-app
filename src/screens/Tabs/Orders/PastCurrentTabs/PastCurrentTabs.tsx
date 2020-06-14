import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import PastCurrentTab from "./PastCurrentTab";

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
        options={{ title: "Past" }}
        name="Past"
        component={PastCurrentTab}
      />
      <Tab.Screen
        options={{ title: "Current" }}
        name="Current"
        component={PastCurrentTab}
      />
    </Tab.Navigator>
  );
}

export default RestaurantProductTabs;
