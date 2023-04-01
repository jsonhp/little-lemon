import { StyleSheet } from "react-native";
import commonStyles from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    backgroundColor: commonStyles.quaternaryColor,
    padding: 16,
    width: "100%",
  },
  formContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  form: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  formTitle: {
    ...commonStyles.title,
    textAlign: "center",
    color: commonStyles.primaryColor,
  },
  formControlContainer: {
    width: "100%",
    alignItems: "center",
    gap: 8,
  },
  formControlLabel: {
    color: commonStyles.primaryColor,
    ...commonStyles.lead,
  },
  formControl: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    borderColor: commonStyles.primaryColor,
    padding: 8,
    ...commonStyles.cardParagraph,
  },
  footer: {
    padding: 24,
    alignSelf: "flex-end",
  },
});

export default styles;
