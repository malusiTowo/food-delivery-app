import { Entypo, EvilIcons, Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import moment from "moment";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { deliveryStatusColors } from "../../../const/Theme";
import { OrdersStackParamList } from "../../../navigation/ParamList/OrdersStackParamList";

type OrderDetailScreenNavigationProp = StackNavigationProp<
  OrdersStackParamList,
  "OrdersDetail"
>;

interface OrderDetailProps {
  navigation: OrderDetailScreenNavigationProp;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB"
  },
  backBtnWrapper: {
    marginLeft: 20,
    marginTop: 10
  }
});

const OrderDetail: React.FC<OrderDetailProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        hitSlop={{ bottom: 20, left: 20, top: 20, right: 20 }}
        onPress={navigation.goBack}
        style={styles.backBtnWrapper}
      >
        <Ionicons name="ios-arrow-back" size={35} color="black" />
      </TouchableOpacity>
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 38, fontWeight: "800" }}>Yellow Food</Text>
      </View>
      <View
        style={{
          marginLeft: 20,
          marginRight: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          paddingBottom: 10
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo
            name="dot-single"
            size={24}
            color={deliveryStatusColors.assigned}
          />
          <Text style={{ color: deliveryStatusColors.assigned }}>
            Bird assigned
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <EvilIcons name="clock" size={28} color="#ccc" />
          <Text style={{ color: "#ccc" }}>
            {moment().format("ddd MMM,HH:mm")}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetail;
