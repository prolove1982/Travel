import { TouchableOpacity, View } from "react-native";
import React from "react";
import { reusableStyles } from "./reusableStyle";
import { AntDesign } from "@expo/vector-icons";
import ReusableText from "./ReusableText";
import { COLORS, TEXT } from "../../constants/theme";

const AppBar = ({ title }) => {
  return (
    <View style={reusableStyles.overlay}>
      <View style={reusableStyles.spaceRow("center")}>
        <TouchableOpacity style={reusableStyles.box}>
          <AntDesign name="left" size={26} color="black" />
        </TouchableOpacity>
        <ReusableText
          text={title}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />
        <TouchableOpacity style={reusableStyles.box2}>
          <AntDesign name="search1" size={26} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;
