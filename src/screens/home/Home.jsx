import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import { ReusableText, reusableStyles } from "../../components";
import { AntDesign } from "@expo/vector-icons";
import { TEXT, COLORS } from "../../constants/theme";
import { styles } from "./styles";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      forceInset={{ top: "always" }}
      style={reusableStyles.container}
    >
      <View>
        <View style={reusableStyles.spaceRow("space-between")}>
          <ReusableText
            text={"Hey User"}
            family={"regular"}
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
      </View>
    </SafeAreaView>
  );
};

export default Home;
