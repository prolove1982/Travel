import { StyleSheet } from "react-native";
import { COLORS, SIZES, TEXT } from "../../constants/theme";

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
  overlay: (top, left, right) => ({
    position: "absolute",
    top: top,
    left: left,
    right: right,
    justifyContent: "center",
  }),
  box: (color) => ({
    width: 30,
    height: 30,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color,
  }),
  box2: (color2) => ({
    width: 30,
    height: 30,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color2,
  }),
  debscription: {
    paddingVertical: 10,
    fontFamily: "regular",
    textAlign: "justify",
    fontSize: TEXT.medium,
  },
});
