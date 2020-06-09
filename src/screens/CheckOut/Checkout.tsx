import React from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "native-base";

import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { AppStackParamList } from "../../navigation/ParamList/AppStackParamList";
import { restaurants } from "../../db/restaurants";
import ProductDisplay from "../../components/Basket/ProductDisplay";
import ShippingForm from "../../components/shipping/ShippingForm";

type CheckOutScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  "CheckOut"
>;

interface CheckOutProps {
  navigation: CheckOutScreenNavigationProp;
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

const CheckOut: React.FC<CheckOutProps> = ({ navigation }) => {
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
        {restaurants[0].products.map(item => {
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
          data={restaurants[0].products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.name}
          renderItem={() => (
            <View style={{ margin: 10, marginTop: 0 }}>
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
            <Text style={{ fontWeight: "500", fontSize: 15 }}>$26.99</Text>
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
            <Text style={{ fontWeight: "500", fontSize: 15 }}>$2.20</Text>
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
              $45.99
            </Text>
          </View>
        </View>

        <View style={styles.btnWrapper}>
          <Button style={styles.btn}>
            <Text style={styles.btnText}>Place Order</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckOut;
