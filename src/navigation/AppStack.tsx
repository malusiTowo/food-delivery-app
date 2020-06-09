import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppStackParamList } from "./ParamList/AppStackParamList";

import Tabs from "../screens/Tabs/index";
import Filters from "../screens/FiltersScreen/Filters";
import CheckOut from "../screens/CheckOut/Checkout";

const AppStack = createStackNavigator<AppStackParamList>();

interface AppStackProps {}

const App: React.FC<AppStackProps> = () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Tabs" component={Tabs} />
      <AppStack.Screen name="Filters" component={Filters} />
      <AppStack.Screen name="CheckOut" component={CheckOut} />
    </AppStack.Navigator>
  );
};

export default App;
