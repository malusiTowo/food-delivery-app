import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import PastCurrentTabs from "./PastCurrentTabs/PastCurrentTabs";

interface OrdersScreenProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB"
  }
});

const OrdersScreen: React.FC<OrdersScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 38, fontWeight: "800" }}>Orders</Text>
      </View>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <PastCurrentTabs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrdersScreen;
