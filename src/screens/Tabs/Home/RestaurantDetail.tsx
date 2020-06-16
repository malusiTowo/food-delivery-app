/* eslint-disable max-len */
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { inject, observer } from "mobx-react";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { AirbnbRating } from "react-native-ratings";
import Root from "../../../mobx/Root";
import { HomeStackParamList } from "../../../navigation/ParamList/HomeStackParamList";
import RestaurantProductTabs from "./RestaurantProductTabs/RestaurantProductTabs";

type RestaurantDetailScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  "RestaurantDetail"
>;

interface RestaurantDetailProps {
  navigation: RestaurantDetailScreenNavigationProp;
  root: typeof Root;
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB",
    paddingBottom: 0
  },
  backBtnWrapper: {
    marginLeft: 20,
    marginTop: 10
  }
});

const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ navigation }) => {
  const {
    params: { restaurant }
  } = useRoute<RouteProp<HomeStackParamList, "RestaurantDetail">>();

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
        <View
          style={{
            marginTop: 10,
            marginLeft: 10,
            flexDirection: "row",
            alignItems: "center",
            width: width - 40,
            justifyContent: "center",
            borderBottomColor: "#eee",
            borderBottomWidth: 2,
            paddingBottom: 10
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 5 }}
            source={{
              uri: restaurant.coverImage
            }}
          />
          <Text
            style={{ fontSize: 37, fontWeight: "800", marginHorizontal: 10 }}
          >
            {restaurant.name}
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AirbnbRating
              isDisabled
              showRating={false}
              defaultRating={restaurant.reviewRating}
              count={1}
              size={13}
            />
            <Text style={{ color: "#ccc", paddingLeft: 3 }}>
              {restaurant.reviewRating} ({restaurant.totalReviews})
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SimpleLineIcons name="bag" size={20} color="#535BFE" />
            <Text style={{ color: "#ccc", paddingLeft: 3 }}>
              Order from ${restaurant.orderMinValue}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SimpleLineIcons name="basket" size={20} color="#535BFE" />
            <Text style={{ color: "#ccc", paddingLeft: 3 }}>Free delivery</Text>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <RestaurantProductTabs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default inject("root")(observer(RestaurantDetail));
