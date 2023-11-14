import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme";

const ReusableBtn = ({
  onPress,
  btnText,
  textColor,
  width,
  bgColor,
  bdColor,
  bdWidth,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyles(width, bgColor, bdColor, bdWidth)}
    >
      <Text style={styles.btnText(textColor)}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ReusableBtn;

const styles = StyleSheet.create({
  btnText: (textColor) => ({
    fontSize: SIZES.medium,
    fontFamily: "medium",
    color: textColor,
  }),
  btnStyles: (width, bgColor, bdColor, bdWidth) => ({
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: 45,
    backgroundColor: bgColor,
    borderColor: bdColor,
    borderWidth: bdWidth,
    borderRadius: SIZES.small,
  }),
});
