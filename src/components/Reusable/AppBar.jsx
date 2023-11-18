import { TouchableOpacity, View } from "react-native";
import React from "react";
import { reusableStyles } from "./reusableStyle";
import { AntDesign } from "@expo/vector-icons";
import ReusableText from "./ReusableText";
import { COLORS, TEXT } from "../../constants/theme";

const AppBar = ({
  title,
  color,
  color2,
  icon,
  onPress,
  onPress2,
  top,
  left,
  right,
}) => {
  return (
    <View style={reusableStyles.overlay(top, left, right)}>
      <View style={reusableStyles.spaceRow("space-between")}>
        <TouchableOpacity style={reusableStyles.box(color)} onPress={onPress}>
          <AntDesign name="left" size={26} />
        </TouchableOpacity>
        <ReusableText
          text={title}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />
        <TouchableOpacity
          style={reusableStyles.box2(color2)}
          onPress={onPress2}
        >
          <AntDesign name={icon} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;
