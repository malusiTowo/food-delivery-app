/* eslint-disable react/jsx-curly-newline */
import DateTimePicker from "@react-native-community/datetimepicker";
import { StackNavigationProp } from "@react-navigation/stack";
import { inject } from "mobx-react";
import moment from "moment";
import { Button } from "native-base";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from "../../../components/bottomSheet/bottomSheet";
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

const { width } = Dimensions.get("screen");

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
  },
  // locationInputContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   marginBottom: 20,
  //   marginTop: 10,
  //   marginHorizontal: 10
  // },
  // locationInputWrapper: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   width: 250,
  //   height: 40,
  //   borderRadius: 20,
  //   backgroundColor: "#fff",
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,

  //   elevation: 5
  // },
  btnWrapper: {
    alignItems: "center"
  },
  btn: {
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

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, root }) => {
  const RBSheetRef = useRef<RBSheet>(null);
  const [date, setDate] = useState(new Date());
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
      {/* <View style={styles.locationInputContainer}>
        <TouchableOpacity hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
          <Entypo name="menu" size={27} color="black" />
        </TouchableOpacity>
        <View style={styles.locationInputWrapper}>
          <EvilIcons name="location" size={30} color="#535BFE" />
          <Text style={{ color: "#535BFE" }}>57 route d'espagne</Text>
        </View>
        <TouchableOpacity
          onPress={() => RBSheetRef?.current?.open()}
          hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
        >
          <EvilIcons name="clock" size={28} color="black" />
        </TouchableOpacity>
      </View> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.exploreBanner}>
          <Text style={styles.exploreBannerText}>Explore</Text>
        </View>

        <SearchBar searchFunc={searchRestaurants} />

        <View style={styles.sectionBanner}>
          <Text style={styles.sectionMainText}>Markets</Text>
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
      <BottomSheet height={350} ref={RBSheetRef}>
        <DateTimePicker
          onChange={(e, changedDate = new Date()) => setDate(changedDate)}
          minuteInterval={30}
          value={date}
          mode="datetime"
        />
        <View style={styles.btnWrapper}>
          <Button style={styles.btn} iconLeft>
            <Text style={styles.btnText}>
              {moment(date).format("dddd  HH:mm")}
            </Text>
          </Button>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default inject("root")(HomeScreen);
