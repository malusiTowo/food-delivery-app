import React from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface SearchBarProps {}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  searchBarContainer: {
    marginTop: 20,
    alignItems: "center"
  },
  searchBarWrapper: {
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    width: width - 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  searchInput: {
    fontSize: 17,
    height: 50,
    width: "100%"
  }
});

const SearchBar: React.FC<SearchBarProps> = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBarWrapper}>
        <View>
          <EvilIcons name="search" size={24} color="black" />
        </View>
        <View style={{ flex: 0.6 }}>
          <TextInput
            returnKeyType="go"
            style={styles.searchInput}
            placeholder="Search"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Filters")}>
          <MaterialIcons name="filter-list" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
