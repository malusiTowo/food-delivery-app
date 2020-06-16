import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import moment from "moment";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { deliveryStatusColors } from "../../const/Theme";
import { Orders } from "../../db/restaurants";
import { OrdersStackParamList } from "../../navigation/ParamList/OrdersStackParamList";

interface OrderCardProps {
  order: Orders;
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: width - 20,
    height: 120,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    justifyContent: "center",
    alignItems: "flex-start"
  }
});

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const navigation = useNavigation<
    StackNavigationProp<OrdersStackParamList, "Orders">
  >();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("OrdersDetail", { order })}
      containerStyle={{ overflow: "visible" }}
      style={styles.container}
    >
      <View style={{ padding: 10, flexDirection: "row", alignItems: "center" }}>
        <View>
          <Image
            style={{ height: 70, width: 70, borderRadius: 5 }}
            source={{
              uri: order.restaurantImage
            }}
          />
        </View>
        <View style={{ flex: 1, padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ color: "#ccc" }}>
              {moment(order.orderDate).format("D MMM, HH:mm")}
            </Text>
            <Text style={{ color: "#ccc", fontWeight: "500" }}>
              ${order.orderPrice}
            </Text>
          </View>
          <View style={{ marginVertical: 2 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              {order.restaurantName}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start"
              }}
            >
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
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
