import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

interface OrdersScreenProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const OrdersScreen: React.FC<OrdersScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>OrdersScreen</Text>
    </SafeAreaView>
  );
};

export default OrdersScreen;
