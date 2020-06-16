import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { inject } from "mobx-react";
import { Button } from "native-base";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Root from "../../mobx/Root";
import { AuthStackParamList } from "../../navigation/ParamList/AuthStackParamList";

type LoginScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "Login"
>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
  root: typeof Root;
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB",
    paddingHorizontal: 10
  },
  signInBanner: {
    marginTop: 20,
    marginLeft: 18
  },
  signInBannerText: {
    fontSize: 38,
    fontWeight: "800"
  },
  forgotPasswordBanner: {
    alignItems: "flex-end",
    marginTop: 20,
    marginRight: 15
  },
  forgotPasswordBannerText: {
    fontSize: 16,
    color: "#535BFE",
    fontWeight: "500"
  },
  formWrapper: {
    marginTop: 10,
    alignItems: "center"
  },
  form: {
    width: width - 30,
    height: 150,
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
    height: 50,
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
  signUpBanner: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20
  },
  signUpBannerText: {
    fontSize: 16,
    color: "#ccc"
  },
  signUpBannerLink: {
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

const Login: React.FC<LoginProps> = ({ navigation, root }) => {
  const passwordInputRef = useRef<TextInput>(null);
  const [showPassword, setShowPassword] = useState(false);
  const goToSignUp = () => navigation.navigate("SignUp");

  const goToForgetPassword = () => navigation.navigate("ForgotPassword");

  const focusPasswordInput = () => passwordInputRef?.current?.focus();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.signInBanner}>
        <Text style={styles.signInBannerText}>Sign In</Text>
      </View>

      <TouchableOpacity
        onPress={goToForgetPassword}
        style={styles.forgotPasswordBanner}
      >
        <Text style={styles.forgotPasswordBannerText}>Forgot password?</Text>
      </TouchableOpacity>

      <View style={styles.formWrapper}>
        <View style={styles.form}>
          <View style={styles.textInputWrapper}>
            <TextInput
              returnKeyType="next"
              onSubmitEditing={focusPasswordInput}
              textContentType="emailAddress"
              style={styles.textInput}
              placeholder="Your Email or Phone"
            />
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
              ref={passwordInputRef}
              textContentType="password"
              secureTextEntry={!showPassword}
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
        <Button onPress={() => root.user.setUser("User")} style={styles.btn}>
          <Text style={styles.btnText}>Sign In</Text>
        </Button>
      </View>

      <TouchableOpacity onPress={goToSignUp} style={styles.signUpBanner}>
        <Text style={styles.signUpBannerText}>Don't have an account? </Text>
        <Text style={styles.signUpBannerLink}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.horizontalRuleWrapper}>
        <View style={styles.horizontalRule} />
      </View>

      <View style={styles.googleBtnWrapper}>
        <Button
          onPress={() => root.user.setUser("User")}
          style={styles.googleBtn}
          iconLeft
        >
          <FontAwesome size={20} color="#000" name="google" />
          <Text style={styles.googleBtnText}>Sign In with Google</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default inject("root")(Login);
