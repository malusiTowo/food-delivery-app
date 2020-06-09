import React, { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "native-base";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import {
  dietTypes,
  foodTypes,
  paymentMethods,
  restaurantTypes
} from "../../db/filters";
import { AppStackParamList } from "../../navigation/ParamList/AppStackParamList";
import FilterItem from "../../components/Filters/FilterItem";

type FiltersScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  "Filters"
>;

interface FilterProps {
  navigation: FiltersScreenNavigationProp;
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
  btnWrapper: {
    alignItems: "center"
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
  btnText: {
    color: "#fff",
    fontSize: 20
  }
});

const Filter: React.FC<FilterProps> = ({ navigation }) => {
  const [isDietVisible, setIsDietVisible] = useState(true);
  const [isPaymentMethodsVisible, setIsPaymentMethodsVisible] = useState(true);
  const [isFoodCategoriesVisible, setIsFoodCategoriesVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          hitSlop={{ bottom: 20, left: 20, top: 20, right: 20 }}
          onPress={navigation.goBack}
          style={styles.backBtnWrapper}
        >
          <Ionicons name="ios-arrow-back" size={35} color="black" />
        </TouchableOpacity>
        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 38, fontWeight: "800" }}>Filters</Text>
        </View>

        <View style={{ marginTop: 20, marginHorizontal: 10 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {restaurantTypes.map(type => (
              <View key={type} style={{ marginBottom: 10, marginRight: 10 }}>
                <FilterItem filter={type} />
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity
          onPress={() => setIsDietVisible(prevState => !prevState)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 20,
            marginTop: 10
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 25, marginRight: 5 }}>
            Diet
          </Text>
          {isDietVisible ? (
            <AntDesign name="caretdown" size={15} color="black" />
          ) : (
            <AntDesign name="caretup" size={15} color="black" />
          )}
        </TouchableOpacity>

        <View style={{ marginTop: 20, marginHorizontal: 10 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {isDietVisible &&
              dietTypes.map(type => (
                <View key={type} style={{ marginBottom: 10, marginRight: 10 }}>
                  <FilterItem filter={type} />
                </View>
              ))}
          </View>
        </View>

        <TouchableOpacity
          onPress={() => setIsPaymentMethodsVisible(prevState => !prevState)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 20,
            marginTop: 10
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 25, marginRight: 5 }}>
            Payment Methods
          </Text>
          {isPaymentMethodsVisible ? (
            <AntDesign name="caretdown" size={15} color="black" />
          ) : (
            <AntDesign name="caretup" size={15} color="black" />
          )}
        </TouchableOpacity>

        <View style={{ marginTop: 20, marginHorizontal: 10 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {isPaymentMethodsVisible &&
              paymentMethods.map(type => (
                <View key={type} style={{ marginBottom: 10, marginRight: 10 }}>
                  <FilterItem filter={type} />
                </View>
              ))}
          </View>
        </View>

        <TouchableOpacity
          onPress={() => setIsFoodCategoriesVisible(prevState => !prevState)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 20,
            marginTop: 10
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 25, marginRight: 5 }}>
            Food Categories
          </Text>
          {isFoodCategoriesVisible ? (
            <AntDesign name="caretdown" size={15} color="black" />
          ) : (
            <AntDesign name="caretup" size={15} color="black" />
          )}
        </TouchableOpacity>

        <View style={{ marginTop: 20, marginHorizontal: 10 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {isFoodCategoriesVisible &&
              foodTypes.map(type => (
                <View key={type} style={{ marginBottom: 10, marginRight: 10 }}>
                  <FilterItem filter={type} />
                </View>
              ))}
          </View>
        </View>

        <View style={styles.btnWrapper}>
          <Button style={styles.btn}>
            <Text style={styles.btnText}>Filter</Text>
          </Button>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Clear Filter(s)
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Filter;
