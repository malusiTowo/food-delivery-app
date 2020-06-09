import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

interface ProductDisplayProps {}

const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-start"
  },
  wrapper: {
    flex: 0.5,
    height: 200,
    width: width - 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-end",
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
    // flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    marginBottom: 5
  },
  titleText: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 5
  },
  distanceText: {
    color: "#535BFE",
    fontSize: 15,
    fontWeight: "500",
    width: 150
  },
  editBtn: {
    marginTop: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#535BFE"
  },
  editBtnText: {
    color: "#000",
    fontSize: 15
  }
});

const ProductDisplay: React.FC<ProductDisplayProps> = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          top: 14,
          left: 5,
          position: "absolute",
          zIndex: 1,
          alignItems: "flex-start"
        }}
      >
        <Image
          style={{ height: 170, width: 180, borderRadius: 7 }}
          source={{
            uri:
              "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }}
        />
      </View>

      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>Pumpkin Soup</Text>
          <Text numberOfLines={3} style={styles.distanceText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Text>
        </View>
        <View
          style={{
            alignSelf: "flex-end",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {/* <Text>$9.25</Text> */}
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editBtnText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDisplay;
