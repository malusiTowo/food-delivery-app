import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Product } from "../../db/restaurants";

interface OrderProductDisplayProps {
  product: Product;
}

const styles = StyleSheet.create({
  productNameText: {
    color: "#000",
    fontSize: 17,
    fontWeight: "500"
  },
  priceText: {
    color: "#535BFE",
    fontSize: 17,
    fontWeight: "500"
  },
  quantityText: {
    color: "#ccc",
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 12
  }
});

const OrderProductDisplay: React.FC<OrderProductDisplayProps> = ({
  product
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Image
          style={{ height: 70, width: 70, borderRadius: 5 }}
          source={{ uri: product.imageUrl }}
        />
      </View>
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.productNameText}>{product.name}</Text>
        <View
          style={{ marginTop: 5, flexDirection: "row", alignItems: "center" }}
        >
          <Text style={styles.priceText}>${product.price}</Text>
          <Text style={styles.quantityText}>x3</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderProductDisplay;
