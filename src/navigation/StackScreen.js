import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// AuthScreen
import Signup from "../components/AuthScreens/Signup";
import Signin from "../components/AuthScreens/Signin";

// Home Screen
import Home from "../components/Home/Home";
import Chart from "../components/Home/Chart";

// Profile Screen
import Profile from "../components/Profile/Profile";

const Stack = createNativeStackNavigator();

const headerOptions = {
  headerShown: false,
};

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chart" component={Chart} />
    </Stack.Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
