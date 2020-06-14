import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TabsParamList } from "../../navigation/ParamList/TabsParamList";
import Basket from "./Basket/Basket";
import HomeStack from "./Home/index";
import Orders from "./Orders/index";
import ProfileStack from "./Profile/index";

interface AppStackProps {}

const Tab = createBottomTabNavigator<TabsParamList>();

const Tabs: React.FC<AppStackProps> = () => {
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
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Basket" component={Basket} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default Tabs;
