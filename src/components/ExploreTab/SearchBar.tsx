/* eslint-disable react-hooks/exhaustive-deps */
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SearchBarProps {
  searchFunc: (keyword: string) => void;
}

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

const SearchBar: React.FC<SearchBarProps> = ({ searchFunc }) => {
  const navigation = useNavigation();
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    searchFunc(searchInput);
  }, [searchInput]);

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBarWrapper}>
        <View>
          <EvilIcons name="search" size={24} color="black" />
        </View>
        <View style={{ flex: 0.6 }}>
          <TextInput
            onChangeText={txt => setSearchInput(txt.trim())}
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
