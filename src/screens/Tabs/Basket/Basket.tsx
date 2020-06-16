import { StackNavigationProp } from "@react-navigation/stack";
import { inject, observer } from "mobx-react";
import { Button } from "native-base";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";
import ProductDisplay from "../../../components/Basket/ProductDisplay";
import Modal from "../../../components/Modal/Modal";
import Root from "../../../mobx/Root";
import { AppStackParamList } from "../../../navigation/ParamList/AppStackParamList";
import { TabsParamList } from "../../../navigation/ParamList/TabsParamList";

type BasketScreenNavigationProp = StackNavigationProp<
  TabsParamList & AppStackParamList,
  "Basket"
>;

interface BasketScreenProps {
  navigation: BasketScreenNavigationProp;
  root: typeof Root;
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB"
  },
  btnWrapper: {
    alignItems: "center",
    justifyContent: "flex-end"
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

const BasketScreen: React.FC<BasketScreenProps> = ({ navigation, root }) => {
  const [isVisible, setIsVisible] = useState(false);
  const closeModal = () => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 500);
    setIsVisible(false);
  };
  useEffect(() => {
    if (root?.basket?.products?.length === 0) setIsVisible(true);
  }, [root.basket.products]);

  const goToCheckout = () => navigation.navigate("CheckOut");

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={root?.basket?.products}
        ListHeaderComponent={
          <View style={{ marginLeft: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 38, fontWeight: "800" }}>Basket</Text>
          </View>
        }
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <ProductDisplay product={item} />
          </View>
        )}
      />
      {root?.basket?.products.length > 0 && (
        <View style={styles.btnWrapper}>
          <Button onPress={goToCheckout} style={styles.btn}>
            <Text style={styles.btnText}>Go to Checkout</Text>
          </Button>
        </View>
      )}
      <Modal
        title="Your basket is empty"
        body="Buy products in stores. Your selected products will appear here."
        btnTitle="Go to stores"
        isVisible={isVisible}
        toggle={closeModal}
      />
    </SafeAreaView>
  );
};

export default inject("root")(observer(BasketScreen));
