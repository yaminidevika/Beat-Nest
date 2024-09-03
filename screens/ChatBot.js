import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ChatBot = () => {
  return (
    <View style={styles.chatBot5}>
      <Image
        style={styles.bot1Icon}
        contentFit="cover"
        source={require("../assets/bot-1.png")}
      />
      <View style={styles.keyboard} />
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
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <View style={[styles.msg1, styles.msg1Layout]}>
          <View style={[styles.msg1Child, styles.msg1Position]} />
          <Text style={[styles.youreWelcomeEnjoy, styles.hereIsYourTypo]}>
            You’re welcome! Enjoy your visit to the museum. Have a great day!
          </Text>
        </View>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
      <View style={styles.chatBot5Child} />
      <Text style={[styles.typeAMessage, styles.textFlexBox]}>
        Type a message
      </Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={styles.chatBot5Item}
        contentFit="cover"
        source={require("../assets/ellipse-51.png")}
      />
      <View style={styles.icons}>
        <Text style={[styles.text, styles.textFlexBox]}>9:40</Text>
        <Image
          style={styles.signalIcon}
          contentFit="cover"
          source={require("../assets/signal.png")}
        />
        <Image
          style={styles.vectorIcon6}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={[styles.msg11, styles.msg11Layout]}>
        <View style={[styles.msg1Item, styles.msg11Layout]} />
        <Text style={[styles.hereIsYour, styles.hereIsYourTypo]}>
          Here is your QR code for the tickets. You can also share it via email
          or save it to your digital wallet. Is there anything else I can help
          you with?
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon8, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <View style={[styles.msg2, styles.msg2Layout]}>
        <View style={[styles.msg2Child, styles.msg2Layout]} />
        <Text
          style={[styles.noThatsAll, styles.hereIsYourTypo]}
        >{`No, that’s all. Thank you!
`}</Text>
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
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  msg1Layout: {
    height: 98,
    width: 236,
    position: "absolute",
  },
  msg1Position: {
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  hereIsYourTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 22,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  vectorIconLayout: {
    width: "6.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  msg11Layout: {
    height: 119,
    width: 282,
    position: "absolute",
  },
  msg2Layout: {
    height: 75,
    width: 221,
    position: "absolute",
  },
  bot1Icon: {
    left: -40,
    width: 439,
    top: 0,
    position: "absolute",
    height: 800,
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
  vectorIcon: {
    height: "1.82%",
    width: "3.64%",
    top: "15.98%",
    right: "73.39%",
    bottom: "82.2%",
    left: "22.96%",
  },
  msg1Child: {
    height: 98,
    width: 236,
    position: "absolute",
  },
  youreWelcomeEnjoy: {
    width: 206,
    height: 48,
    left: 15,
    color: Color.colorWhite,
    lineHeight: 22,
    top: 2,
  },
  msg1: {
    top: 487,
    left: 149,
  },
  vectorIcon1: {
    height: "1.9%",
    width: "4.16%",
    top: "48.81%",
    right: "76.37%",
    bottom: "49.29%",
    left: "19.47%",
  },
  shape: {
    top: -97,
    left: -102,
    width: 601,
    height: 1051,
    position: "absolute",
  },
  chatBot5Child: {
    top: 722,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    width: 360,
    height: 54,
    left: 0,
    position: "absolute",
  },
  typeAMessage: {
    top: 739,
    left: 62,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  vectorIcon2: {
    height: "2.5%",
    width: "6.94%",
    top: "18.75%",
    right: "89.44%",
    bottom: "78.75%",
    left: "3.61%",
  },
  vectorIcon3: {
    height: "2.74%",
    top: "92.38%",
    right: "88.92%",
    bottom: "4.89%",
    left: "5%",
  },
  vectorIcon4: {
    height: "2.29%",
    top: "92.25%",
    right: "8.92%",
    bottom: "5.46%",
    left: "85%",
  },
  vectorIcon5: {
    height: "3.13%",
    width: "4.78%",
    top: "92%",
    right: "23%",
    bottom: "4.88%",
    left: "72.22%",
  },
  chatBot5Item: {
    top: 49,
    left: 286,
    width: 62,
    height: 64,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray_500,
    top: 2,
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
  vectorIcon6: {
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
  vectorIcon7: {
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
  msg1Item: {
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  hereIsYour: {
    top: 5,
    left: 11,
    width: 254,
    height: 77,
  },
  msg11: {
    top: 145,
    left: 47,
  },
  vectorIcon8: {
    height: "3.03%",
    width: "6.72%",
    top: "39.5%",
    right: "3.28%",
    bottom: "57.47%",
    left: "90%",
  },
  msg2Child: {
    backgroundColor: Color.colorDimgray_300,
    borderRadius: Border.br_xl,
    height: 75,
    width: 221,
    left: 0,
    top: 0,
  },
  noThatsAll: {
    top: 11,
    width: 193,
    height: 41,
    left: 15,
    color: Color.colorWhite,
    lineHeight: 22,
  },
  msg2: {
    top: 290,
    left: 91,
  },
  chatBot5: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.stateLayersOnSurfaceVariantOpacity12,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default ChatBot;
