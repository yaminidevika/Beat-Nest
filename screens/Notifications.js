import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Notifications = () => {
  return (
    <View style={styles.notifications}>
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
        <Text style={[styles.notifications1, styles.textFlexBox]}>
          Notifications
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <Image
        style={styles.notificationsChild}
        contentFit="cover"
        source={require("../assets/ellipse-51.png")}
      />
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.latestUpdates, styles.remindersLayout]}>
          Latest Updates
        </Text>
      </View>
      <View style={[styles.input1, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.reminders, styles.remindersLayout]}>
          Reminders
        </Text>
      </View>
      <View style={[styles.input2, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.promotions, styles.iconsPosition]}>
          Promotions
        </Text>
      </View>
      <View style={[styles.input3, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={styles.viewNotifications}>View Notifications</Text>
      </View>
      <View style={[styles.icons, styles.iconsPosition]}>
        <Text style={[styles.text, styles.textFlexBox]}>9:40</Text>
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
        style={styles.undrawNewNotificationsReXpIcon}
        contentFit="cover"
        source={require("../assets/undraw-new-notifications-re-xpcv-1.png")}
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
  remindersLayout: {
    height: 30,
    width: 120,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    lineHeight: 22,
  },
  iconsPosition: {
    top: 10,
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
  notifications1: {
    top: 287,
    left: 179,
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
    top: -97,
    left: -102,
    width: 601,
    height: 1051,
    position: "absolute",
  },
  notificationsChild: {
    top: 49,
    left: 286,
    width: 62,
    height: 64,
    position: "absolute",
  },
  inputChild: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDimgray_100,
    left: 0,
    top: 0,
  },
  latestUpdates: {
    left: 8,
    top: 11,
    width: 120,
    color: Color.colorGray_300,
    position: "absolute",
  },
  input: {
    left: 191,
    width: 147,
    top: 464,
  },
  reminders: {
    top: 9,
    left: 9,
    position: "absolute",
  },
  input1: {
    top: 537,
    left: 191,
    width: 147,
  },
  promotions: {
    left: 13,
    height: 30,
    width: 120,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    lineHeight: 22,
  },
  input2: {
    top: 536,
    left: 22,
  },
  viewNotifications: {
    left: 15,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    top: 11,
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  input3: {
    left: 22,
    top: 464,
  },
  text: {
    top: 2,
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
    width: 320,
    height: 24,
    left: 22,
  },
  undrawNewNotificationsReXpIcon: {
    top: 259,
    left: 99,
    width: 163,
    height: 141,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  notifications: {
    backgroundColor: Color.stateLayersOnSurfaceVariantOpacity12,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default Notifications;
