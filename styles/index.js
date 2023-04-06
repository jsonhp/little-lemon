import { StyleSheet } from "react-native";

const fonts = () => ({
  markazit: "MarkaziText-Regular",
  karla: "Karla-Regular",
});

const commonStyles = StyleSheet.create({
  primaryColor: "#495E57",
  primaryAccentColor: "#c2d0cb",
  secondaryColor: "#F4CE14",
  tertiaryColor: "#EE9972",
  quaternaryColor: "#FBDABB",
  defaultColor: "#333333",
  disabledColor: "#CCCCCC",
  title: {
    fontFamily: fonts().markazit,
    fontSize: 64,
    fontWeight: 500,
  },
  subtitle: {
    fontFamily: fonts().markazit,
    fontSize: 40,
  },
  lead: {
    fontFamily: fonts().karla,
    fontSize: 18,
    fontWeight: 500,
  },
  sectionTitle: {
    fontFamily: fonts().karla,
    fontSize: 20,
    fontWeight: 800,
  },
  sectionCategory: { fontFamily: fonts().karla, fontSize: 16, fontWeight: 800 },
  cardTitle: {
    fontFamily: fonts().karla,
    fontSize: 18,
    fontWeight: 700,
  },
  cardParagraph: {
    fontFamily: fonts().karla,
    fontSize: 16,
  },
});

export default commonStyles;
