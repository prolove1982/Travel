import { FlatList, View } from "react-native";
import React from "react";
import ReusableTile from "../../Reusable/ReusableTile";
import { useNavigation } from "@react-navigation/native";

const PopulationList = ({ data }) => {
  const navigation = useNavigation();
  return (
    <FlatList
      scrollEnabled={false}
      keyExtractor={(item) => item._id}
      data={data}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 10 }}>
          <ReusableTile
            item={item}
            onPress={() => navigation.navigate("PlaceDetails", item._id)}
          />
        </View>
      )}
    />
  );
};

export default PopulationList;
