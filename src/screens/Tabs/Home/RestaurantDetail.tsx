/* eslint-disable max-len */
import React, { useRef, useState } from "react";
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
import { StackNavigationProp } from "@react-navigation/stack";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "native-base";
import moment from "moment";
import RBSheet from "react-native-raw-bottom-sheet";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-ratings";
import BottomSheet from "../../../components/bottomSheet/bottomSheet";
import { HomeStackParamList } from "../../../navigation/ParamList/HomeStackParamList";
import { Restaurant } from "../../../db/restaurants";

import ExploreHeader from "../../../components/ExploreTab/ExploreHeader";
import RestaurantProductTabs from "./RestaurantProductTabs/RestaurantProductTabs";
import SearchBar from "../../../components/ExploreTab/SearchBar";

type RestaurantDetailScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  "RestaurantDetail"
>;

interface RestaurantDetailProps {
  restaurant: Restaurant;
  navigation: RestaurantDetailScreenNavigationProp;
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB",
    paddingBottom: 0
  },
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

const RestaurantDetail: React.FC<RestaurantDetailProps> = () => {
  const [date, setDate] = useState(new Date());
  const RBSheetRef = useRef<RBSheet>(null);
  const RBSheetRestaurantInfoRef = useRef<RBSheet>(null);
  return (
    <SafeAreaView style={styles.container}>
      <ExploreHeader />
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
              uri:
                "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }}
          />
          <Text
            style={{ fontSize: 37, fontWeight: "800", marginHorizontal: 10 }}
          >
            Yellow Food
          </Text>
          <TouchableOpacity
            onPress={() => RBSheetRestaurantInfoRef?.current?.open()}
          >
            <Feather name="info" size={24} color="black" />
          </TouchableOpacity>
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
              defaultRating={1}
              count={1}
              size={13}
            />
            <Text style={{ color: "#ccc", paddingLeft: 3 }}>4,9 (430)</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SimpleLineIcons name="bag" size={20} color="#535BFE" />
            <Text style={{ color: "#ccc", paddingLeft: 3 }}>
              Order from $10
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SimpleLineIcons name="basket" size={20} color="#535BFE" />
            <Text style={{ color: "#ccc", paddingLeft: 3 }}>Free delivery</Text>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <SearchBar />
        </View>

        <View style={{ marginTop: 10 }}>
          <RestaurantProductTabs />
        </View>
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
      <BottomSheet ref={RBSheetRestaurantInfoRef} height={350}>
        <Text>Open</Text>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default RestaurantDetail;
