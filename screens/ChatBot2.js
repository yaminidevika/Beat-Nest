import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ChatBot2 = () => {
  return (
    <View style={styles.chatBot3}>
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
          <Text style={[styles.youHaveSelected, styles.pmTypo]}>
            {" "}
            You have selected 12:00 PM on September 10th for two adults and one
            child. The total cost is $30. How would you like to pay? (Please
            choose a payment method)
          </Text>
        </View>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <View style={styles.msg3}>
          <Text style={[styles.museumC, styles.pmTypo]}>Museum C</Text>
        </View>
        <View style={[styles.msg31, styles.msgLayout]}>
          <View style={[styles.msg3Child, styles.msgLayout]} />
          <Text style={[styles.creditCard, styles.pmTypo]}>Credit Card</Text>
        </View>
        <View style={styles.msg32}>
          <View style={[styles.msg3Child, styles.msgLayout]} />
          <Text style={[styles.creditCard, styles.pmTypo]}>{`PayPal
`}</Text>
        </View>
        <View style={[styles.msg33, styles.msgLayout]}>
          <View style={[styles.msg3Child, styles.msgLayout]} />
          <Text style={[styles.creditCard, styles.pmTypo]}>Digital Wallet</Text>
        </View>
      </View>
      <View style={styles.chatBot3Child} />
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
        style={styles.chatBot3Item}
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
        <Text style={[styles.am1200Pm, styles.pmTypo]}>{` 10:00 AM
12:00 PM
2:00 PM
4:00 PM`}</Text>
      </View>
      <Image
        style={[styles.vectorIcon8, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <View style={styles.msg2}>
        <View style={[styles.msg2Child, styles.pmLayout]} />
        <Text style={[styles.pm, styles.pmLayout]}>{`12:00 PM
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
    height: 156,
    width: 281,
    position: "absolute",
  },
  msg1Position: {
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  pmTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 22,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  msgLayout: {
    height: 39,
    width: 173,
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
    height: 98,
    width: 236,
    position: "absolute",
  },
  pmLayout: {
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
    height: 156,
    width: 281,
    position: "absolute",
  },
  youHaveSelected: {
    top: 8,
    width: 242,
    height: 93,
    left: 11,
    color: Color.colorWhite,
    lineHeight: 22,
    position: "absolute",
  },
  msg1: {
    top: 437,
    left: 149,
  },
  vectorIcon1: {
    height: "1.9%",
    width: "4.16%",
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
  msg3Child: {
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  creditCard: {
    top: 9,
    left: 27,
    position: "absolute",
  },
  msg31: {
    top: 603,
    left: 149,
  },
  msg32: {
    top: 653,
    height: 53,
    width: 173,
    left: 149,
    position: "absolute",
  },
  msg33: {
    top: 702,
    left: 149,
  },
  shape: {
    top: -97,
    left: -102,
    width: 601,
    height: 1051,
    position: "absolute",
  },
  chatBot3Child: {
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
  chatBot3Item: {
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
  am1200Pm: {
    top: 5,
    width: 206,
    height: 48,
    left: 11,
    color: Color.colorWhite,
    lineHeight: 22,
    position: "absolute",
  },
  msg11: {
    top: 145,
    left: 47,
  },
  vectorIcon8: {
    height: "3.03%",
    width: "6.72%",
    top: "33.25%",
    right: "3.28%",
    bottom: "63.72%",
    left: "90%",
  },
  msg2Child: {
    backgroundColor: Color.colorDimgray_300,
    width: 221,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  pm: {
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
  msg2: {
    top: 258,
    left: 92,
    height: 44,
    width: 221,
    position: "absolute",
  },
  chatBot3: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.stateLayersOnSurfaceVariantOpacity12,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default ChatBot2;
