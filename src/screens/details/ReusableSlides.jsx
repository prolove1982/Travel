import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import AppBar from "../../components/Reusable/AppBar";
import {
  DescriptionText,
  HeightSpacer,
  NetworkImage,
  ReusableBtn,
  ReusableText,
  reusableStyles,
} from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import PopulationList from "../../components/Tiles/Country/PopulationList";
import PlaceDetails from "./PlaceDetails";
import Carousel, { Pagination } from "react-native-snap-carousel";

const ReusableSlides = ({ navigation, route, top, left, right }) => {
  const recommendations = [
    {
      _id: "64c631650298a05640539adc",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Walt Disney World",
      location: "Orlando, FL, USA",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
      rating: 4.7,
      review: "1204 Reviews",
    },
    {
      _id: "64d062a3de20d7c932f1f70a",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Statue of Liberty",
      location: "Liberty Island, New York Harbor",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
      rating: 4.8,
      review: "1452 Reviews",
    },
    {
      _id: "64d09e3f364e1c37c8b4b13c",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Golden Gate Bridge",
      location: "San Francisco, CA, USA",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/7b7b76aa-bbe0-4ca4-b52f-e2b82afa3a77-Golden-Gate-Bridge-San-Francisco.webp",
      rating: 4.6,
      review: "2145 Reviews",
    },
    {
      _id: "64d09f90364e1c37c8b4b140",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Yellowstone National Park",
      location: "Mammoth, WY, USA",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/f3f44363-f250-4002-88a8-19fe79169cc7-geyser-yelowstone-burst_h.webp",
      rating: 4.8,
      review: "24455 Reviews",
    },
    {
      _id: "64d30f789d008909fa8b7ce5",
      country_id: "64d2fd32618522e2fb342eec",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/f3f44363-f250-4002-88a8-19fe79169cc7-geyser-yelowstone-burst_h.webp",
      title: "Yellowstone National Park",
      location: "Mammoth, WY, USA",
      rating: 4.8,
      review: "24455 Reviews",
    },
  ];
  const { item } = route.params;
  console.log(item);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={(item) => item._id}
        data={recommendations}
        renderItem={({ item }) => (
          <View>
            <NetworkImage
              source={item.imageUrl}
              width={"100%"}
              height={350}
              radius={30}
            />
          </View>
        )}
      />
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
  );
};

export default ReusableSlides;
