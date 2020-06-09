import React from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "native-base";

import { TabsParamList } from "../../navigation/ParamList/TabsParamList";
import { AppStackParamList } from "../../navigation/ParamList/AppStackParamList";
import ProductDisplay from "../../components/Basket/ProductDisplay";
import { restaurants } from "../../db/restaurants";

type BasketScreenNavigationProp = StackNavigationProp<
  TabsParamList & AppStackParamList,
  "Basket"
>;

interface BasketScreenProps {
  navigation: BasketScreenNavigationProp;
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB"
  },
  btnWrapper: {
    alignItems: "center"
  },
  btn: {
    marginVertical: 20,
    backgroundColor: "#535BFE",
    justifyContent: "center",
    width: width - 30,
    height: 60,
    borderRadius: 30,
    shadowColor: "#535BFE",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6
  },
  btnText: {
    color: "#fff",
    fontSize: 20
  }
});

const BasketScreen: React.FC<BasketScreenProps> = ({ navigation }) => {
  const goToCheckout = () => navigation.navigate("CheckOut");

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={restaurants[0].products}
        ListHeaderComponent={
          <View style={{ marginLeft: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 38, fontWeight: "800" }}>Basket</Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.btnWrapper}>
            <Button onPress={goToCheckout} style={styles.btn}>
              <Text style={styles.btnText}>Go to Checkout</Text>
            </Button>
          </View>
        }
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <ProductDisplay product={item} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default BasketScreen;
