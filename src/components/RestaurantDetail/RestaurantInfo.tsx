import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { EvilIcons, SimpleLineIcons } from "@expo/vector-icons";
import { Restaurant } from "../../db/restaurants";

interface RestaurantInfoProps {
  restaurant: Restaurant;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10
  }
});

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingBottom: 10,
          borderBottomColor: "#eee",
          borderBottomWidth: 1
        }}
      >
        <Image
          style={{ height: 100, width: 100, borderRadius: 10 }}
          source={{ uri: restaurant.coverImage }}
        />
        <Text style={{ marginLeft: 10, fontSize: 35, fontWeight: "700" }}>
          {restaurant.name}
        </Text>
      </View>
      <View
        style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
      >
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
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <EvilIcons name="location" size={30} color="#535BFE" />
          <Text>{restaurant.address}</Text>
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
    </View>
  );
};

export default RestaurantInfo;
