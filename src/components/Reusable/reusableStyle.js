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
    borderRadius: 16,
    backgroundColor: COLORS.lightWhite,
    marginRight: 10,
  },
  imageContainer: {
    marginTop: 10,
    height: 150,
    alignItems: "center",
  },
  textContainer: {
    padding: 10,
  },
  overlay: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  box: {
    width: 30,
    height: 30,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.blue,
  },
  box2: {
    width: 30,
    height: 30,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.green,
  },
});
