import { FlatList, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Slides from "../../components/Onboard/Slides";

const Onboarding = () => {
  const slides = [
    {
      id: 1,
      image: require("../../../assets/images/1.png"),
      title: "The Perfect Place",
    },
    {
      id: 2,
      image: require("../../../assets/images/2.png"),
      title: "Discover The World",
    },
    {
      id: 3,
      image: require("../../../assets/images/3.png"),
      title: "Best Hotel",
    },
  ];

  return (
    <SafeAreaView>
      <FlatList
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={slides}
        renderItem={({ item }) => <Slides item={item} />}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
