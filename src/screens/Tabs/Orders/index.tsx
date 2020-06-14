import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { OrdersStackParamList } from "../../../navigation/ParamList/OrdersStackParamList";
import OrderDetail from "./OrderDetail";
import Order from "./Orders";

const OrdersStack = createStackNavigator<OrdersStackParamList>();

function OrdersStackScreen() {
  return (
    <OrdersStack.Navigator headerMode="none" initialRouteName="Orders">
      <OrdersStack.Screen name="OrdersDetail" component={OrderDetail} />
      <OrdersStack.Screen name="Orders" component={Order} />
    </OrdersStack.Navigator>
  );
}

export default OrdersStackScreen;
