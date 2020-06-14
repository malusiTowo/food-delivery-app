import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import { Product } from "../../db/restaurants";

interface ProductDisplayProps {
  product: Product;
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end"
  },
  productInfoWrapper: {
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
  productNameWrapper: {
    marginBottom: 5,
    marginLeft: 25,
    width: 200
  },
  productNameText: {
    fontSize: 17,
    fontWeight: "700"
  },
  productDescriptionWrapper: {
    marginBottom: 5,
    marginLeft: 25,
    width: 200
  },
  productDescriptionText: {
    color: "#ccc",
    fontWeight: "500"
  },
  productPriceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    marginLeft: 25,
    width: "80%"
  },
  productPriceText: {
    fontWeight: "500",
    color: "#535BFE"
  },
  buyBtn: {
    backgroundColor: "#fff",
    justifyContent: "center",
    width: 100,
    height: 30,
    borderRadius: 30,
    borderWidth: 1.3
  },
  buyBtnText: {
    fontWeight: "500"
  },
  imageWrapper: {
    width: 100,
    height: 100,
    left: 15,
    top: 20,
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  }
});

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  addProduct,
  removeProduct
}) => {
  const [isBought, setIsBought] = useState<boolean>(false);
  const handleBuyInteraction = () => {
    setIsBought((prevState: boolean) => {
      if (!prevState) addProduct(product);
      else removeProduct(product);
      return !prevState;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          style={{ height: 120, width: 120, borderRadius: 7 }}
          source={{
            uri: product.imageUrl
          }}
        />
      </View>

      <View style={styles.productInfoWrapper}>
        <View style={styles.productNameWrapper}>
          <Text numberOfLines={1} style={styles.productNameText}>
            {product.name}
          </Text>
        </View>
        <View style={styles.productDescriptionWrapper}>
          <Text numberOfLines={2} style={styles.productDescriptionText}>
            {product.description}
          </Text>
        </View>
        <View style={styles.productPriceWrapper}>
          <Text style={styles.productPriceText}>${product.price}</Text>
          <Button
            onPress={handleBuyInteraction}
            style={[
              styles.buyBtn,
              { borderColor: isBought ? "#FF4766" : "#535BFE" }
            ]}
          >
            <Text
              style={[
                styles.buyBtnText,
                { color: isBought ? "#FF4766" : "#535BFE" }
              ]}
            >
              {isBought ? "Remove" : "Buy"}
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ProductDisplay;
