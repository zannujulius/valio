import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
  FlatList,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../../global/styles";
import Token from "./Token";
import { SAMPLE_DATA } from "../../../assets/data/sampleData";
import { useTheme } from "@react-navigation/native";
import { getMarketData } from "../../../utils/cryptoService";

const Home = ({ navigation, route }) => {
  const [hashbalance, sethashBalance] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlebalance = () => {
    sethashBalance(true);
    hashbalance == false ? sethashBalance(true) : sethashBalance(false);
  };

  useEffect(() => {
    setLoading(true);
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
      setLoading(false);
    };
    fetchMarketData();
  }, []);

  const filterData = data.filter((e) => {
    return e.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.homecover}>
        {/* wallets details */}
        <View style={styles.hometopcover}>
          {/* top */}
          <View style={styles.hometop}>
            <View style={styles.hometopleft}>
              <Image
                source={require("../../../assets/user.jpg")}
                style={styles.homeimage}
              />
              <Text style={styles.homeusername}> james</Text>
            </View>
            {/* notification */}
            <View style={styles.hometopright}>
              <Ionicons name="notifications" size={18} color="#fff" />
            </View>
          </View>
          {/* top ends */}
          {/* bottom */}
          <View style={styles.homebottom}>
            <View style={styles.homeaccountcover}>
              <View style={styles.homeaccount}>
                <Text style={styles.homeaccountbalance}>
                  ${hashbalance === false ? "23,353.2" : "********"}
                </Text>
                <TouchableOpacity onPress={handlebalance}>
                  <Ionicons
                    name={
                      hashbalance === false ? "eye-outline" : "eye-off-outline"
                    }
                    style={{
                      marginLeft: 10,
                    }}
                    size={16}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.homeaccounttext}>
                Your balance equivalent
              </Text>
            </View>
            <TouchableOpacity style={styles.homecurrencyview}>
              <Text style={styles.homecurrencytext}>USD</Text>
              <View>
                <Ionicons name="chevron-down-outline" size={16} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* wallets tokens */}
        <View style={styles.homewallets}>
          <View
            style={{
              borderBottomColor: "#eee",
              borderBottomWidth: 1,
              marginBottom: 15,
            }}
          >
            <Text style={styles.hometokentitle}>Market</Text>
          </View>
          {/* search */}
          <View style={styles.homesearch}>
            <TextInput
              placeholder="search for token..."
              style={styles.hometokeninput}
              onChangeText={(e) => setSearchField(e)}
            />
            <View style={styles.homesearchicon}>
              <Ionicons name="search" size={16} color="#696BB5" />
            </View>
          </View>
          {/* flatList of markets */}
          {loading ? (
            <View>
              <Text>Fetching resource...</Text>
            </View>
          ) : (
            <View
              style={{
                height: 550,
              }}
            >
              <FlatList
                keyExtractor={(item) => item.id}
                data={filterData}
                renderItem={({ item }) => (
                  <Token
                    navigation={navigation}
                    name={item.name}
                    symbol={item.symbol}
                    currentPrice={item.current_price}
                    priceChangePercentage7d={
                      item.price_change_percentage_7d_in_currency
                    }
                    logoUrl={item.image}
                    sparkline={item.sparkline_in_7d.price}
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
