import { TouchableOpacity, View } from "react-native";
import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import { HeightSpacer, ReusableText, reusableStyles } from "../../components/";
import { AntDesign } from "@expo/vector-icons";
import { TEXT, COLORS, SIZES } from "../../constants/theme";
import { styles } from "./styles";
import Places from "../../components/Home/Places";
import Recommendations from "../../components/Home/Recommendations";
import BestHotels from "../../components/Home/BestHotels";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      forceInset={{ top: "always" }}
      style={reusableStyles.container}
    >
      <View>
        <View style={reusableStyles.spaceRow("space-between")}>
          <ReusableText
            text={"Hey User!"}
            family={"medium"}
            color={COLORS.black}
            size={TEXT.large}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            style={styles.box}
          >
            <AntDesign name="search1" size={26} color="black" />
          </TouchableOpacity>
        </View>
        <HeightSpacer height={SIZES.xLarge} />
        <View>
          <ReusableText
            text={"Places"}
            family={"regular"}
            color={COLORS.black}
            size={TEXT.large}
          />
          <HeightSpacer height={20} />
          <Places />
          <Recommendations />
          <BestHotels />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
