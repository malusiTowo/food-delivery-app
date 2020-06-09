import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface ExploreHeaderProps {}

const styles = StyleSheet.create({
  locationInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 10
  },
  locationInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
});

const ExploreHeader: React.FC<ExploreHeaderProps> = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.locationInputContainer}>
        <TouchableOpacity
          onPress={navigation.goBack}
          hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
        >
          <Ionicons name="ios-arrow-back" size={35} color="black" />
        </TouchableOpacity>
        <View style={styles.locationInputWrapper}>
          <EvilIcons name="location" size={30} color="#535BFE" />
          <Text style={{ color: "#535BFE" }}>57 route d'espagne</Text>
        </View>
        <TouchableOpacity
          hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
        >
          <EvilIcons name="clock" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ExploreHeader;
