import ListItems from "@/components/ListItems";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import {SAMPLE_DATA} from "../Data/sampleData"

const Index = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
<Text style={styles.titleText}> Markets</Text>
  </View>
  <View style={styles.devider}> </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={SAMPLE_DATA}
        renderItem={({ item }) => (
          <ListItems
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
            logoUrl={item.image}
            
          />
        )}
       
      />
      </SafeAreaView>
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
