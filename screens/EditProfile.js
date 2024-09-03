import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EditProfile = () => {
  return (
    <View style={styles.editProfile}>
      <View style={styles.shape}>
        <Image
          style={styles.shapeChild}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <Image
          style={[styles.shapeItem, styles.shapeLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.shapeInner, styles.shapeLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Text style={[styles.editProfile1, styles.editProfile1FlexBox]}>
          Edit Profile
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <Image
        style={styles.editProfileChild}
        contentFit="cover"
        source={require("../assets/ellipse-52.png")}
      />
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.updateInformation, styles.changePasswordLayout]}>
          Update Information
        </Text>
      </View>
      <View style={[styles.input1, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.changePassword, styles.changePasswordLayout]}>
          Change Password
        </Text>
      </View>
      <View style={[styles.input2, styles.inputPosition]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.notificationSettings, styles.textPosition]}>
          Notification Settings
        </Text>
      </View>
      <View style={[styles.input3, styles.inputPosition]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.updateInformation, styles.changePasswordLayout]}>
          Change Language
        </Text>
      </View>
      <View style={[styles.input4, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={styles.editProfile2}>Edit Profile</Text>
      </View>
      <View style={styles.icons}>
        <Text style={[styles.text, styles.textPosition]}>9:40</Text>
        <Image
          style={styles.signalIcon}
          contentFit="cover"
          source={require("../assets/signal1.png")}
        />
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <Image
        style={styles.undrawProfileDetailsReCh9rIcon}
        contentFit="cover"
        source={require("../assets/undraw-profile-details-re-ch9r-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shapeLayout: {
    height: 200,
    width: 200,
    position: "absolute",
  },
  editProfile1FlexBox: {
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  inputLayout: {
    height: 47,
    width: 147,
    position: "absolute",
  },
  changePasswordLayout: {
    height: 30,
    width: 120,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
  },
  inputPosition: {
    left: 13,
    height: 47,
    width: 147,
    position: "absolute",
  },
  textPosition: {
    top: 2,
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  shapeChild: {
    top: 771,
    left: 262,
    width: 339,
    height: 280,
    position: "absolute",
  },
  shapeItem: {
    left: 102,
    top: 0,
  },
  shapeInner: {
    top: 78,
    left: 0,
  },
  editProfile1: {
    top: 237,
    left: 198,
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_600,
  },
  vectorIcon: {
    height: "1.82%",
    width: "3.64%",
    top: "15.98%",
    right: "73.39%",
    bottom: "82.2%",
    left: "22.96%",
  },
  shape: {
    top: -104,
    left: -106,
    width: 601,
    height: 1051,
    position: "absolute",
  },
  editProfileChild: {
    top: 44,
    left: 283,
    width: 59,
    height: 61,
    position: "absolute",
  },
  inputChild: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDimgray_100,
    left: 0,
    top: 0,
  },
  updateInformation: {
    left: 14,
    width: 120,
    color: Color.colorGray_300,
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
    top: 0,
  },
  input: {
    top: 439,
    left: 186,
    width: 147,
  },
  changePassword: {
    top: 9,
    left: 9,
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  input1: {
    top: 564,
    left: 186,
    width: 147,
  },
  notificationSettings: {
    height: 30,
    width: 120,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    left: 14,
  },
  input2: {
    top: 627,
  },
  input3: {
    top: 501,
  },
  editProfile2: {
    top: 12,
    left: 41,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  input4: {
    top: 375,
    left: 12,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray_500,
    left: 0,
  },
  signalIcon: {
    left: 269,
    width: 18,
    height: 20,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    marginTop: -8,
    width: "7.81%",
    top: "50%",
    right: "0%",
    left: "92.19%",
    height: 13,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon2: {
    height: "50%",
    width: "5.94%",
    top: "25%",
    right: "18.44%",
    bottom: "25%",
    left: "75.63%",
  },
  icons: {
    top: 10,
    left: 22,
    width: 320,
    height: 24,
    position: "absolute",
  },
  undrawProfileDetailsReCh9rIcon: {
    top: 174,
    left: 89,
    width: 173,
    height: 137,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  editProfile: {
    backgroundColor: Color.stateLayersOnSurfaceVariantOpacity12,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default EditProfile;
