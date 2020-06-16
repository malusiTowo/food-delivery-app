import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface OrderAddressProps {
  to: string;
  from: string;
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "flex-start",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    padding: 10,
    paddingLeft: 30
  },
  toText: {
    color: "#535BFE",
    fontSize: 17,
    fontWeight: "500"
  },
  fromText: {
    color: "#ccc",
    fontSize: 17,
    fontWeight: "500"
  }
});

const OrderAddress: React.FC<OrderAddressProps> = ({ to, from }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.toText}>To: {to}</Text>
      <Text style={styles.fromText}>From: {from}</Text>
    </View>
  );
};

export default OrderAddress;
