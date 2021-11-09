import React, { useContext, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { styles } from "../../../global/styles";
import { SimpleLineIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../context/AuthContext";
import Logo from "../../../assets/logo.svg";

const Sigin = ({ navigation, route }) => {
  const [eye, setEye] = useState(false);

  const { signIn } = useContext(AuthContext);

  const handleEye = () => {
    if (eye === true) {
      setEye(false);
    } else {
      setEye(true);
    }
  };
  return (
    <SafeAreaView onPress={() => Keyboard.dismiss()}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.sigincover}>
          <View style={styles.siginimagecover}>
            <Logo style={styles.siginimage} />
          </View>
          <View style={styles.sigindesc}>
            <Text style={styles.sigintitle}>Welcome Back !</Text>
            <Text style={styles.sigincaption}>sign in continue</Text>
            <View style={styles.formgroup}>
              <Text style={styles.siginlabel}>Email Address</Text>
              <View style={styles.sigininputcover}>
                <View style={styles.signinicon}>
                  <SimpleLineIcons name="user" size={16} color="#757578" />
                </View>
                <TextInput
                  style={styles.signinput}
                  placeholder="james@email.com"
                />
              </View>
            </View>
            <View style={styles.formgroup}>
              <Text style={styles.siginlabel}>Password</Text>
              <View style={styles.sigininputcover}>
                <View style={styles.signinicon}>
                  <Feather name="lock" size={16} color="#757578" />
                </View>
                <TextInput
                  style={styles.signinput}
                  secureTextEntry={eye == false ? true : false}
                  placeholder="********"
                />
                <TouchableOpacity style={styles.eye} onPress={handleEye}>
                  <Ionicons
                    name={eye === true ? "eye-outline" : "eye-off-outline"}
                    size={16}
                    color="#757578"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.forgotpassword}>
              <Text style={styles.forgotpasswordtext}>Forgot password ?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signinbtn}
              onPress={() => {
                signIn();
              }}
            >
              <Text style={styles.signinbtntext}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.accounttextcover}>
            <Text style={styles.accounttext}>Don't have an account</Text>
            <TouchableOpacity
              style={styles.accounttext}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={styles.accountauthbtn}> Sign up here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Sigin;
