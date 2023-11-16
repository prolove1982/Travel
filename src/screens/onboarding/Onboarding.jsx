import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Slides from "../../components/Onboard/Slides";
import { SIZES } from "../../constants/theme";
import { styles } from "./stlyes";

const Onboarding = () => {
  const [activeSlide, setActiveSlide] = useState(0);

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

  const handleSnapToItem = useCallback(
    (index) => {
      setActiveSlide(index);
    },
    [setActiveSlide]
  );

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        pagingEnabled
        data={slides}
        renderItem={({ item }) => <Slides item={item} />}
        sliderWidth={SIZES.width}
        sliderHeight={SIZES.height}
        itemWidth={SIZES.width}
        loop
        onSnapToItem={handleSnapToItem}
      />
      <Pagination
        dotsLength={slides.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
