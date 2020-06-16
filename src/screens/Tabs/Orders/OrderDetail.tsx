/* eslint-disable no-unused-expressions */
import { AntDesign, Entypo, EvilIcons, Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import moment from "moment";
import { Button } from "native-base";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import { AirbnbRating } from "react-native-ratings";
import OrderAddress from "../../../components/Orders/OrderAddress";
import OrderProductDisplay from "../../../components/Orders/ProductDisplay";
import { deliveryStatusColors } from "../../../const/Theme";
import { Orders, restaurants } from "../../../db/restaurants";
import { OrdersStackParamList } from "../../../navigation/ParamList/OrdersStackParamList";

type OrderDetailScreenNavigationProp = StackNavigationProp<
  OrdersStackParamList,
  "OrdersDetail"
>;

type OrderDetailScreenRouteProp = StackNavigationProp<
  OrdersStackParamList,
  "OrdersDetail"
>;
interface OrderDetailProps {
  navigation: OrderDetailScreenNavigationProp;
  route: OrderDetailScreenRouteProp;
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
  ratingBox: {
    marginVertical: 15,
    marginHorizontal: 20,
    // marginLeft: 20,
    // marginRight: 20,
    height: 140,
    // width: width - 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-evenly",

    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  btnWrapper: {
    alignItems: "center"
  },
  cancelBtn: {
    marginTop: 50,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 2,
    justifyContent: "center",
    width: width - 30,
    height: 60,
    borderRadius: 30
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
  cancelText: {
    color: "#000",
    fontSize: 20
  },
  btnText: {
    color: "#fff",
    fontSize: 20
  },
  mapView: {
    width: Dimensions.get("window").width,
    height: 150
  }
});

const OrderDetail: React.FC<OrderDetailProps> = ({ route, navigation }) => {
  const [isOrderProductsVisible, setIsOrderProductsVisible] = useState<boolean>(
    true
  );
  const { order }: { order: Orders } = route.params;
  const mapViewRef = useRef<MapView>(null);

  const centerMap = () => {
    mapViewRef?.current?.fitToCoordinates(
      [{ latitude: 43.6374172, longitude: 1.4918329 }],
      {
        edgePadding: {
          bottom: 200,
          right: 50,
          top: 150,
          left: 50
        }
      }
    );
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
        <View style={{ marginLeft: 20, marginVertical: 10 }}>
          <Text style={{ fontSize: 38, fontWeight: "800" }}>
            {order.restaurantName}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 1.4,
            borderBottomColor: "#eee",
            paddingBottom: 10
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {order.orderStatus === "DELIVERING" && (
              <>
                <Entypo
                  name="dot-single"
                  size={24}
                  color={deliveryStatusColors.assigned}
                />
                <Text style={{ color: deliveryStatusColors.assigned }}>
                  Bird assigned
                </Text>
              </>
            )}
            {order.orderStatus === "CANCELLED" && (
              <>
                <Entypo
                  name="dot-single"
                  size={24}
                  color={deliveryStatusColors.cancelled}
                />
                <Text style={{ color: deliveryStatusColors.cancelled }}>
                  Order cancelled
                </Text>
              </>
            )}
            {order.orderStatus === "DELIVERED" && (
              <>
                <Entypo
                  name="dot-single"
                  size={24}
                  color={deliveryStatusColors.delivered}
                />
                <Text style={{ color: deliveryStatusColors.delivered }}>
                  Order delivered
                </Text>
              </>
            )}
            {order.orderStatus === "PROCESSING" && (
              <>
                <Entypo
                  name="dot-single"
                  size={24}
                  color={deliveryStatusColors.processing}
                />
                <Text style={{ color: deliveryStatusColors.processing }}>
                  Waiting for confirmation
                </Text>
              </>
            )}
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <EvilIcons name="clock" size={28} color="#ccc" />
            <Text style={{ color: "#ccc" }}>
              {moment(order.orderDate).format("Do MMM, HH:mm")}
            </Text>
          </View>
        </View>
        {order.orderStatus === "DELIVERING" ||
        order.orderStatus === "PROCESSING" ? (
          <View style={{ flex: 1, marginBottom: 10 }}>
            <MapView
              maxZoomLevel={10}
              ref={mapViewRef}
              onLayout={centerMap}
              initialRegion={{
                latitude: 43.6,
                longitude: 1.433333,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
              style={styles.mapView}
            >
              <Marker
                centerOffset={{ x: 10, y: 80 }}
                coordinate={{ latitude: 43.6374172, longitude: 1.4918329 }}
                title="Restaurant Name"
                description="Yummy"
              />
            </MapView>
          </View>
        ) : (
          <View style={styles.ratingBox}>
            <Text style={{ fontSize: 17, fontWeight: "400" }}>
              Please rate delivery service
            </Text>
            <AirbnbRating defaultRating={3} showRating={false} />
            <TouchableOpacity>
              <Text
                style={{ color: "#535BFE", fontSize: 17, fontWeight: "500" }}
              >
                Rate
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={{ marginHorizontal: 20 }}>
          <OrderAddress
            to="88 Lermontava Street, 6-bB"
            from="57 Route d'espagne"
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => setIsOrderProductsVisible(prevState => !prevState)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 20,
              marginTop: 10
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 25, marginRight: 5 }}>
              Order products
            </Text>
            {isOrderProductsVisible ? (
              <AntDesign name="caretdown" size={15} color="black" />
            ) : (
              <AntDesign name="caretup" size={15} color="black" />
            )}
          </TouchableOpacity>
          <View style={{ marginTop: 20, marginHorizontal: 20 }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {isOrderProductsVisible &&
                restaurants[0].products.map(product => (
                  <View key={product.name} style={{ marginVertical: 10 }}>
                    <OrderProductDisplay product={product} />
                  </View>
                ))}
            </View>
          </View>
        </View>

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
            <Text style={{ fontWeight: "500", fontSize: 15 }}>$14</Text>
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
            <Text style={{ fontWeight: "500", fontSize: 15 }}>$2</Text>
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
              $16
            </Text>
          </View>
        </View>
        {(order.orderStatus === "PROCESSING" ||
          order.orderStatus === "DELIVERING") && (
          <View style={styles.btnWrapper}>
            <Button style={styles.cancelBtn}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Button>
          </View>
        )}
        {(order.orderStatus === "DELIVERED" ||
          order.orderStatus === "CANCELLED") && (
          <View style={styles.btnWrapper}>
            <Button style={styles.btn}>
              <Text style={styles.btnText}>Report issue with order</Text>
            </Button>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetail;
