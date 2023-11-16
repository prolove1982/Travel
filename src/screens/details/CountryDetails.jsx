import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CountryDetails = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <View>
      <Text>Welcome {item.country}!</Text>
    </View>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({});
