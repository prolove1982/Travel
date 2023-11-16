import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

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
});
