import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

interface BasketScreenProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const BasketScreen: React.FC<BasketScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>BasketScreen</Text>
    </SafeAreaView>
  );
};

export default BasketScreen;
