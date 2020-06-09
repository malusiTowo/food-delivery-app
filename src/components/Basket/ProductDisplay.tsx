import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Product } from "../../db/restaurants";

interface ProductDisplayProps {
  product: Product;
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-start"
  },
  wrapper: {
    height: 150,
    width: width - 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  titleWrapper: {
    justifyContent: "space-between",
    marginBottom: 5
  },
  titleText: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 5
  },
  distanceText: {
    color: "#535BFE",
    fontSize: 15,
    fontWeight: "500",
    width: 150
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    left: 5,
    top: 0,
    right: 0,
    position: "absolute",
    zIndex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 7
  },
  quantityWrapper: {
    backgroundColor: "#e6e8ed",
    flexDirection: "row",
    alignItems: "center",
    width: 85,
    height: 30,
    justifyContent: "center",
    borderRadius: 14
  },
  quantityNumber: {
    marginHorizontal: 10,
    color: "#535BFE",
    fontWeight: "600"
  },
  priceQuantityWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const subQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevState => prevState - 1);
    }
  };

  const addQuantity = () => {
    if (quantity < 10) {
      setQuantity(prevState => prevState + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: product.imageUrl }} />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>{product.name}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 14
            }}
          >
            <Text style={styles.distanceText}>300 g / piece</Text>
            <View style={styles.quantityWrapper}>
              <TouchableOpacity onPress={subQuantity}>
                <AntDesign name="minus" size={18} color="#535BFE" />
              </TouchableOpacity>
              <Text style={styles.quantityNumber}>{quantity}</Text>
              <TouchableOpacity
                hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                onPress={addQuantity}
              >
                <AntDesign name="plus" size={14} color="#535BFE" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.priceQuantityWrapper}>
            <Text>${product.price}</Text>
            <Text>${product.price * quantity} </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDisplay;
