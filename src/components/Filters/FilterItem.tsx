import React, { useState } from "react";
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
  },
  pressedFilterItem: {
    borderColor: "#535BFE",
    borderWidth: 1,
    backgroundColor: "#fff"
  }
});

const FilterItem: React.FC<FilterItemProps> = ({ filter }) => {
  const [hasBeenPressed, setHasBeenPressed] = useState<boolean>(false);
  return (
    <TouchableOpacity
      onPress={() => setHasBeenPressed(prevState => !prevState)}
      style={[styles.container, hasBeenPressed && styles.pressedFilterItem]}
    >
      <Text style={styles.text}>{filter}</Text>
    </TouchableOpacity>
  );
};

export default FilterItem;
