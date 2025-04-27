import ListItems from "@/components/ListItems";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {SAMPLE_DATA} from "../Data/sampleData"

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>Market </Text>
      </View>
      <View style={styles.devider} />
      <ListItems  name={SAMPLE_DATA[0].name}
            symbol={SAMPLE_DATA[0].symbol}
            currentPrice={SAMPLE_DATA[0].current_price}
            priceChangePercentage7d={SAMPLE_DATA[0].price_change_percentage_7d_in_currency}
            logoUrl={SAMPLE_DATA[0].image}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  devider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "gray",
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Index;
