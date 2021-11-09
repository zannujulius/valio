import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../../global/styles";
import { Ionicons } from "@expo/vector-icons";

const HR = () => {
  return (
    <View
      style={{
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
      }}
    />
  );
};

const Profile = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#252644", color: "#fff" }}>
      <View style={styles.profilecover}>
        <TouchableOpacity style={styles.profilenav}>
          <Text style={styles.profilenavtext}>Edit</Text>
        </TouchableOpacity>
        <View>
          <View style={styles.profiletopcover}>
            <Image
              style={styles.profilepicture}
              source={require("../../../assets/user.jpg")}
            />
            <Text style={styles.profilename}>James Allen</Text>
            <Text style={styles.profileemail}>james@gmail.com</Text>
            <Text style={styles.profilepid}>ID:323242-88</Text>
          </View>

          {/* Support */}
          <View style={styles.profilesection}>
            {/* list */}
            <View style={styles.profilesectionlist}>
              {/* left */}
              <View style={styles.profileleftcontent}>
                <View
                  style={[
                    styles.profilesectionicon,
                    { backgroundColor: "dodgerblue" },
                  ]}
                >
                  <Ionicons name="person" size={16} color="#fff" />
                </View>
                <Text style={styles.profilesectiontitle}>Profile</Text>
              </View>
              {/* Righth */}
              <View style={styles.profilesectionright}>
                <Ionicons name="chevron-forward" size={24} color="#ccc" />
              </View>
            </View>
            <HR />
            <View style={styles.profilesectionlist}>
              {/* left */}
              <View style={styles.profileleftcontent}>
                <View
                  style={[
                    styles.profilesectionicon,
                    { backgroundColor: "#aaa" },
                  ]}
                >
                  <Ionicons
                    name="md-phone-portrait-outline"
                    size={16}
                    color="#fff"
                  />
                </View>
                <Text style={styles.profilesectiontitle}>Device</Text>
              </View>
              {/* Righth */}
              <View style={styles.profilesectionright}>
                <Ionicons name="chevron-forward" size={24} color="#ccc" />
              </View>
            </View>
            <HR />
            <View style={styles.profilesectionlist}>
              {/* left */}
              <View style={styles.profileleftcontent}>
                <View
                  style={[
                    styles.profilesectionicon,
                    { backgroundColor: "red" },
                  ]}
                >
                  <Ionicons name="ios-bookmark" size={16} color="#fff" />
                </View>
                <Text style={styles.profilesectiontitle}>KYC</Text>
              </View>
              {/* Righth */}
              <View style={styles.profilesectionright}>
                <Ionicons name="chevron-forward" size={24} color="#ccc" />
              </View>
            </View>
          </View>

          <View style={styles.profilesection}>
            {/* list */}
            <View style={styles.profilesectionlist}>
              {/* left */}
              <View style={styles.profileleftcontent}>
                <View
                  style={[
                    styles.profilesectionicon,
                    { backgroundColor: "dodgerblue" },
                  ]}
                >
                  <Ionicons name="person" size={16} color="#fff" />
                </View>
                <Text style={styles.profilesectiontitle}>Profile</Text>
              </View>
              {/* Righth */}
              <View style={styles.profilesectionright}>
                <Ionicons name="chevron-forward" size={24} color="#ccc" />
              </View>
            </View>
            <HR />
            <View style={styles.profilesectionlist}>
              {/* left */}
              <View style={styles.profileleftcontent}>
                <View
                  style={[
                    styles.profilesectionicon,
                    { backgroundColor: "#aaa" },
                  ]}
                >
                  <Ionicons
                    name="md-phone-portrait-outline"
                    size={16}
                    color="#fff"
                  />
                </View>
                <Text style={styles.profilesectiontitle}>Device</Text>
              </View>
              {/* Righth */}
              <View style={styles.profilesectionright}>
                <Ionicons name="chevron-forward" size={24} color="#ccc" />
              </View>
            </View>
            <HR />
            <View style={styles.profilesectionlist}>
              {/* left */}
              <View style={styles.profileleftcontent}>
                <View
                  style={[
                    styles.profilesectionicon,
                    { backgroundColor: "red" },
                  ]}
                >
                  <Ionicons name="ios-bookmark" size={16} color="#fff" />
                </View>
                <Text style={styles.profilesectiontitle}>KYC</Text>
              </View>
              {/* Righth */}
              <View style={styles.profilesectionright}>
                <Ionicons name="chevron-forward" size={24} color="#ccc" />
              </View>
            </View>
          </View>

          <View style={styles.profilesection}>
            {/* list */}
            <View style={styles.profilesectionlist}>
              {/* left */}
              <View style={styles.profileleftcontent}>
                <View
                  style={[
                    styles.profilesectionicon,
                    { backgroundColor: "#020202" },
                  ]}
                >
                  <Ionicons name="megaphone" size={16} color="#fff" />
                </View>
                <Text style={styles.profilesectiontitle}>Support</Text>
              </View>
              {/* Righth */}
              <View style={styles.profilesectionright}>
                <Ionicons name="chevron-forward" size={24} color="#ccc" />
              </View>
            </View>
            <HR />
            <View style={styles.profilesectionlist}>
              {/* left */}
              <View style={styles.profileleftcontent}>
                <View
                  style={[
                    styles.profilesectionicon,
                    { backgroundColor: "orange" },
                  ]}
                >
                  <Ionicons name="document" size={16} color="#fff" />
                </View>
                <Text style={styles.profilesectiontitle}>
                  Terms and Conditions
                </Text>
              </View>
              {/* Righth */}
              <View style={styles.profilesectionright}>
                <Ionicons name="chevron-forward" size={24} color="#ccc" />
              </View>
            </View>
            <HR />
            <View style={styles.profilesectionlist}>
              {/* left */}
              <View style={styles.profileleftcontent}>
                <View
                  style={[
                    styles.profilesectionicon,
                    { backgroundColor: "tomato" },
                  ]}
                >
                  <Ionicons name="key" size={16} color="#fff" />
                </View>
                <Text style={styles.profilesectiontitle}>API keys</Text>
              </View>
              {/* Righth */}
              <View style={styles.profilesectionright}>
                <Ionicons name="chevron-forward" size={24} color="#ccc" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
