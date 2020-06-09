import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

interface PaymentScreenProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const PaymentScreen: React.FC<PaymentScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>PaymentScreen</Text>
    </SafeAreaView>
  );
};

export default PaymentScreen;
