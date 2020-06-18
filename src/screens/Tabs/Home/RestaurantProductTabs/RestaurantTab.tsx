import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { inject } from "mobx-react";
import ProductDisplay from "../../../../components/ExploreTab/ProductDisplay";

import Root from "../../../../mobx/Root";
import { Product } from "../../../../db/restaurants";

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
  const handleAddToBasket = (product: Product) => {
    root.basket.addNewProduct(product);
  };

  const handleRemoveFromBasket = (product: Product) => {
    root.basket.removeProduct(product);
  };

  const handleUpdateProductBuyState = (product: Product, buyState: boolean) => {
    root.restaurantProducts.updateProductBuyStatus(product, buyState);
  };

  return (
    <View style={styles.container}>
      {root?.restaurantProducts?.products && (
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          data={root.restaurantProducts.products}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <View style={{ margin: 10 }}>
              <ProductDisplay
                handleUpdateProductBuyState={handleUpdateProductBuyState}
                addProduct={handleAddToBasket}
                removeProduct={handleRemoveFromBasket}
                product={item}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default inject("root")(RestaurantTab);
