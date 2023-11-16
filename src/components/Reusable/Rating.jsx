import { View } from "react-native";
import React from "react";
import { reusableStyles } from "./reusableStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";

const Rating = ({ rating }) => {
  return (
    <View style={reusableStyles.spaceRow("flex-start")}>
      <MaterialCommunityIcons name="star" size={20} color="#FD9942" />
      <WidthSpacer width={5} />
      <ReusableText
        text={rating}
        family={"medium"}
        color={"#FD9942"}
        size={15}
      />
    </View>
  );
};

export default Rating;
