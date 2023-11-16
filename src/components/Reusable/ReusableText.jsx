import { StyleSheet, Text } from "react-native";
import React from "react";

const ReusableText = ({ text, family, color, size, align }) => {
  return (
    <Text style={styles.textStyles(family, size, color, align)}>{text}</Text>
  );
};

export default ReusableText;

const styles = StyleSheet.create({
  textStyles: (family, size, color, align) => ({
    fontFamily: family,
    color: color,
    fontSize: size,
    textAlign: align,
  }),
});
