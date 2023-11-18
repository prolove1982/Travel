import { Text } from "react-native";
import React from "react";
import { reusableStyles } from "./reusableStyle";

const DescriptionText = ({ text }) => {
  return <Text style={reusableStyles.debscription}>{text}</Text>;
};

export default DescriptionText;
