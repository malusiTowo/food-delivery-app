import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface FilterItemProps {
  filter: string;
}

const styles = StyleSheet.create({
  container: {
    minWidth: 70,
    height: 40,
    borderRadius: 20,
    alignSelf: "flex-start",
    backgroundColor: "#e6e8ed",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  text: {
    color: "#535BFE",
    fontWeight: "500"
  }
});

const FilterItem: React.FC<FilterItemProps> = ({ filter }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{filter}</Text>
    </TouchableOpacity>
  );
};

export default FilterItem;
