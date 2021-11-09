import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../../../global/styles";
import Logo from "../../../assets/logo.svg";

const Splash = () => {
  return (
    <View style={styles.splashcover}>
      <View style={styles.splashcontent}>
        <Logo />
        <Text style={styles.splashtext}>Valio</Text>
      </View>
    </View>
  );
};

export default Splash;
