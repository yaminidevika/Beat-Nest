import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DashBoard = () => {
  return (
    <View style={styles.dashBoard}>
      <View style={styles.dashBoardChild} />
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
        <Text style={[styles.welcomeBravisAlexander, styles.textFlexBox]}>
          Welcome Bravis Alexander
        </Text>
      </View>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.letsChat, styles.textFlexBox]}>Let’s Chat</Text>
      </View>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.profileSettings, styles.profileSettingsLayout]}>
          Profile Settings
        </Text>
      </View>
      <View style={[styles.input1, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.profileSettings, styles.profileSettingsLayout]}>
          Notifications
        </Text>
      </View>
      <View style={[styles.input2, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.profileSettings, styles.profileSettingsLayout]}>
          Payment History
        </Text>
      </View>
      <View style={[styles.input3, styles.inputPosition]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.profileSettings, styles.profileSettingsLayout]}>
          Support
        </Text>
      </View>
      <View style={[styles.input4, styles.inputPosition]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.exploreExhibitions, styles.profileSettingsLayout]}>
          Explore Exhibitions
        </Text>
      </View>
      <View style={[styles.input5, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.profileSettings, styles.profileSettingsLayout]}>
          My Bookings
        </Text>
      </View>
      <View style={styles.icons}>
        <Text style={[styles.text, styles.textFlexBox]}>9:40</Text>
        <Image
          style={styles.signalIcon}
          contentFit="cover"
          source={require("../assets/signal.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <Image
        style={styles.dashBoardItem}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.undrawChatBotReE2gj1Icon}
        contentFit="cover"
        source={require("../assets/undraw-chat-bot-re-e2gj-1.png")}
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
  textFlexBox: {
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  buttonLayout: {
    height: 52,
    width: 203,
    position: "absolute",
  },
  inputLayout: {
    height: 47,
    width: 147,
    position: "absolute",
  },
  profileSettingsLayout: {
    height: 30,
    width: 120,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  inputPosition: {
    left: 14,
    height: 47,
    width: 147,
    position: "absolute",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  dashBoardChild: {
    backgroundColor: "rgba(99, 56, 56, 0.94)",
    width: 360,
    height: 255,
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_11xl,
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
  welcomeBravisAlexander: {
    left: 160,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_600,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 22,
    top: 304,
  },
  shape: {
    top: -97,
    left: -102,
    width: 601,
    height: 1051,
    position: "absolute",
  },
  buttonChild: {
    backgroundColor: Color.colorDimgray_200,
    left: 0,
    top: 0,
    borderRadius: Border.br_11xl,
  },
  letsChat: {
    top: 15,
    left: 44,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 22,
  },
  button: {
    top: 648,
    left: 71,
  },
  inputChild: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDimgray_100,
    left: 0,
    top: 0,
  },
  profileSettings: {
    top: 12,
    left: 7,
  },
  input: {
    left: 183,
    width: 147,
    top: 304,
  },
  input1: {
    left: 186,
    top: 451,
  },
  input2: {
    top: 377,
    left: 183,
    width: 147,
  },
  input3: {
    top: 451,
  },
  exploreExhibitions: {
    top: 13,
    left: 6,
  },
  input4: {
    top: 376,
  },
  input5: {
    left: 13,
    top: 304,
  },
  text: {
    top: 2,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray_500,
    textAlign: "center",
    lineHeight: 22,
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
  vectorIcon: {
    marginTop: -8,
    width: "7.81%",
    top: "50%",
    right: "0%",
    left: "92.19%",
    height: 13,
  },
  vectorIcon1: {
    height: "50%",
    width: "5.94%",
    top: "25%",
    right: "18.44%",
    bottom: "25%",
    left: "75.63%",
    maxHeight: "100%",
  },
  icons: {
    top: 10,
    left: 22,
    width: 320,
    height: 24,
    position: "absolute",
  },
  dashBoardItem: {
    top: 94,
    left: 130,
    width: 100,
    height: 100,
    position: "absolute",
  },
  undrawChatBotReE2gj1Icon: {
    top: 519,
    left: 98,
    borderRadius: Border.br_3xs,
    width: 148,
    height: 107,
    position: "absolute",
  },
  dashBoard: {
    backgroundColor: Color.stateLayersOnSurfaceVariantOpacity12,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default DashBoard;
