import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
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
        <Text style={[styles.dontHaveAnContainer, styles.iconsLayout]}>
          <Text style={styles.dontHaveAnClr}>{`Don’t have an account? `}</Text>
          <Text style={[styles.signUp, styles.textTypo]}>Sign up</Text>
        </Text>
        <Text style={[styles.forgetPassword, styles.textFlexBox]}>
          Forget Password
        </Text>
      </View>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.register, styles.registerTypo]}>Register</Text>
      </View>
      <Text style={[styles.welcomeBack, styles.welcomeBackPosition]}>
        Welcome Back!
      </Text>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.enterYourEMail, styles.dontHaveAnClr]}>
          Enter your e-mail
        </Text>
      </View>
      <View style={[styles.input1, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.enterYourEMail, styles.dontHaveAnClr]}>
          Confirm Password
        </Text>
      </View>
      <Image
        style={[styles.undrawLoginRe4vu21Icon, styles.welcomeBackPosition]}
        contentFit="cover"
        source={require("../assets/undraw-login-re-4vu2-1.png")}
      />
      <View style={[styles.icons, styles.iconsLayout]}>
        <Text style={[styles.text, styles.textFlexBox]}>9:40</Text>
        <Image
          style={styles.signalIcon}
          contentFit="cover"
          source={require("../assets/signal2.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  shapeLayout: {
    height: 200,
    width: 200,
    position: "absolute",
  },
  iconsLayout: {
    height: 24,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
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
  registerTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 22,
  },
  welcomeBackPosition: {
    left: 106,
    position: "absolute",
  },
  inputLayout: {
    height: 50,
    width: 317,
    position: "absolute",
  },
  dontHaveAnClr: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsRegular,
  },
  vectorIconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  signUp: {
    color: "#220202",
  },
  dontHaveAnContainer: {
    top: 747,
    left: 168,
    width: 258,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_smi,
  },
  forgetPassword: {
    top: 628,
    left: 204,
    color: "rgba(73, 37, 37, 0.79)",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
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
  register: {
    top: 15,
    left: 54,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    position: "absolute",
  },
  button: {
    top: 575,
    left: 76,
  },
  welcomeBack: {
    top: 145,
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.size_lg,
  },
  inputChild: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDimgray_100,
    left: 0,
    top: 0,
  },
  enterYourEMail: {
    top: 13,
    left: 14,
    height: 32,
    width: 258,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  input: {
    top: 389,
    left: 19,
    width: 317,
  },
  input1: {
    top: 466,
    left: 19,
    width: 317,
  },
  undrawLoginRe4vu21Icon: {
    top: 201,
    width: 142,
    height: 134,
  },
  text: {
    top: 2,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_500,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
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
  },
  login: {
    backgroundColor: Color.stateLayersOnSurfaceVariantOpacity12,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default Login;
