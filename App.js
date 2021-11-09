import { StatusBar } from "expo-status-bar";
import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Splash from "./src/components/AuthScreens/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  AuthStack,
  HomeStack,
  ProfileStack,
} from "./src/navigation/StackScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "./src/context/AuthContext";
import { FontAwesome5 } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function App() {
  const [isloading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken("ala");
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken("ala");
      setIsLoading(false);
    },
    signout: () => {
      setUserToken("ala"), setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isloading) {
    return <Splash />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthContext.Provider value={authContext}>
          {userToken !== null ? (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Wallets") {
                    iconName = focused ? "wallet" : "wallet-outline";
                  } else if (route.name === "User") {
                    iconName = focused ? "person" : "person-outline";
                  }
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: "#252644",
                tabBarInactiveTintColor: "#252644",
              })}
            >
              <Tab.Screen name="Wallets" component={HomeStack} />
              <Tab.Screen name="User" component={ProfileStack} />
            </Tab.Navigator>
          ) : (
            <AuthStack />
          )}
        </AuthContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
