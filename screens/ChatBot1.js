import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ChatBot1 = () => {
  return (
    <View style={styles.chatBot4}>
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
          <View style={[styles.msg1Child, styles.msg1ItemPosition]} />
          <Text
            style={[styles.thankYouYour, styles.yourTypo]}
          >{`Thank you! Your payment has been processed successfully. Here are your ticket details:
Museum: Museum A
Date: September 10th
Time: 12:00 PM
Tickets: 2 Adults, 1 Child
Total Cost: $30`}</Text>
        </View>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <View style={[styles.msg2, styles.msg2Layout]}>
          <View style={[styles.msg2Child, styles.msg2Layout]} />
          <Text
            style={[styles.entersDetails, styles.yourTypo]}
          >{`[Enters details]

`}</Text>
        </View>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </View>
      <View style={styles.chatBot4Child} />
      <Text style={[styles.typeAMessage, styles.textFlexBox]}>
        Type a message
      </Text>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={styles.chatBot4Item}
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
          style={styles.vectorIcon7}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon8, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={styles.msg11}>
        <View style={[styles.msg1Item, styles.msg1ItemPosition]} />
        <Text style={[styles.creditCard, styles.yourTypo]}>Credit Card</Text>
      </View>
      <Image
        style={[styles.vectorIcon9, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <View style={[styles.msg21, styles.msg21Layout]}>
        <View style={[styles.msg2Item, styles.msg21Layout]} />
        <Text
          style={[styles.pleaseEnterYour, styles.yourTypo]}
        >{`Please enter your credit card details below:
Card Number:
Expiry Date:
CVV:
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
    height: 227,
    width: 278,
    position: "absolute",
  },
  msg1ItemPosition: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  yourTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 22,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  msg2Layout: {
    height: 43,
    width: 183,
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
  msg21Layout: {
    height: 119,
    width: 267,
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
    backgroundColor: Color.colorGray_700,
    height: 227,
    width: 278,
    position: "absolute",
  },
  thankYouYour: {
    top: 20,
    left: 17,
    width: 218,
  },
  msg1: {
    top: 497,
    left: 151,
  },
  vectorIcon1: {
    height: "1.9%",
    width: "4.16%",
    top: "48.24%",
    right: "77.04%",
    bottom: "49.86%",
    left: "18.8%",
  },
  msg2Child: {
    backgroundColor: Color.colorDimgray_300,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  entersDetails: {
    top: 12,
    left: 9,
    width: 159,
    height: 26,
  },
  msg2: {
    top: 433,
    left: 232,
  },
  vectorIcon2: {
    height: "2.3%",
    width: "4.03%",
    top: "41.96%",
    right: "26.26%",
    bottom: "55.74%",
    left: "69.72%",
  },
  shape: {
    top: -89,
    left: -101,
    width: 601,
    height: 1051,
    position: "absolute",
  },
  chatBot4Child: {
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
  vectorIcon3: {
    height: "2.5%",
    width: "6.94%",
    top: "24.63%",
    right: "89.44%",
    bottom: "72.88%",
    left: "3.61%",
  },
  vectorIcon4: {
    height: "2.74%",
    top: "92.38%",
    right: "88.92%",
    bottom: "4.89%",
    left: "5%",
  },
  vectorIcon5: {
    height: "2.29%",
    top: "92.25%",
    right: "8.92%",
    bottom: "5.46%",
    left: "85%",
  },
  vectorIcon6: {
    height: "3.13%",
    width: "4.78%",
    top: "92%",
    right: "23%",
    bottom: "4.88%",
    left: "72.22%",
  },
  chatBot4Item: {
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
  vectorIcon7: {
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
  vectorIcon8: {
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
    backgroundColor: "rgba(106, 76, 76, 0.97)",
    width: 143,
    height: 36,
    position: "absolute",
  },
  creditCard: {
    top: 5,
    left: 11,
    width: 206,
    height: 48,
  },
  msg11: {
    top: 144,
    left: 161,
    width: 217,
    height: 53,
    position: "absolute",
  },
  vectorIcon9: {
    height: "3.03%",
    width: "6.72%",
    top: "18.5%",
    right: "5.22%",
    bottom: "78.47%",
    left: "88.06%",
  },
  msg2Item: {
    backgroundColor: "rgba(153, 127, 127, 0.95)",
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  pleaseEnterYour: {
    top: 3,
    left: 14,
    width: 235,
    height: 99,
  },
  msg21: {
    top: 195,
    left: 50,
  },
  chatBot4: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.stateLayersOnSurfaceVariantOpacity12,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default ChatBot1;
