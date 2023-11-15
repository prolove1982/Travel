import { StyleSheet } from "react-native";

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
});
