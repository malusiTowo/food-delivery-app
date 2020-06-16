import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { inject, observer } from "mobx-react";
import { Button } from "native-base";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProductDisplay from "../../components/Basket/ProductDisplay";
import ModalComponent from "../../components/Modal/Modal";
import ShippingForm from "../../components/shipping/ShippingForm";
import Root from "../../mobx/Root";
import { AppStackParamList } from "../../navigation/ParamList/AppStackParamList";
import { TabsParamList } from "../../navigation/ParamList/TabsParamList";

type CheckOutScreenNavigationProp = StackNavigationProp<
  AppStackParamList & TabsParamList,
  "CheckOut"
>;

interface CheckOutProps {
  navigation: CheckOutScreenNavigationProp;
  root: typeof Root;
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB"
  },
  backBtnWrapper: {
    marginLeft: 20,
    marginTop: 10
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

const CheckOut: React.FC<CheckOutProps> = ({ navigation, root }) => {
  const deliveryCharges = 2.2;
  const [isVisible, setIsVisible] = useState(false);
  const closeModal = () => {
    setIsVisible(false);
    // root.orders.setProducts(toJS(root.basket.products));
    root.basket.clearBasket();
    navigation.navigate("Orders");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        hitSlop={{ bottom: 20, left: 20, top: 20, right: 20 }}
        onPress={navigation.goBack}
        style={styles.backBtnWrapper}
      >
        <Ionicons name="ios-arrow-back" size={35} color="black" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 38, fontWeight: "800" }}>Check Out</Text>
        </View>
        {root?.basket?.products.map(item => {
          return (
            <View key={item.name} style={{ margin: 10 }}>
              <ProductDisplay product={item} />
            </View>
          );
        })}

        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: "800" }}>
            Shipping Address
          </Text>
        </View>

        <FlatList
          data={[0, 1, 2]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={() => (
            <View style={{ width: width - 40, margin: 10, marginTop: 0 }}>
              <ShippingForm
                mode="display"
                streetName="57 route d'espagne"
                city="Toulouse"
                appartment="44"
              />
            </View>
          )}
        />

        {/* <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: "800" }}>Payment</Text>
        </View> */}

        <View
          style={{
            marginHorizontal: 20,
            marginTop: 10,
            borderTopColor: "#eee",
            borderTopWidth: 1.4,
            paddingTop: 10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontWeight: "500", fontSize: 15 }}>
              Basket Charges
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 15 }}>
              ${root.basket.basketTotal}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 10
            }}
          >
            <Text style={{ fontWeight: "500", fontSize: 15 }}>
              Delivery Charges
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 15 }}>
              ${deliveryCharges}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 15 }}>
              Total Amount
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 15, color: "#535BFE" }}>
              ${root.basket.basketTotal + deliveryCharges}
            </Text>
          </View>
        </View>

        <View style={styles.btnWrapper}>
          <Button onPress={() => setIsVisible(true)} style={styles.btn}>
            <Text style={styles.btnText}>Place Order</Text>
          </Button>
        </View>
      </ScrollView>
      <ModalComponent
        toggle={closeModal}
        isVisible={isVisible}
        btnTitle="Track my order"
        body="You can track the delivery in the orders tab"
        title="Order number is 3399922"
      />
    </SafeAreaView>
  );
};

export default inject("root")(observer(CheckOut));
