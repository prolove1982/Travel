import { ScrollView, Text, View } from "react-native";
import React from "react";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import {
  HeightSpacer,
  NetworkImage,
  ReusableText,
  reusableStyles,
} from "../../components";
import { Rating } from "react-native-stock-star-rating";

const HotelDetails = ({ navigation, route }) => {
  const hotel = {
    availability: {
      start: "2023-08-20T00:00:00.000Z",
      end: "2023-08-25T00:00:00.000Z",
    },
    _id: "64c675793cfa5e847bcd5436",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Urban Chic Boutique Hotel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    contact: "64c5d95adc7efae2a45ec376",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
    rating: 4.8,
    review: "2312 Reviews",
    location: "San Francisco, CA",
    latitude: 37.7749,
    longitude: -122.4194,
    price: 400,
    facilities: [
      {
        wifi: true,
        _id: "64c675793cfa5e847bcd5437",
      },
    ],
    __v: 0,
  };
  const { item } = route.params;
  console.log(item);
  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          title={item.title}
          icon={"search1"}
          color={COLORS.white}
          color2={COLORS.white}
          top={40}
          left={20}
          right={20}
          onPress={() => navigation.goBack()}
          onPress2={() => navigation.navigate("Search")}
        />
      </View>
      <View style={reusableStyles.hotelDetailsContainer}>
        <NetworkImage
          source={item.imageUrl}
          width={"100%"}
          height={220}
          radius={25}
        />
        <View style={reusableStyles.hotelTitleContainer}>
          <View style={reusableStyles.hotelCard}>
            <ReusableText
              text={item.title}
              family={"medium"}
              color={COLORS.black}
              size={SIZES.xLarge}
            />
            <HeightSpacer height={10} />
            <ReusableText
              text={item.location}
              family={"medium"}
              color={COLORS.black}
              size={TEXT.small}
            />
            <View
              style={[
                reusableStyles.spaceRow("space-between"),
                { marginTop: 15 },
              ]}
            >
              <Rating stars={item.rating} maxStars={5} color={"#FD9942"} />
              <ReusableText
                text={`(${item.review})`}
                family={"medium"}
                color={COLORS.gray}
                size={SIZES.small}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HotelDetails;
