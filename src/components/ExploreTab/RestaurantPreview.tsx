import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { Restaurant } from "../../db/restaurants";

interface RestaurantPreviewProps {
  restaurant: Restaurant;
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 0.5,
    height: 180,
    width: 260,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    padding: 5,
    paddingHorizontal: 10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5
  },
  titleText: {
    fontSize: 17,
    fontWeight: "700"
  },
  distanceText: {
    color: "#535BFE",
    fontSize: 15,
    fontWeight: "500"
  },
  addressText: {
    color: "#ccc",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5
  }
});

const RestaurantPreview: React.FC<RestaurantPreviewProps> = ({
  restaurant
}) => {
  return (
    <>
      {restaurant && (
        <View style={styles.container}>
          <View
            style={{
              width: "100%",
              top: -30,
              position: "absolute",
              zIndex: 1,
              alignItems: "center"
            }}
          >
            <Image
              style={{ height: 100, width: 220, borderRadius: 7 }}
              source={{
                uri: restaurant.coverImage
              }}
            />
          </View>

          <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
              <Text style={styles.titleText}>{restaurant.name}</Text>
              <Text style={styles.distanceText}>{restaurant.distance} m</Text>
            </View>
            <View style={{ alignItems: "flex-start" }}>
              <Text style={styles.addressText}>{restaurant.address}</Text>
              <View style={{ flexDirection: "row" }}>
                <AirbnbRating
                  isDisabled
                  showRating={false}
                  defaultRating={restaurant.reviewRating}
                  count={5}
                  size={13}
                />
                <Text
                  style={{
                    marginLeft: 5,
                    color: "#ccc",
                    fontSize: 12,
                    fontWeight: "500"
                  }}
                >
                  {restaurant.reviewRating} ({restaurant.totalReviews})
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default RestaurantPreview;
