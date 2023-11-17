import { TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES, TEXT } from "../../../constants/theme";
import {
  HeightSpacer,
  NetworkImage,
  Rating,
  ReusableText,
  reusableStyles,
} from "../../../components/";

const HotelCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={reusableStyles.hotelContainer} onPress={onPress}>
      <View style={reusableStyles.imageContainer}>
        <NetworkImage
          source={item.imageUrl}
          width={"90%"}
          height={"100%"}
          radius={16}
        />
        <HeightSpacer height={5} />
        <ReusableText
          text={item.title}
          family={"medium"}
          color={COLORS.black}
          size={SIZES.medium}
        />
        <ReusableText
          text={item.location}
          family={"medium"}
          color={COLORS.gray}
          size={TEXT.small}
        />
        <HeightSpacer height={5} />
        <Rating rating={item.rating} />
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;
