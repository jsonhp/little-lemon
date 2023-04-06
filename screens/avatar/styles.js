import { StyleSheet } from "react-native";
import commonStyles from "../../styles";

const styles = StyleSheet.create({
  avatarImage: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  avatarTextContainer: {
    height: 35,
    width: 35,
    backgroundColor: commonStyles.primaryColor,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    ...commonStyles.lead,
    color: "white",
  },
});

export default styles;
