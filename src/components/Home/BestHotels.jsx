import { FlatList, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { reusableStyles } from "../Reusable/reusableStyle";
import ReusableText from "../Reusable/ReusableText";
import HeightSpacer from "../Reusable/HeightSpacer";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HotelCard from "../Tiles/Hotels/HotelCard";

const BestHotels = () => {
  const navigation = useNavigation();

  const hotels = [
    {
      _id: "64c674d23cfa5e847bcd5430",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Seaside Resort",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
      rating: 4.9,
      review: "1204 Reviews",
      location: "Miami Beach, FL",
    },
    {
      _id: "64c675793cfa5e847bcd5436",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Urban Chic Boutique ",
      imageUrl:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/27448235.jpg?k=e07992b161adbfb4f35b686486365d3126a89536572f2bba96a8607644f42e57&o=&hp=1",
      rating: 4.8,
      review: "2312 Reviews",
      location: "San Francisco, CA",
    },
    {
      _id: "64c675183cfa5e847bcd5433",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Mountain Lodge",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
      rating: 4.5,
      review: "12024 Reviews",
      location: "Aspen, CO",
    },
    {
      _id: "64d0b5a4d3cb4985a76ac1aa",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Hotel Alpha",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/28266df3-1578-4d0d-8015-c5480f64a73d-hotel-alpha.jpeg",
      rating: 4.7,
      review: "1204 Reviews",
      location: "City Center, USA",
    },
    {
      _id: "64c675be3cfa5e847bcd5439",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Family-Friendly Resort",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/3e6222dc-6b79-4031-914b-60c220782b72-ff.jpeg",
      rating: 4.6,
      review: "12854 Reviews",
      location: "Orlando, FL",
    },
    {
      _id: "64c67442776ed29f19727fd7",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Luxury Hotel 1",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp",
      rating: 4.7,
      review: "1204 Reviews",
      location: "New York City, NY",
    },
  ];
  return (
    <View style={reusableStyles.RecContainer}>
      <View style={[reusableStyles.spaceRow("space-between")]}>
        <ReusableText
          text={"Nearby Hotels"}
          family={"medium"}
          size={SIZES.large}
          color={COLORS.black}
        />
        <TouchableOpacity onPress={() => navigation.navigate("HotelList")}>
          <Feather name="list" size={20} />
        </TouchableOpacity>
      </View>
      <HeightSpacer height={30} />
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          keyExtractor={(item) => item._id}
          data={hotels}
          renderItem={({ item }) => (
            <HotelCard
              item={item}
              onPress={() => navigation.navigate("HotelDetails", { item })}
            />
          )}
        />
      </View>
    </View>
  );
};

export default BestHotels;
