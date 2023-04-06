import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import heroImage from "../../assets/Hero_image.png";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../components/button";
import Menu from "../../components/menu";

export default function Home() {
  const [textQuery, setTextQuery] = useState("");
  const [filtersSelected, setFiltersSelected] = useState([]);
  const filters = [
    { value: "starters", label: "Starters" },
    { value: "mains", label: "Mains" },
    { value: "desserts", label: "Desserts" },
    { value: "drinks", label: "Drinks" },
  ];

  const renderFilters = () =>
    filters.map((filter, index) => {
      const isFilterSelected = filtersSelected.includes(filter.value);
      return (
        <Button
          key={index}
          title={filter.label}
          defaultButton
          styles={{
            container: {
              ...styles.filterItem,
              borderWidth: isFilterSelected ? 2 : 0,
            },
            label: styles.filterItemLabel,
          }}
          callback={() =>
            setFiltersSelected((prev) =>
              isFilterSelected
                ? prev.filter((f) => f !== filter.value)
                : [...prev, filter.value]
            )
          }
        />
      );
    });

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchTitle}>Little Lemon</Text>
        <View style={styles.searchContainerHero}>
          <View style={{ flex: 1 }}>
            <Text style={styles.searchSubtitle}>Los Angeles</Text>
            <Text style={styles.searchParagraph}>
              We are a Colombian restaurant, focused on traditional and modern
              recipes to make your visit special and memorable.
            </Text>
          </View>
          <Image source={heroImage} style={styles.searchImage} />
        </View>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={24} />
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => setTextQuery(text)}
          />
        </View>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterContainerTitle}>ORDER FOR DELIVERY!</Text>
        <ScrollView horizontal contentContainerStyle={styles.filtersGroup}>
          {renderFilters()}
        </ScrollView>
      </View>
      <Menu filtersSelected={filtersSelected} textQuery={textQuery} />
    </View>
  );
}
