import { StyleSheet } from "react-native";
import commonStyles from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: commonStyles.primaryColor,
    padding: 16,
  },
  searchTitle: {
    ...commonStyles.title,
    color: commonStyles.secondaryColor,
  },
  searchSubtitle: {
    ...commonStyles.subtitle,
    color: "white",
  },
  searchContainerHero: {
    flexDirection: "row",
    gap: 16,
  },
  searchParagraph: {
    ...commonStyles.lead,
    color: "white",
  },
  searchImage: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  searchInputContainer: {
    marginTop: 16,
    backgroundColor: "white",
    flexDirection: "row",
    padding: 8,
    borderRadius: 8,
  },
  searchInput: {
    backgroundColor: "white",
    marginLeft: 8,
    flex: 1,
  },
  filterContainer: {
    padding: 16,
    gap: 16,
  },
  filterContainerTitle: {
    ...commonStyles.sectionTitle,
  },
  filtersGroup: {
    gap: 8,
  },
  filterItem: {
    backgroundColor: commonStyles.primaryAccentColor,
    borderWidth: 0,
    width: 90,
  },
  filterItemLabel: {
    ...commonStyles.sectionTitle,
    color: commonStyles.primaryColor,
  },
});

export default styles;
