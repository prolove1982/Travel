import { TouchableOpacity, View } from "react-native";
import React from "react";
import { reusableStyles } from "./reusableStyle";
import {
  HeightSpacer,
  NetworkImage,
  Rating,
  ReusableText,
  WidthSpacer,
} from "../index";
import { COLORS, SIZES } from "../../constants/theme";

const ReusableTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={reusableStyles.titleContainer} onPress={onPress}>
      <View style={[reusableStyles.spaceRow("flex-start"), { padding: 10 }]}>
        <NetworkImage
          source={item.imageUrl}
          width={80}
          height={80}
          radius={12}
        />
        <WidthSpacer width={15} />
        <View>
          <ReusableText
            text={item.title}
            family={"medium"}
            color={COLORS.black}
            size={SIZES.medium}
          />
          <HeightSpacer height={8} />
          <ReusableText
            text={item.location}
            family={"medium"}
            color={COLORS.gray}
            size={14}
          />
          <HeightSpacer height={8} />
          <View style={reusableStyles.spaceRow("flex-start")}>
            <Rating rating={item.rating} />
            <WidthSpacer width={5} />
            <ReusableText
              text={` (${item.review}) `}
              family={"medium"}
              color={COLORS.gray}
              size={14}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReusableTile;
