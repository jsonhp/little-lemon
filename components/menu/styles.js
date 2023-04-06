import { StyleSheet } from "react-native";
import commonStyles from "../../styles";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: commonStyles.disabledColor,
    marginVertical: 16,
  },
  menuItemContainer: {
    gap: 8,
  },
  menuGroupContainer: {
    flexDirection: "row",
  },
  menuGroup: {
    flex: 1,
    justifyContent: "space-between",
  },
  menuItemTitle: {
    ...commonStyles.cardTitle,
  },
  menuItemDescription: {
    ...commonStyles.cardParagraph,
    color: commonStyles.primaryColor,
  },
  menuItemPrice: {
    ...commonStyles.lead,
    color: commonStyles.primaryColor,
  },
  menuItemImage: {
    width: 100,
    height: 100,
  },
});

export default styles;
