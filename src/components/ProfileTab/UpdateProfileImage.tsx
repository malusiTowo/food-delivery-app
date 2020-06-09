import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Button } from "native-base";
import { AntDesign, Entypo } from "@expo/vector-icons";

interface UpdateProfileImageProps {
  handleImageChange: (image: string) => void;
  closeSheet: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  uploadImageOptionsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30
  },
  cancelBtn: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderColor: "#535BFE",
    borderWidth: 2,
    justifyContent: "center",
    width: 250,
    height: 60,
    borderRadius: 30
  },
  cancelBtnText: {
    color: "#535BFE",
    fontSize: 20,
    paddingLeft: 10
  },
  pictureOptionContainer: {
    borderRadius: 5,
    height: 150,
    width: 150,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  pictureOptionWrapper: {
    alignItems: "center"
  },
  pictureOptionText: {
    fontSize: 20,
    fontWeight: "600"
  }
});

const UpdateProfileImage: React.FC<UpdateProfileImageProps> = ({
  handleImageChange,
  closeSheet
}) => {
  const [isSettingImage, setIsSettingImage] = useState<boolean>(false);
  const handleImageGalleryPermissions = async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    return { status: status === "granted" };
  };

  const handleTakePicturePermissions = async () => {
    const { status } = await handleImageGalleryPermissions();
    if (!status) return { status: false };
    const {
      status: cameraStatus
    } = await ImagePicker.requestCameraPermissionsAsync();
    return { status: cameraStatus === "granted" };
  };

  const setImage = (result: ImagePicker.ImagePickerResult) => {
    if (!result.cancelled) {
      setIsSettingImage(true);
      setTimeout(() => {
        handleImageChange(result.uri);
        setIsSettingImage(false);
        closeSheet();
      }, 1500);
    }
  };

  const handlePickImageGallery = async () => {
    const { status } = await handleImageGalleryPermissions();
    if (!status) {
      return console.log(
        "Sorry, we need camera roll permissions to make this work!"
      );
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    setImage(result);
    return "SUCCESS";
  };

  const handleTakePicture = async () => {
    const { status } = await handleTakePicturePermissions();
    if (!status) {
      return console.log(
        "Sorry, we need camera roll permissions to make this work!"
      );
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    setImage(result);
    return "SUCCESS";
  };

  return (
    <View style={styles.container}>
      {!isSettingImage && (
        <>
          <View style={styles.uploadImageOptionsWrapper}>
            <TouchableOpacity
              onPress={handleTakePicture}
              style={styles.pictureOptionContainer}
            >
              <View style={styles.pictureOptionWrapper}>
                <Entypo name="camera" size={50} color="#000" />
              </View>
              <Text style={styles.pictureOptionText}>Take a Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handlePickImageGallery}
              style={styles.pictureOptionContainer}
            >
              <View style={styles.pictureOptionWrapper}>
                <AntDesign name="picture" size={50} color="#000" />
              </View>
              <Text style={styles.pictureOptionText}>From Gallery</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "flex-end",
              flex: 1,
              marginBottom: 40
            }}
          >
            <Button onPress={closeSheet} style={styles.cancelBtn}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </Button>
          </View>
        </>
      )}

      {isSettingImage && (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={{ fontSize: 25, fontWeight: "600", marginVertical: 10 }}>
            Please wait
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "500", color: "#ccc" }}>
            We are working on saving your image
          </Text>
        </View>
      )}
    </View>
  );
};

export default UpdateProfileImage;
