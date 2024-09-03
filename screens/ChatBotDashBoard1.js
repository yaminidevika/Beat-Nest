import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ChatBotDashBoard1 = () => {
  return (
    <View style={styles.chatBotDashBoard}>
      <Image
        style={styles.bot1Icon}
        contentFit="cover"
        source={require("../assets/bot-1.png")}
      />
      <Image
        style={styles.chatBotDashBoardChild}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={styles.keyboard} />
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../assets/shape.png")}
      />
      <Image
        style={styles.chatBotDashBoardItem}
        contentFit="cover"
        source={require("../assets/ellipse-51.png")}
      />
      <View style={styles.icons}>
        <Text style={styles.text}>9:40</Text>
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
      <Text style={[styles.helloIM, styles.helloIMTypo]}>{`Hello 
I m Vistabot`}</Text>
      <Text style={[styles.howCanI, styles.helloIMTypo]}>
        How can I help you?
      </Text>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.iWantTo, styles.helloIMTypo]}>I Want to Book</Text>
      </View>
      <Image
        style={styles.micIcon}
        contentFit="cover"
        source={require("../assets/mic.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  helloIMTypo: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
  },
  buttonLayout: {
    height: 50,
    width: 258,
    position: "absolute",
  },
  bot1Icon: {
    left: -40,
    width: 439,
    top: 0,
    position: "absolute",
    height: 800,
  },
  chatBotDashBoardChild: {
    top: 742,
    width: 347,
    height: 60,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  vectorIcon: {
    height: "1.95%",
    width: "6.08%",
    top: "94.5%",
    right: "80.86%",
    bottom: "3.55%",
    left: "13.06%",
  },
  keyboard: {
    top: 340,
    left: 79,
    backgroundColor: Color.colorGray_800,
    width: 25,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  shapeIcon: {
    top: -97,
    left: -102,
    width: 601,
    height: 1051,
    position: "absolute",
  },
  chatBotDashBoardItem: {
    top: 49,
    left: 286,
    width: 62,
    height: 64,
    position: "absolute",
  },
  text: {
    top: 2,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_500,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 22,
    left: 0,
    position: "absolute",
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
  helloIM: {
    top: 198,
    left: 117,
    width: 141,
    height: 44,
  },
  howCanI: {
    top: 556,
    left: 52,
    width: 265,
    height: 49,
  },
  buttonChild: {
    borderRadius: Border.br_81xl,
    backgroundColor: "rgba(52, 15, 15, 0.66)",
    left: 0,
    top: 0,
  },
  iWantTo: {
    top: 14,
    left: 55,
  },
  button: {
    top: 598,
    left: 50,
  },
  micIcon: {
    top: 740,
    left: 160,
    width: 49,
    height: 41,
    position: "absolute",
  },
  vectorIcon3: {
    height: "2.09%",
    width: "6.94%",
    top: "94%",
    right: "14.44%",
    bottom: "3.91%",
    left: "78.61%",
  },
  chatBotDashBoard: {
    backgroundColor: Color.stateLayersOnSurfaceVariantOpacity12,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
    borderRadius: Border.br_11xl,
  },
});

export default ChatBotDashBoard1;
