import { ScrollView, TouchableOpacity, View } from "react-native";
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

const CountryDetails = ({ navigation, route, top, left, right }) => {
  const country = {
    _id: "64c62bfc65af9f8c969a8d04",
    country: "USA",
    description:
      "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/1bcdbbd0-d702-475d-92ea-d9171c041674-vinci_01_places_new_york.jpg",
    popular: [
      {
        _id: "64c631650298a05640539adc",
        title: "Walt Disney World",
        imageUrl:
          "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
        rating: 4.7,
        review: "1204 Reviews",
        location: "Orlando, USA",
      },
      {
        _id: "64d062a3de20d7c932f1f70a",
        title: "Statue of Liberty",
        imageUrl:
          "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
        rating: 4.8,
        review: "1452 Reviews",
        location: "Liberty Island, New York Harbor",
      },
    ],
    region: "North America, USA",
  };
  const { item } = route.params;
  return (
    <ScrollView>
      <View>
        <NetworkImage
          source={item.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
        />
        <AppBar
          title={item.country}
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

      <View style={{ marginHorizontal: 20 }}>
        <HeightSpacer height={20} />
        <ReusableText
          text={item.region}
          family={"medium"}
          color={COLORS.black}
          size={TEXT.large}
        />
        <DescriptionText text={item.description} />
        <View style={{ alignContent: "center", marginTop: 20 }}>
          <View style={[reusableStyles.spaceRow("space-between")]}>
            <ReusableText
              text={"Popular Destinations"}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />
            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>
          <HeightSpacer height={20} />
          <PopulationList data={country.popular} />

          <ReusableBtn
            btnText={"Find Best Hotels"}
            textColor={COLORS.white}
            width={SIZES.width - 40}
            bgColor={COLORS.green}
            bdColor={COLORS.green}
            bdWidth={0}
            onPress={() => navigation.navigate("HotelSearch")}
          />
          <HeightSpacer height={50} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CountryDetails;
