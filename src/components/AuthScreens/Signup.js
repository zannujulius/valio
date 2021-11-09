import React, { useContext } from "react";
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../../../global/styles";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../context/AuthContext";
import Logo from "../../../assets/logo.svg";

const Signup = ({ navigation, route }) => {
  const { signUp } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <TouchableOpacity
            style={styles.signuptopbtn}
            onPress={() => navigation.navigate("Signin")}
          >
            <View>
              <FontAwesome name="sign-in" size={16} color="#252644" />
            </View>
            <Text style={[styles.signuptoptext]}>Signin</Text>
          </TouchableOpacity>
          <View style={styles.signupimageCover}>
            <Logo style={styles.signupimage} />
          </View>
          <Text style={[styles.sigintitle, { marginTop: 10, paddingLeft: 10 }]}>
            Let's get started !!
          </Text>

          <View style={styles.signupcover}>
            {/* first name */}
            <View style={styles.formgroup}>
              <Text style={styles.siginlabel}>Email Address</Text>
              <View style={styles.sigininputcover}>
                <View style={styles.signinicon}>
                  <SimpleLineIcons name="user" size={16} color="#757578" />
                </View>
                <TextInput style={styles.signinput} placeholder="James" />
              </View>
            </View>
            {/* Second name */}
            <View style={styles.formgroup}>
              <Text style={styles.siginlabel}>Second name</Text>
              <View style={styles.sigininputcover}>
                <View style={styles.signinicon}>
                  <SimpleLineIcons name="user" size={16} color="#757578" />
                </View>
                <TextInput style={styles.signinput} placeholder="Moore" />
              </View>
            </View>
            {/* email */}
            <View style={styles.formgroup}>
              <Text style={styles.siginlabel}>Email Address</Text>
              <View style={styles.sigininputcover}>
                <View style={styles.signinicon}>
                  <Ionicons
                    name="ios-mail-open-outline"
                    size={16}
                    color="#757578"
                  />
                </View>
                <TextInput
                  style={styles.signinput}
                  placeholder="james@gmail.com"
                />
              </View>
            </View>
            {/* phone number */}
            <View style={styles.formgroup}>
              <Text style={styles.siginlabel}>Mobile Number</Text>
              <View style={styles.sigininputcover}>
                <View style={styles.signinicon}>
                  <SimpleLineIcons name="user" size={16} color="#757578" />
                </View>
                <TextInput style={styles.signinput} placeholder="1029,9422" />
              </View>
            </View>
            {/* Password */}
            <View style={styles.formgroup}>
              <Text style={styles.siginlabel}>Password</Text>
              <View style={styles.sigininputcover}>
                <View style={styles.signinicon}>
                  <Feather name="lock" size={16} color="#757578" />
                </View>
                <TextInput
                  style={styles.signinput}
                  placeholder="james@email.com"
                />
              </View>
            </View>
            <TouchableOpacity
              style={[styles.signinbtn, { marginTop: 20 }]}
              onPress={() => {
                signUp();
              }}
            >
              <Text style={styles.signinbtntext}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.accounttextcover}>
              <Text style={styles.accounttext}>
                By signing up you agree to our
              </Text>
              <TouchableOpacity
                style={styles.accounttext}
                onPress={() => navigation.navigate("Signup")}
              >
                <Text style={styles.accountauthbtn}> Terms and conditions</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Signup;
