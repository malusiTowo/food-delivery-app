/* eslint-disable react/jsx-one-expression-per-line */
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";

interface ShippingFormProps {
  streetName?: string;
  city?: string;
  appartment?: string;
  mode: "display" | "form";
  handleSave?: () => void;
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
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

    justifyContent: "center",
    marginHorizontal: 10
  },
  textInput: {
    height: 50,
    borderColor: "transparent",
    borderBottomWidth: 2,
    borderBottomColor: "#eee"
  }
});

const ShippingForm: React.FC<ShippingFormProps> = ({
  streetName = "",
  city = "",
  appartment = "",
  mode
}) => {
  return (
    <>
      {mode === "form" && (
        <View style={styles.formWrapper}>
          <View style={styles.form}>
            <View style={styles.textInputWrapper}>
              <TextInput
                textContentType="addressCity"
                style={styles.textInput}
                placeholder="City"
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
                textContentType="streetAddressLine1"
                style={[styles.textInput, { flex: 1 }]}
                placeholder="Address Line"
              />
              <EvilIcons name="location" size={24} color="black" />
            </View>

            <View
              style={[
                styles.textInputWrapper,
                {
                  alignItems: "center",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  marginBottom: 15
                }
              ]}
            >
              <TextInput
                style={[styles.textInput, { flex: 0.5, marginRight: 20 }]}
                placeholder="Appartment"
              />

              <TextInput
                style={[styles.textInput, { flex: 0.5 }]}
                placeholder="Floor"
              />
            </View>
          </View>
        </View>
      )}
      {mode === "display" && (
        <View style={styles.formWrapper}>
          <View style={styles.form}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 5
              }}
            >
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 15,
                  fontWeight: "500",
                  color: "#535BFE"
                }}
              >
                {streetName}, {appartment}
              </Text>
              <AntDesign
                style={{ marginRight: 10 }}
                name="edit"
                size={24}
                color="#ccc"
              />
            </View>

            <Text
              style={{
                paddingLeft: 10,
                fontSize: 15,
                fontWeight: "500",
                color: "#ccc"
              }}
            >
              {city}
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default ShippingForm;
