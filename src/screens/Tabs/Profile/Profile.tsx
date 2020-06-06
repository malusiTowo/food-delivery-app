import React, { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  EvilIcons,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  Octicons
} from "@expo/vector-icons";
import { Header, StackNavigationProp } from "@react-navigation/stack";
import { Button } from "native-base";
import RBSheet from "react-native-raw-bottom-sheet";

import { ProfileStackParamList } from "../../../navigation/ParamList/ProfileStackParamList";
import UpdateProfileImage from "../../../components/ProfileTab/UpdateProfileImage";

type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  "Profile"
>;

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB",
    paddingBottom: 0
  },
  ProfileBanner: {
    marginLeft: 30
  },
  ProfileBannerText: {
    fontSize: 38,
    fontWeight: "800"
  },
  formHeaderWrapper: {
    marginLeft: 20,
    marginTop: 20,
    marginVertical: 10
  },
  formHeaderText: {
    fontSize: 22,
    fontWeight: "600"
  },
  formWrapper: {
    marginTop: 10,
    alignItems: "center"
  },
  form: {
    width: width - 30,
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
  formItem: {
    flexDirection: "row",
    height: 50,
    alignItems: "center"
  },
  formItemsRowBetween: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between"
  },
  formItemIcon: {
    marginHorizontal: 15
  },
  formItemText: {
    fontSize: 15,
    fontWeight: "500"
  },
  formTextLeft: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "500"
  },
  profileInfoBanner: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  },
  profileInfoWrapper: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 0.7
  },
  profileName: {
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 5
  },
  profilePhone: {
    fontSize: 15,
    color: "#ccc"
  },
  editBtn: {
    marginTop: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    width: 100,
    height: 40,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#535BFE"
  },
  editBtnText: {
    color: "#000",
    fontSize: 20
  },
  logoutWrapper: {
    alignItems: "flex-end",
    marginRight: 10,
    marginTop: 10
  },
  updateBtnWrapper: {
    alignItems: "center"
  },
  updateBtn: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 2,
    justifyContent: "center",
    width: width - 30,
    height: 60,
    borderRadius: 30
  },
  updateBtnText: {
    color: "#000",
    fontSize: 20,
    paddingLeft: 10
  },
  textInputFormItem: {
    height: 50,
    alignItems: "flex-start",
    borderBottomColor: "#eee",
    borderBottomWidth: 1
  },
  textInput: {
    flex: 1,
    width: "100%",
    height: 50,
    fontSize: 15,
    fontWeight: "500",
    paddingLeft: 10
  }
});

