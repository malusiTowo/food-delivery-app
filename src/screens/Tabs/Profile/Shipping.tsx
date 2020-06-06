import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import { ProfileStackParamList } from "../../../navigation/ParamList/ProfileStackParamList";
import ShippingForm from "../../../components/shipping/ShippingForm";

type ShippingScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  "Shipping"
>;

interface ShippingScreenProps {
  navigation: ShippingScreenNavigationProp;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB",
    paddingHorizontal: 10
  },
  backBtnWrapper: {
    marginLeft: 20,
    marginTop: 10
  },
  ShippingBanner: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  ShippingBannerText: {
    fontSize: 38,
    fontWeight: "800"
  }
});

const ShippingScreen: React.FC<ShippingScreenProps> = ({ navigation }) => {
  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        hitSlop={{ bottom: 20, left: 20, top: 20, right: 20 }}
        onPress={goBack}
        style={styles.backBtnWrapper}
      >
        <Ionicons name="ios-arrow-back" size={35} color="black" />
      </TouchableOpacity>

      <View style={styles.ShippingBanner}>
        <Text style={styles.ShippingBannerText}>Shipping</Text>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 20,
              color: "#535BFE",
              marginRight: 20
            }}
          >
            Add New
          </Text>
        </TouchableOpacity>
      </View>

      <ShippingForm
        mode="display"
        streetName="57 route d'espagne"
        city="Toulouse"
        appartment="44"
      />
      <ShippingForm mode="form" />
    </SafeAreaView>
  );
};

export default ShippingScreen;
