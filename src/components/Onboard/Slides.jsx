import { Image, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { ReusableText } from "../index";
import { SIZES, COLORS } from "../../constants/theme";

const Slides = ({ item }) => {
  return (
    <View>
      <Image source={item.image} style={styles.image} />
      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          family={"medium"}
          color={COLORS.white}
          size={SIZES.xxLarge}
        />
      </View>
    </View>
  );
};

export default Slides;