const initialProfileImage =
  "https://images.pexels.com/photos/1136571/pexels-photo-1136571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabledSwitchTwo, setIsEnabledSwitchTwo] = useState<boolean>(false);
  const toggleSwitchTwo = () =>
    setIsEnabledSwitchTwo(previousState => !previousState);
  const [profileName, setProfileName] = useState<string>("John Doe");
  const [profilePhone, setProfilePhone] = useState<string>("+7 923 777 77 77");
  const [tmpProfileName, setTmpProfileName] = useState<string>("");
  const [tmpProfilePhone, setTmpProfilePhone] = useState<string>("");
  const [editEnabled, setEditEnabled] = useState<boolean>(false);
  const tmpProfilePhoneRef = useRef<TextInput>(null);
  const tmpProfileEmailRef = useRef<TextInput>(null);
  const RBsheetRef = useRef<RBSheet>(null);
  const [profileImage, setProfileImage] = useState<string>(initialProfileImage);

  const updateProfile = () => {
    if (tmpProfileName.length > 1) {
      setProfileName(tmpProfileName);
    }
    if (tmpProfilePhone.length > 1) {
      setProfilePhone(tmpProfilePhone);
    }
    setEditEnabled(false);
  };

  const handleCloseSheet = () => RBsheetRef?.current?.close();

  const goToPaymentScreen = () => navigation.navigate("Payment");

  const goToShippingScreen = () => navigation.navigate("Shipping");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          hitSlop={{ bottom: 20, left: 20, top: 20, right: 20 }}
          style={styles.logoutWrapper}
        >
          <MaterialCommunityIcons name="logout" size={35} color="black" />
        </TouchableOpacity>

        <View style={styles.ProfileBanner}>
          <Text style={styles.ProfileBannerText}>Profile</Text>
        </View>

        <View style={styles.profileInfoBanner}>
          <TouchableOpacity
            onPress={() => RBsheetRef?.current?.open()}
            disabled={editEnabled}
          >
            <Image
              style={{ width: 150, height: 150, borderRadius: 75 }}
              source={{
                uri: profileImage
              }}
            />
          </TouchableOpacity>

          {!editEnabled && (
            <View style={styles.profileInfoWrapper}>
              <Text style={styles.profileName}>{profileName}</Text>
              <Text style={styles.profilePhone}>{profilePhone}</Text>
              <Button
                onPress={() => setEditEnabled(true)}
                style={styles.editBtn}
              >
                <Text style={styles.editBtnText}>Edit</Text>
              </Button>
            </View>
          )}
        </View>

        {!editEnabled && (
          <>
            <View style={styles.formHeaderWrapper}>
              <Text style={styles.formHeaderText}>Account</Text>
            </View>
            <View style={styles.formWrapper}>
              <View style={styles.form}>
                <TouchableOpacity style={styles.formItem}>
                  <EvilIcons
                    style={{ marginHorizontal: 12 }}
                    name="location"
                    size={30}
                    color="#535BFE"
                  />
                  <Text style={styles.formItemText}>Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.formItem}>
                  <MaterialCommunityIcons
                    style={styles.formItemIcon}
                    name="eye"
                    size={24}
                    color="#535BFE"
                  />
                  <Text style={styles.formItemText}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={goToShippingScreen}
                  style={styles.formItem}
                >
                  <Feather
                    style={styles.formItemIcon}
                    name="truck"
                    size={24}
                    color="#535BFE"
                  />
                  <Text style={styles.formItemText}>Shipping</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={goToPaymentScreen}
                  style={styles.formItem}
                >
                  <Octicons
                    style={styles.formItemIcon}
                    name="credit-card"
                    size={24}
                    color="#535BFE"
                  />
                  <Text style={styles.formItemText}>Payment</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.formHeaderWrapper}>
              <Text style={styles.formHeaderText}>Notifications</Text>
            </View>
            <View style={styles.formWrapper}>
              <View style={styles.form}>
                <View style={styles.formItemsRowBetween}>
                  <Text style={styles.formTextLeft}>App Notifications</Text>
                  <Switch
                    trackColor={{ false: "#eee", true: "#535BFE" }}
                    thumbColor={isEnabled ? "#eee" : "#535BFE"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ marginRight: 10 }}
                  />
                </View>
                <View style={styles.formItemsRowBetween}>
                  <Text style={styles.formTextLeft}>Location Tracking</Text>
                  <Switch
                    trackColor={{ false: "#eee", true: "#535BFE" }}
                    thumbColor={isEnabledSwitchTwo ? "#eee" : "#535BFE"}
                    onValueChange={toggleSwitchTwo}
                    value={isEnabledSwitchTwo}
                    style={{ marginRight: 10 }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.formHeaderWrapper}>
              <Text style={styles.formHeaderText}>Other</Text>
            </View>
            <View style={styles.formWrapper}>
              <View style={styles.form}>
                <TouchableOpacity style={styles.formItem}>
                  <Text style={styles.formTextLeft}>Language</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.formItem}>
                  <Text style={styles.formTextLeft}>Currency</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}

        {editEnabled && (
          <KeyboardAvoidingView style={{ flex: 1 }} enabled behavior="position">
            <View style={styles.formHeaderWrapper}>
              <Text style={styles.formHeaderText}>Account</Text>
            </View>
            <View style={styles.formWrapper}>
              <View style={styles.form}>
                <View style={styles.textInputFormItem}>
                  <TextInput
                    onChangeText={txt => setTmpProfileName(txt.trim())}
                    placeholder={profileName}
                    style={styles.textInput}
                    returnKeyType="next"
                    onSubmitEditing={() => tmpProfilePhoneRef?.current?.focus()}
                  />
                </View>
                <View style={styles.textInputFormItem}>
                  <TextInput
                    ref={tmpProfilePhoneRef}
                    onChangeText={txt => setTmpProfilePhone(txt.trim())}
                    placeholder={profilePhone}
                    style={styles.textInput}
                    returnKeyType="next"
                    onSubmitEditing={() => tmpProfileEmailRef?.current?.focus()}
                  />
                </View>
                <View style={styles.textInputFormItem}>
                  <TextInput
                    returnKeyType="done"
                    ref={tmpProfileEmailRef}
                    placeholder="johndoe@gmail.com"
                    style={styles.textInput}
                  />
                </View>
              </View>
            </View>
            <View style={styles.formWrapper}>
              <View style={styles.form}>
                <TouchableOpacity style={styles.formItem}>
                  <FontAwesome
                    style={styles.formItemIcon}
                    name="trash-o"
                    size={24}
                    color="#FF8398"
                  />
                  <Text style={styles.formItemText}>Remove Account</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.updateBtnWrapper}>
              <Button onPress={updateProfile} style={styles.updateBtn}>
                <Text style={styles.updateBtnText}>Update Profile</Text>
              </Button>
            </View>
          </KeyboardAvoidingView>
        )}
        <RBSheet
          ref={RBsheetRef}
          closeOnDragDown
          closeOnPressMask
          customStyles={{
            wrapper: {
              // backgroundColor: "transparent",
            },
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}
          height={350}
        >
          <UpdateProfileImage
            handleImageChange={setProfileImage}
            closeSheet={handleCloseSheet}
          />
        </RBSheet>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
