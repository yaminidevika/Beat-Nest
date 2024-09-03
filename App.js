const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import DashBoard from "./screens/DashBoard";
import PaymentHistory from "./screens/PaymentHistory";
import ChatBotDashBoard1 from "./screens/ChatBotDashBoard1";
import SplashScreen from "./screens/SplashScreen";
import Login from "./screens/Login";
import ChatBot2 from "./screens/ChatBot2";
import ChatBot1 from "./screens/ChatBot1";
import Support from "./screens/Support";
import EditProfile from "./screens/EditProfile";
import ExploreExhibitions from "./screens/ExploreExhibitions";
import ChatBot3 from "./screens/ChatBot3";
import ChatBot from "./screens/ChatBot";
import Notifications from "./screens/Notifications";
import MyBookings from "./screens/MyBookings";
import Registration from "./components/Registration";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 5000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="DashBoard"
              component={DashBoard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentHistory"
              component={PaymentHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatBotDashBoard1"
              component={ChatBotDashBoard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatBot2"
              component={ChatBot2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatBot1"
              component={ChatBot1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Support"
              component={Support}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExploreExhibitions"
              component={ExploreExhibitions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatBot3"
              component={ChatBot3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatBot"
              component={ChatBot}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyBookings"
              component={MyBookings}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
