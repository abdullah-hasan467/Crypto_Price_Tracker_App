import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ListItems = ({ name, symbol, currentPrice, priceChangePercentage7d, logoUrl }) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        <View style={styles.leftWrapper}>
          <Image
            style={styles.image}
            source={{ uri: logoUrl }}
          />
          <View style={styles.titleWrapper}>
            <Text style={styles.titleLeft}>{name}</Text>
            <Text style={styles.subTitleLeft}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        <View style={styles.rightWrapper}>
          <Text style={styles.titleRight}>{currentPrice}</Text>
          <Text style={styles.subTitleRight}>{priceChangePercentage7d}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 48,
    width: 48,
  },
  titleWrapper: {
    marginLeft: 8,
  },
  titleLeft: {
    fontSize: 18,
  },
  subTitleLeft: {
    fontSize: 14,
  },
  rightWrapper: {
    alignItems: 'flex-end',
  },
  titleRight: {
    fontSize: 18,
  },
  subTitleRight: {
    fontSize: 14,
    color: 'red',
  },
});

export default ListItems;
