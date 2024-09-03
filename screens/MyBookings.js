import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MyBookings = () => {
  return (
    <View style={styles.myBookings}>
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
        <Text style={[styles.myBookings1, styles.textFlexBox]}>
          My Bookings
        </Text>
      </View>
      <Image
        style={styles.myBookingsChild}
        contentFit="cover"
        source={require("../assets/ellipse-51.png")}
      />
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.manageTickets, styles.manageTicketsLayout]}>
          Manage Tickets
        </Text>
      </View>
      <View style={[styles.input1, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.bookingDetails, styles.bookingLayout]}>
          Booking Details
        </Text>
      </View>
      <View style={[styles.input2, styles.inputPosition]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.cancelBooking, styles.inputPosition]}>
          Cancel Booking
        </Text>
      </View>
      <View style={[styles.input3, styles.inputPosition]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
        <Text style={[styles.downloadTicket, styles.input4Position]}>
          Download Ticket
        </Text>
      </View>
      <View style={[styles.input4, styles.input4Position]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
      </View>
      <View style={styles.icons}>
        <Text style={[styles.text, styles.textFlexBox]}>9:40</Text>
        <Image
          style={styles.signalIcon}
          contentFit="cover"
          source={require("../assets/signal.png")}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <Text style={styles.viewBookings}>View Bookings</Text>
      <Image
        style={styles.undrawBookingReGw4j1Icon}
        contentFit="cover"
        source={require("../assets/undraw-booking-re-gw4j-1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
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
  inputLayout: {
    height: 47,
    width: 147,
  },
  manageTicketsLayout: {
    height: 30,
    width: 120,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    lineHeight: 22,
  },
  bookingLayout: {
    top: 9,
    height: 30,
    width: 120,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    lineHeight: 22,
  },
  inputPosition: {
    left: 14,
    position: "absolute",
  },
  input4Position: {
    left: 13,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
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
  myBookings1: {
    top: 287,
    left: 179,
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_600,
  },
  shape: {
    top: -97,
    left: -102,
    width: 601,
    height: 1051,
    position: "absolute",
  },
  myBookingsChild: {
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
    position: "absolute",
  },
  manageTickets: {
    top: 11,
    left: 8,
    position: "absolute",
  },
  input: {
    left: 183,
    width: 147,
    position: "absolute",
    top: 304,
  },
  bookingDetails: {
    left: 9,
    position: "absolute",
  },
  input1: {
    top: 377,
    left: 183,
    width: 147,
    position: "absolute",
  },
  cancelBooking: {
    top: 9,
    height: 30,
    width: 120,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    lineHeight: 22,
  },
  input2: {
    top: 451,
    height: 47,
    width: 147,
  },
  downloadTicket: {
    top: 10,
    height: 30,
    width: 120,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    lineHeight: 22,
  },
  input3: {
    top: 376,
    height: 47,
    width: 147,
  },
  input4: {
    height: 47,
    width: 147,
    top: 304,
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
  vectorIcon: {
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
  vectorIcon1: {
    height: "50%",
    width: "5.94%",
    top: "25%",
    right: "18.44%",
    bottom: "25%",
    left: "75.63%",
  },
  icons: {
    left: 22,
    width: 320,
    height: 24,
    top: 10,
    position: "absolute",
  },
  viewBookings: {
    top: 315,
    left: 41,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  undrawBookingReGw4j1Icon: {
    top: 516,
    left: 134,
    borderRadius: 29,
    width: 202,
    height: 142,
    position: "absolute",
  },
  vectorIcon2: {
    height: "2.39%",
    width: "6.08%",
    top: "8.88%",
    right: "85.03%",
    bottom: "88.74%",
    left: "8.89%",
  },
  myBookings: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.stateLayersOnSurfaceVariantOpacity12,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default MyBookings;
