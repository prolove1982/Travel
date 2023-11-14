import { Image, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { ReusableText, ReusableBtn, HeightSpacer } from "../index";
import { SIZES, COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Slides = ({ item }) => {
  const navigation = useNavigation();
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
        <HeightSpacer height={40} />
        <ReusableBtn
          onPress={() => {}}
          btnText={"Get Started"}
          textColor={COLORS.white}
          width={(SIZES.width - 50) / 2.2}
          bgColor={COLORS.red}
          bdColor={COLORS.red}
          bdWidth={0}
        />
      </View>
    </View>
  );
};

export default Slides;
