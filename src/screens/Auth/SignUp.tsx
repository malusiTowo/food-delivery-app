import React, { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "native-base";
import {
  EvilIcons,
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";

import { AuthStackParamList } from "../../navigation/ParamList/AuthStackParamList";

type SignUpScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "SignUp"
>;

interface SignUpProps {
  navigation: SignUpScreenNavigationProp;
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB",
    paddingHorizontal: 10
  },
  signUpBanner: {
    marginTop: 20,
    marginLeft: 18
  },
  signUpBannerText: {
    fontSize: 38,
    fontWeight: "800"
  },
  formWrapper: {
    marginTop: 20,
    alignItems: "center"
  },
  form: {
    width: width - 30,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  textInputWrapper: {
    height: 60,
    borderColor: "transparent",
    borderBottomWidth: 2,
    justifyContent: "center",
    marginHorizontal: 10,
    borderBottomColor: "#eee"
  },
  textInput: {
    height: 50
  },
  btnWrapper: {
    alignItems: "center"
  },
  btn: {
    marginTop: 50,
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
  },
  signInBanner: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20
  },
  signInBannerText: {
    fontSize: 16,
    color: "#ccc"
  },
  signInBannerLink: {
    fontSize: 16,
    color: "#535BFE"
  },
  googleBtnWrapper: {
    alignItems: "center"
  },
  googleBtn: {
    marginTop: 50,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 2,
    justifyContent: "center",
    width: width - 30,
    height: 60,
    borderRadius: 30
  },
  googleBtnText: {
    color: "#000",
    fontSize: 20,
    paddingLeft: 10
  },
  horizontalRuleWrapper: {
    alignItems: "center"
  },
  horizontalRule: {
    marginTop: 25,
    width: width - 30,
    borderColor: "#eee",
    borderWidth: 0.6
  }
});

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const goToSignIn = () => navigation.navigate("Login");
  const goToVerifyNumber = () => navigation.navigate("VerifyNumber");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signUpBanner}>
        <Text style={styles.signUpBannerText}>Sign Up</Text>
      </View>

      <View style={styles.formWrapper}>
        <View style={styles.form}>
          <View style={styles.textInputWrapper}>
            <TextInput
              textContentType="name"
              style={styles.textInput}
              placeholder="Your Name"
            />
          </View>
          <View style={styles.textInputWrapper}>
            <TextInput
              textContentType="telephoneNumber"
              style={styles.textInput}
              placeholder="Your Phone Number"
            />
          </View>

          <View
            style={[
              styles.textInputWrapper,
              {
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row"
              }
            ]}
          >
            <TextInput
              textContentType="location"
              style={[styles.textInput, { flex: 1 }]}
              placeholder="Location"
            />
            <EvilIcons name="location" size={24} color="black" />
          </View>
          <View
            style={[
              styles.textInputWrapper,
              {
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 15
              }
            ]}
          >
            <TextInput
              secureTextEntry={!showPassword}
              textContentType="password"
              style={[styles.textInput, { flex: 1 }]}
              placeholder="Password"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <MaterialCommunityIcons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.btnWrapper}>
        <Button onPress={goToVerifyNumber} style={styles.btn}>
          <Text style={styles.btnText}>Sign Up</Text>
        </Button>
      </View>

      <TouchableOpacity onPress={goToSignIn} style={styles.signInBanner}>
        <Text style={styles.signInBannerText}>Do you have an account? </Text>
        <Text style={styles.signInBannerLink}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.horizontalRuleWrapper}>
        <View style={styles.horizontalRule} />
      </View>

      <View style={styles.googleBtnWrapper}>
        <Button style={styles.googleBtn} iconLeft>
          <FontAwesome size={20} color="#000" name="google" />
          <Text style={styles.googleBtnText}>Sign In with Google</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
