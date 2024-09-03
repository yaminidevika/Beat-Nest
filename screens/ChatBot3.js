import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ChatBot3 = () => {
  return (
    <View style={styles.chatBot2}>
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
          style={[styles.vectorIcon, styles.vectorIconLayout2]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <View style={[styles.msg1, styles.msg1Layout]}>
          <View style={[styles.msg1Child, styles.msg1Bg]} />
          <Text style={[styles.gotItHow, styles.museumCTypo]}>
            {" "}
            Got it. How many tickets do you need?
          </Text>
        </View>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <View style={styles.msg3}>
          <Text style={[styles.museumC, styles.museumCTypo]}>Museum C</Text>
        </View>
        <View style={[styles.msg2, styles.msg2Layout]}>
          <View style={[styles.msg2Child, styles.msg2Position]} />
          <Text
            style={[styles.twoAdultTickets, styles.museumCTypo]}
          >{`Two adult tickets and one child ticket.

`}</Text>
        </View>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout2]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
        <View style={[styles.rectangleView, styles.msg1Bg]} />
        <Text
          style={[styles.perfectHereAre, styles.museumCTypo]}
        >{`Perfect. Here are the available time slots for September 10th. Please select your preferred time:
`}</Text>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
      <View style={styles.chatBot2Child} />
      <Text style={[styles.typeAMessage, styles.textFlexBox]}>
        Type a message
      </Text>
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={styles.chatBot2Item}
        contentFit="cover"
        source={require("../assets/ellipse-51.png")}
      />
      <View style={styles.icons}>
        <Text style={[styles.text, styles.textFlexBox]}>9:40</Text>
        <Image
          style={styles.signalIcon}
          contentFit="cover"
          source={require("../assets/signal1.png")}
        />
        <Image
          style={styles.vectorIcon8}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon9, styles.vectorIconLayout2]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={[styles.msg11, styles.msg11Layout]}>
        <View style={[styles.msg1Item, styles.msg11Layout]} />
        <Text
          style={[styles.gotItHow, styles.museumCTypo]}
        >{` Excellent choice! For which date would you like to book your tickets? `}</Text>
      </View>
      <Image
        style={[styles.vectorIcon10, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <View style={styles.msg21}>
        <View style={[styles.msg2Item, styles.msg2ItemLayout]} />
        <Text
          style={[styles.september10th, styles.msg2ItemLayout]}
        >{`September 10th.
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
  vectorIconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  msg1Layout: {
    height: 60,
    width: 236,
    position: "absolute",
  },
  msg1Bg: {
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_xl,
  },
  museumCTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 22,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  vectorIconLayout1: {
    width: "4.16%",
    height: "1.9%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  msg2Layout: {
    height: 86,
    width: 183,
    position: "absolute",
  },
  msg2Position: {
    backgroundColor: Color.colorDimgray_300,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
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
    height: 73,
    width: 236,
    position: "absolute",
  },
  msg2ItemLayout: {
    height: 41,
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
    height: 60,
    width: 236,
    position: "absolute",
    left: 0,
    top: 0,
  },
  gotItHow: {
    top: 5,
    left: 11,
    width: 206,
    height: 48,
    position: "absolute",
  },
  msg1: {
    top: 437,
    left: 149,
    height: 60,
  },
  vectorIcon1: {
    top: "43.39%",
    right: "77.04%",
    bottom: "54.71%",
    left: "18.8%",
  },
  museumC: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  msg3: {
    top: 670,
    left: 176,
    width: 87,
    height: 22,
    position: "absolute",
  },
  msg2Child: {
    height: 86,
    width: 183,
    position: "absolute",
  },
  twoAdultTickets: {
    top: 11,
    left: 10,
    width: 159,
    height: 33,
    position: "absolute",
  },
  msg2: {
    top: 530,
    left: 232,
  },
  vectorIcon2: {
    height: "2.3%",
    width: "4.03%",
    top: "50.81%",
    right: "25.09%",
    bottom: "46.89%",
    left: "70.88%",
  },
  rectangleView: {
    top: 640,
    height: 131,
    width: 236,
    borderRadius: Border.br_xl,
    left: 149,
    position: "absolute",
  },
  perfectHereAre: {
    top: 653,
    left: 169,
    width: 185,
    position: "absolute",
  },
  vectorIcon3: {
    top: "62.8%",
    right: "76.71%",
    bottom: "35.3%",
    left: "19.13%",
  },
  shape: {
    top: -97,
    left: -102,
    width: 601,
    height: 1051,
    position: "absolute",
  },
  chatBot2Child: {
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
  vectorIcon4: {
    height: "2.5%",
    width: "6.94%",
    top: "18.75%",
    right: "89.44%",
    bottom: "78.75%",
    left: "3.61%",
  },
  vectorIcon5: {
    height: "2.74%",
    top: "92.38%",
    right: "88.92%",
    bottom: "4.89%",
    left: "5%",
  },
  vectorIcon6: {
    height: "2.29%",
    top: "92.25%",
    right: "8.92%",
    bottom: "5.46%",
    left: "85%",
  },
  vectorIcon7: {
    height: "3.13%",
    width: "4.78%",
    top: "92%",
    right: "23%",
    bottom: "4.88%",
    left: "72.22%",
  },
  chatBot2Item: {
    top: 49,
    left: 286,
    width: 62,
    height: 64,
    position: "absolute",
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
  vectorIcon8: {
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
  vectorIcon9: {
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
  msg11: {
    top: 145,
    left: 47,
  },
  vectorIcon10: {
    height: "3.03%",
    width: "6.72%",
    top: "33.25%",
    right: "3.28%",
    bottom: "63.72%",
    left: "90%",
  },
  msg2Item: {
    width: 221,
    backgroundColor: Color.colorDimgray_300,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  september10th: {
    top: 3,
    left: 14,
    width: 193,
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 22,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  msg21: {
    top: 258,
    left: 92,
    height: 44,
    width: 221,
    position: "absolute",
  },
  chatBot2: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.stateLayersOnSurfaceVariantOpacity12,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default ChatBot3;
