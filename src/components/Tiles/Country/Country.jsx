import { TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, TEXT } from "../../../constants/theme";
import { HeightSpacer, NetworkImage, ReusableText } from "../../../components/";
import { useNavigation } from "@react-navigation/native";

const Country = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CountryDetails", { item })}
    >
      <View>
        <NetworkImage
          source={item.imageUrl}
          width={85}
          height={85}
          radius={12}
        />
        <HeightSpacer height={5} />
        <ReusableText
          text={item.country}
          family={"medium"}
          color={COLORS.black}
          size={TEXT.medium}
          align={"center"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Country;
