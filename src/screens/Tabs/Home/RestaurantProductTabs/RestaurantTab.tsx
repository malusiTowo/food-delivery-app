import React from "react";
import { StyleSheet, View } from "react-native";
import ProductDisplay from "../../../../components/ExploreTab/ProductDisplay";

interface RestaurantTabProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB"
  }
});

const RestaurantTab: React.FC<RestaurantTabProps> = () => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 10 }}>
        <ProductDisplay />
      </View>
      <View style={{ margin: 10 }}>
        <ProductDisplay />
      </View>
      <View style={{ margin: 10 }}>
        <ProductDisplay />
      </View>
    </View>
  );
};

export default RestaurantTab;
