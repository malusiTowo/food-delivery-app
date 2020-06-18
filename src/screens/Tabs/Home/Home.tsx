/* eslint-disable react/jsx-curly-newline */
import { StackNavigationProp } from "@react-navigation/stack";
import { inject } from "mobx-react";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import RestaurantPreview from "../../../components/ExploreTab/RestaurantPreview";
import SearchBar from "../../../components/ExploreTab/SearchBar";
import { Restaurant, restaurants } from "../../../db/restaurants";
import Root from "../../../mobx/Root";
import { AppStackParamList } from "../../../navigation/ParamList/AppStackParamList";
import { HomeStackParamList } from "../../../navigation/ParamList/HomeStackParamList";

type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList & AppStackParamList,
  "Home"
>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  root: typeof Root;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB",
    paddingBottom: 0
  },
  exploreBanner: {
    marginTop: 10,
    marginLeft: 20
  },
  exploreBannerText: {
    fontSize: 38,
    fontWeight: "800"
  },

  sectionBanner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10
  },
  sectionMainText: {
    fontSize: 17,
    fontWeight: "700"
  },
  sectionSubText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#ccc"
  },
  restaurantPreviewScrollView: {
    margin: 10,
    marginTop: 40
  }
});

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, root }) => {
  const [merchants, setMerchants] = useState<Restaurant[]>(restaurants);

  const searchRestaurants: (arg: string) => void = keyword => {
    if (keyword.length === 0) setMerchants(restaurants);
    else {
      const filteredMerchants = merchants.filter(({ name }) =>
        name.toLowerCase().includes(keyword.toLowerCase())
      );
      setMerchants(filteredMerchants);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.exploreBanner}>
          <Text style={styles.exploreBannerText}>Explore</Text>
        </View>

        <SearchBar searchFunc={searchRestaurants} />

        <View style={styles.sectionBanner}>
          <Text style={styles.sectionMainText}>Trending</Text>
          <Text style={styles.sectionSubText}>View All (137)</Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={merchants}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestaurantDetail", { restaurant: item });
                root.restaurantProducts.setProducts(item.products);
              }}
              style={styles.restaurantPreviewScrollView}
            >
              <RestaurantPreview restaurant={item} />
            </TouchableOpacity>
          )}
        />

        <View style={styles.sectionBanner}>
          <Text style={styles.sectionMainText}>Your favorites</Text>
          <Text style={styles.sectionSubText}>View All (5)</Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={merchants}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
              style={styles.restaurantPreviewScrollView}
            >
              <RestaurantPreview restaurant={item} />
            </TouchableOpacity>
          )}
        />
        <View style={styles.sectionBanner}>
          <Text style={styles.sectionMainText}>Restaurants</Text>
          <Text style={styles.sectionSubText}>View All (1290)</Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={merchants}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
              style={styles.restaurantPreviewScrollView}
            >
              <RestaurantPreview restaurant={item} />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default inject("root")(HomeScreen);
