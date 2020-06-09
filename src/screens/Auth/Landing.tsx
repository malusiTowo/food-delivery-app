import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "native-base";
import { AuthStackParamList } from "../../navigation/ParamList/AuthStackParamList";

type AuthCreateScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "Landing"
>;

interface LandingProps {
  navigation: AuthCreateScreenNavigationProp;
}
const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  btnWrapper: {
    flex: 0.3,
    justifyContent: "flex-end",
    alignItems: "center"
    // marginBottom: 60,
  },
  btn: {
    // marginTop: 50,
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

const Landing: React.FC<LandingProps> = ({ navigation }) => {
  const goToLogin = () => navigation.navigate("Login");

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#000", fontWeight: "900", fontSize: 57 }}>
          PullUp
        </Text>
        <Image
          resizeMode="contain"
          style={{ flex: 0.7, height: 200, width: width - 30 }}
          source={require("../../../assets/food-deliver-app-front-page.png")}
        />
      </View>
      <View style={styles.btnWrapper}>
        <Button style={styles.btn} onPress={goToLogin}>
          <Text style={styles.btnText}>Start Now</Text>
        </Button>
      </View>
    </View>
  );
};

export default Landing;
