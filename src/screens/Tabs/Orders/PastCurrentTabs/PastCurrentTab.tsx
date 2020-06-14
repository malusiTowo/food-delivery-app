import { inject, observer } from "mobx-react";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import OrderCard from "../../../../components/Orders/OrderCard";
import Root from "../../../../mobx/Root";

interface RestaurantTabProps {
  root: typeof Root;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB"
  }
});

const RestaurantTab: React.FC<RestaurantTabProps> = ({ root }) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={root.basket.products}
        renderItem={() => (
          <View style={{ margin: 10 }}>
            <OrderCard />
          </View>
        )}
      />
    </View>
  );
};

export default inject("root")(observer(RestaurantTab));
