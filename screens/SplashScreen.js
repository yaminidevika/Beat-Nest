import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <View style={[styles.frame, styles.frameLayout1]}>
        <View style={[styles.button, styles.frameLayout1]} />
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={[styles.frame2, styles.frameLayout]}>
          <View style={[styles.frame3, styles.frameLayout]}>
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
              <View style={[styles.frame4, styles.frameFlexBox]}>
                <Text style={[styles.getThingsDone, styles.textFlexBox]}>
                  Get things done with vistoria
                </Text>
                <Text style={[styles.theVistoriaChat, styles.textFlexBox]}>
                  The Vistoria chat bot offers quick, multilingual ticket
                  booking with real-time support, ensuring a smooth and
                  hassle-free user experience.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.frame5}>
            <View style={styles.icons}>
              <View style={styles.frame6}>
                <Text style={[styles.text, styles.textFlexBox]}>9:40</Text>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector1.png")}
                />
              </View>
              <Image
                style={styles.signalIcon}
                contentFit="cover"
                source={require("../assets/signal.png")}
              />
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
            </View>
          </View>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    height: 52,
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "flex-end",
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    width: 638,
    height: 1051,
  },
  shapeLayout: {
    height: 200,
    width: 200,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    lineHeight: 22,
  },
  button: {
    backgroundColor: Color.colorDimgray_200,
    width: 203,
    left: 0,
    top: 0,
    borderRadius: Border.br_11xl,
  },
  frame: {
    top: 575,
    left: 76,
    width: 208,
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
  getThingsDone: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_200,
  },
  theVistoriaChat: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_300,
    width: 258,
    height: 91,
    marginRight: 6,
    left: 0,
    top: 0,
  },
  frame4: {
    top: 512,
    left: 148,
    width: 264,
    height: 142,
    gap: 29,
  },
  shape: {
    left: 37,
    width: 601,
    height: 1051,
    top: 0,
    position: "absolute",
  },
  frame3: {
    height: 1051,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray_500,
  },
  vectorIcon: {
    width: 19,
    height: 12,
  },
  frame6: {
    width: 239,
    height: 22,
    gap: 188,
    flexDirection: "row",
    overflow: "hidden",
  },
  signalIcon: {
    width: 18,
    height: 20,
    overflow: "hidden",
  },
  vectorIcon1: {
    width: 25,
    height: 13,
  },
  icons: {
    width: 320,
    height: 24,
    paddingTop: 2,
    gap: 8,
    flexDirection: "row",
  },
  frame5: {
    top: 136,
    left: 157,
    width: 324,
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    top: 291,
    left: 208,
    width: 222,
    height: 174,
    position: "absolute",
    overflow: "hidden",
  },
  frame2: {
    height: 1051,
    overflow: "hidden",
  },
  frame1: {
    top: -123,
    left: -139,
    alignItems: "center",
    height: 1051,
    width: 638,
  },
  splashScreen: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: "rgba(82, 78, 89, 0.12)",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default SplashScreen;
