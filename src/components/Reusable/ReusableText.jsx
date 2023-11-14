import { StyleSheet, Text } from "react-native";
import React from "react";

const ReusableText = ({ text, family, color, size }) => {
  return <Text style={styles.textStyles(family, size, color)}>{text}</Text>;
};

export default ReusableText;

const styles = StyleSheet.create({
  textStyles: (family, size, color) => ({
    fontFamily: family,
    color: color,
    fontSize: size,
  }),
});
