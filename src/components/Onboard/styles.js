import { StyleSheet } from "react-native";
import { SIZES } from "../../constants/theme";

export const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    width: SIZES.width,
    height: SIZES.height,
  },
  stack: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
});
