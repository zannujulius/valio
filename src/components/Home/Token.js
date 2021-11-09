import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../../../global/styles";

const Token = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage7d,
  logoUrl,
  navigation,
  sparkline,
}) => {
  const priceChangeColor = priceChangePercentage7d > 0 ? "#2ED96C" : "#E12B2B";
  return (
    <View>
      <TouchableOpacity
        style={styles.tokencover}
        onPress={() => {
          navigation.navigate("Chart", {
            token: {
              name,
              currentPrice,
              symbol,
              priceChangePercentage7d,
              logoUrl,
              symbol,
              sparkline,
            },
          });
        }}
      >
        {/* Left */}
        <View style={styles.tokenleft}>
          <View style={styles.tokenimagecover}>
            <Image source={{ uri: logoUrl }} style={styles.tokenimage} />
          </View>
          <View style={styles.tokeninfo}>
            <Text style={styles.tokenname}>{name}</Text>
            <Text style={styles.tokenshortname}>{symbol}</Text>
          </View>
        </View>
        {/* right */}
        <View style={styles.tokenright}>
          {/* <Text style={styles.tokenvolume}>{priceChangePrcentage2d}</Text> */}
          <View style={styles.tokenpriceaction}>
            <Text style={styles.tokenprice}>
              ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
            </Text>
            <Text style={[styles.tokenequivalent, { color: priceChangeColor }]}>
              {priceChangePercentage7d.toFixed(2)}%
            </Text>
            {/* <Text style={styles.tokenequivalent}>$2039.6</Text> */}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Token;
