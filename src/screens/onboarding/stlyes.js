import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dotStyle: {
    width: SIZES.xSmall,
    height: SIZES.xSmall,
    borderRadius: SIZES.xxSmall,
    backgroundColor: COLORS.blue,
    marginHorizontal: 8,
  },
  inactiveDotStyle: {
    backgroundColor: COLORS.lightGrey,
  },
  paginationContainer: {
    marginTop: -20,
  },
});
