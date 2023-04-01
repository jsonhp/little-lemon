import { StyleSheet } from "react-native";
import commonStyles from "../../styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    gap: 16,
  },
  containerTitle: {
    ...commonStyles.sectionTitle,
  },
  avatarContainer: {
    flexDirection: "column",
    gap: 16,
  },
  avatarContainerText: {
    ...commonStyles.lead,
  },
  avatar: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  avatarImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  avatarTextContainer: {
    height: 80,
    width: 80,
    backgroundColor: commonStyles.primaryColor,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    ...commonStyles.lead,
    color: "white",
    fontSize: 40,
  },
  dataContainer: {
    gap: 24,
  },
  dataInputControlLabel: {
    ...commonStyles.lead,
  },
  dataInputControl: {
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    borderColor: commonStyles.primaryColor,
    padding: 8,
    ...commonStyles.cardParagraph,
  },
  dataEmailContainer: {},
  dataEmailInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
