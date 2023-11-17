import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

export const reusableStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  spaceRow: (justifyContent) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: justifyContent,
  }),
  RecContainer: {
    paddingTop: 30,
  },
  titleContainer: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
  hotelContainer: {
    width: SIZES.width / 2.2,
    height: 250,
    borderRadius: 12,
    backgroundColor: COLORS.lightWhite,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
    height: 150,
  },
});
