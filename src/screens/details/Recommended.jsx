import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import AppBar from "../../components/Reusable/AppBar";

const Recommended = () => {
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 0 }}>
        <AppBar title={"Recommendations"} />
      </View>
    </SafeAreaView>
  );
};

export default Recommended;
