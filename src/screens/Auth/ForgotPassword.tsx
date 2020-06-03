import React, { useState } from "react";
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";

import { AuthStackParamList } from "../../navigation/ParamList/AuthStackParamList";

type ForgotPasswordScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "ForgotPassword"
>;

interface ForgotPasswordProps {
  navigation: ForgotPasswordScreenNavigationProp;
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB",
    paddingHorizontal: 10
  },
  backBtnWrapper: {
    marginLeft: 20,
    marginTop: 10
  },
  forgotPasswordBanner: {
    marginTop: 20,
    marginLeft: 18
  },
  forgotPasswordBannerText: {
    fontSize: 38,
    fontWeight: "800"
  },
  formWrapper: {
    marginTop: 40,
    alignItems: "center"
  },
  form: {
    width: width - 30,
    height: 100,
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
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12
  },
  modalBtn: {
    backgroundColor: "#535BFE",
    justifyContent: "center",
    width: 130,
    height: 40,
    borderRadius: 20,
    shadowColor: "#535BFE",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6
  }
});

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);

  const goBack = () => navigation.goBack();

  const toggle = () => setIsVisible(!isVisible);

  const handleForgotPassword = () => {
    Keyboard.dismiss();
    toggle();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        hitSlop={{ bottom: 20, left: 20, top: 20, right: 20 }}
        onPress={goBack}
        style={styles.backBtnWrapper}
      >
        <Ionicons name="ios-arrow-back" size={35} color="black" />
      </TouchableOpacity>

      <View style={styles.forgotPasswordBanner}>
        <Text style={styles.forgotPasswordBannerText}>
          Forgot {"\n"}
          Password
        </Text>
      </View>

      <View style={styles.formWrapper}>
        <View style={styles.form}>
          <View style={styles.textInputWrapper}>
            <TextInput
              textContentType="emailAddress"
              style={styles.textInput}
              placeholder="Your Email or Phone"
            />
          </View>
        </View>
      </View>

      <View style={styles.btnWrapper}>
        <Button onPress={handleForgotPassword} style={styles.btn}>
          <Text style={styles.btnText}>Send</Text>
        </Button>
      </View>

      <Modal onBackdropPress={toggle} isVisible={isVisible}>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Password reset send</Text>
          <Text style={styles.contentTitle}>
            You'll shortly receive an email with a code to setup up a new
            password.
          </Text>
          <Button onPress={toggle} style={styles.modalBtn}>
            <Text>Okay</Text>
          </Button>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ForgotPassword;
