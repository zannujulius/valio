import React, { Component, PureComponent, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { styles } from "../../../global/styles";
import { AntDesign } from "@expo/vector-icons";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";
import axios from "axios";

export const { width: SIZE } = Dimensions.get("window");

const Chart = ({ navigation, route }) => {
  const [ask, setAsk] = useState([]);
  const [bid, setBid] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    currentPrice,
    logoUrl,
    name,
    priceChangePercentage7d,
    symbol,
    sparkline,
  } = route.params.token;

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.cryptowat.ch/markets/binance/${symbol}usdt/orderbook?span=0.5`
      )
      .then((res) => {
        const { asks, bids } = res.data.result;
        const spliceAsk = asks.splice(0, 6);
        const splicebid = bids.splice(0, 6);
        setAsk(spliceAsk);
        setBid(splicebid);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const priceChangeColor = priceChangePercentage7d > 0 ? "#2ED96C" : "#E12B2B";

  const formatUSD = (value) => {
    // worklet = UI thread
    "worklet";
    if (value === "") {
      return `$${currentPrice.toLocaleString("en-US", { currency: "USD" })}`;
    }

    const formattedValue = `$${parseFloat(value)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;

    return formattedValue;
  };

  return (
    <View style={styles.chart}>
      <ChartPathProvider
        data={{ points: sparkline, smoothingStrategy: "bezier" }}
      >
        <View style={styles.chartcover}>
          <TouchableOpacity
            style={styles.chartNav}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={17} color="#fff" />
            <Text style={styles.chartnavtext}>Back</Text>
          </TouchableOpacity>
          <View style={styles.chartpair}>
            <Text style={styles.chartpairtext}>{symbol}/usd</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
            }}
          >
            <ChartYLabel format={formatUSD} style={styles.pairprice} />
            <Text style={[styles.pairpercentage, { color: priceChangeColor }]}>
              {priceChangePercentage7d.toFixed(2)}%
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 300,
              borderColor: "#fff",
              marginTop: 25,
            }}
          >
            <ChartPath height={SIZE / 2} stroke="yellow" width={SIZE} />
            <ChartDot style={{ backgroundColor: "dodgerblue" }} />
            <CurrentPositionVerticalLine />
          </View>
        </View>
      </ChartPathProvider>

      {/* Bid and Ask */}
      <View
        style={{
          width: "100%",
          borderColor: "green",
        }}
      >
        <View style={styles.marketbtncover}>
          <View style={[styles.marketbtn, { backgroundColor: "#2ED96C" }]}>
            <Text style={styles.marketbtntext}>Buy</Text>
          </View>
          <View style={[styles.marketbtn, { backgroundColor: "#E12B2B" }]}>
            <Text style={styles.marketbtntext}>Sell</Text>
          </View>
        </View>
        {/* Order */}
        <Text style={styles.ordertitle}>Order Book</Text>

        <View style={[styles.ordertop]}>
          <Text style={styles.orderactiontext}>Bid</Text>
          <Text style={styles.orderactiontext}>Ask</Text>
        </View>
        <View style={styles.orderpricevalue}>
          {/* bid */}
          <View style={styles.ordercol}>
            {loading
              ? [1, 2, 3, 4, 5, 6].map((e, index) => (
                  <View style={styles.ordercolcover} key={index}>
                    <Text style={styles.ordercoltext}>0</Text>
                    <Text style={[styles.ordercoltext, { color: "#2ED96C" }]}>
                      0
                    </Text>
                  </View>
                ))
              : bid.map((e, index) => (
                  <View style={styles.ordercolcover} key={index}>
                    <Text style={styles.ordercoltext}>{e[1]}</Text>
                    <Text style={[styles.ordercoltext, { color: "#2ED96C" }]}>
                      {e[0]}
                    </Text>
                  </View>
                ))}
          </View>
          {/* ask */}
          <View style={styles.ordercol}>
            {loading
              ? [1, 2, 3, 4, 5, 6].map((e, index) => (
                  <View style={styles.ordercolcover} key={index}>
                    <Text style={[styles.ordercoltext, { color: "#E12B2B" }]}>
                      0
                    </Text>
                    <Text style={styles.ordercoltext}>0</Text>
                  </View>
                ))
              : ask.map((e, index) => (
                  <View style={styles.ordercolcover} key={index}>
                    <Text style={[styles.ordercoltext, { color: "#E12B2B" }]}>
                      {e[0]}
                    </Text>
                    <Text style={styles.ordercoltext}>{e[1]}</Text>
                  </View>
                ))}
          </View>
          <View style={styles.ordercol}></View>
        </View>
      </View>
    </View>
  );
};

export default Chart;
