import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import { AppStackParamList } from "./ParamList/AppStackParamList";
import Basket from "../screens/Tabs/Basket";
import Home from "../screens/Tabs/Home";
import Orders from "../screens/Tabs/Orders";
import ProfileStack from "../screens/Tabs/Profile/index";

interface AppStackProps {}

const Tab = createBottomTabNavigator<AppStackParamList>();

const AppStack: React.FC<AppStackProps> = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let icon = <></>;

          if (route.name === "Home") {
            icon = <AntDesign name="home" size={20} color={color} />;
          } else if (route.name === "Orders") {
            icon = <SimpleLineIcons name="bag" size={20} color={color} />;
          } else if (route.name === "Basket") {
            icon = <SimpleLineIcons name="basket" size={20} color={color} />;
          } else if (route.name === "Profile") {
            icon = <Ionicons name="md-person" size={20} color={color} />;
          }

          return icon;
        }
      })}
      tabBarOptions={{
        activeTintColor: "#535BFE",
        inactiveTintColor: "#000"
        // showLabel:false
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Basket" component={Basket} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default AppStack;
