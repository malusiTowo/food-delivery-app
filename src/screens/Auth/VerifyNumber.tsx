/* eslint-disable no-unused-expressions */
import React, { useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "native-base";

import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { AuthStackParamList } from "../../navigation/ParamList/AuthStackParamList";

type VerifyNumberScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "VerifyNumber"
>;

interface VerifyNumberProps {
  navigation: VerifyNumberScreenNavigationProp;
}

type InputNumberEnum = "secondInput" | "thirdInput" | "fourthInput";

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
  verifyNumberBanner: {
    marginTop: 20,
    marginLeft: 30
  },
  verifyNumberBannerText: {
    fontSize: 38,
    fontWeight: "800"
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  textInputWrapper: {
    height: 60,
    width: 60,
    backgroundColor: "#eee",
    borderRadius: 6,
    justifyContent: "center",
    marginLeft: 10
  },
  textInput: {
    height: 50,
    fontSize: 25,
    textAlign: "center",
    textAlignVertical: "center"
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
  resendTextWrapper: {
    marginTop: 15,
    alignItems: "center"
  },
  resendText: {
    color: "#535BFE"
  }
});

const VerifyNumber: React.FC<VerifyNumberProps> = ({ navigation }) => {
  const secondInput = useRef<TextInput>(null);
  const thirdInput = useRef<TextInput>(null);
  const fourthInput = useRef<TextInput>(null);
  const goBack = () => navigation.goBack();

  const handleInputChange = (txt: string, inputNumber: InputNumberEnum) => {
    if (txt.length >= 1 && inputNumber === "secondInput") {
      secondInput?.current.focus();
    } else if (txt.length >= 1 && inputNumber === "thirdInput") {
      thirdInput?.current.focus();
    } else if (txt.length >= 1 && inputNumber === "fourthInput") {
      fourthInput?.current.focus();
    }
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

      <View style={styles.verifyNumberBanner}>
        <Text style={styles.verifyNumberBannerText}>
          Verify {"\n"}
          Your Number
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.textInputWrapper}>
          <TextInput
            onChangeText={txt => handleInputChange(txt, "secondInput")}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            style={styles.textInput}
            placeholder="*"
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            ref={secondInput}
            onChangeText={txt => handleInputChange(txt, "thirdInput")}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            style={styles.textInput}
            placeholder="*"
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            ref={thirdInput}
            onChangeText={txt => handleInputChange(txt, "fourthInput")}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            style={styles.textInput}
            placeholder="*"
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            ref={fourthInput}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            style={styles.textInput}
            placeholder="*"
            placeholderTextColor="#000"
            returnKeyType="done"
          />
        </View>
      </View>

      <View style={styles.btnWrapper}>
        <Button style={styles.btn}>
          <Text style={styles.btnText}>Verify Now</Text>
        </Button>
      </View>

      <View style={styles.resendTextWrapper}>
        <Text style={styles.resendText}>Resend confirmation code (1:08)</Text>
      </View>
    </SafeAreaView>
  );
};

export default VerifyNumber;
