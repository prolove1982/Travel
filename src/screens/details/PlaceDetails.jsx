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

const PlaceDetails = ({ navigation, route, top, left, right }) => {
  const place = {
    _id: "64d062a3de20d7c932f1f70a",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Statue of Liberty",
    description:
      "The Statue of Liberty is an iconic symbol of freedom and democracy, located on Liberty Island in New York Harbor. This colossal statue was a gift from France to the United States and was dedicated in 1886. Standing at 305 feet tall, the statue represents Libertas, the Roman goddess of liberty, holding a torch and a tablet inscribed with the date of the American Declaration of Independence. The Statue of Liberty has welcomed countless immigrants to the USA, serving as a symbol of hope and opportunity.",
    contact_id: "64c5d95adc7efae2a45ec376",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
    rating: 4.8,
    review: "1452 Reviews",
    latitude: 40.689247,
    longitude: -74.044502,
    location: "Liberty Island, New York Harbor",
    popular: [
      {
        _id: "64c675be3cfa5e847bcd5439",
        title: "Family-Friendly Resort",
        imageUrl:
          "https://d326fntlu7tb1e.cloudfront.net/uploads/3e6222dc-6b79-4031-914b-60c220782b72-ff.jpeg",
        rating: 4.6,
        review: "12854 Reviews",
        location: "Orlando, FL",
      },
      {
        _id: "64c675793cfa5e847bcd5436",
        title: "Urban Chic Boutique Hotel",
        imageUrl:
          "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
        rating: 4.8,
        review: "2312 Reviews",
        location: "San Francisco, CA",
      },
    ],
  };

  const { item } = route.params;
  console.log(item);

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

      <View style={{ marginHorizontal: 20 }}>
        <HeightSpacer height={20} />
        <ReusableText
          text={item.title}
          family={"medium"}
          color={COLORS.black}
          size={TEXT.large}
        />
        <DescriptionText text={place.description} />
        <View style={{ alignContent: "center", marginTop: 20 }}>
          <View style={[reusableStyles.spaceRow("space-between")]}>
            <ReusableText
              text={"Popular Places"}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />
            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>
          <HeightSpacer height={20} />
          <PopulationList data={place.popular} />

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

export default PlaceDetails;
