import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import styles from "./styles";

export default function MenuItem({ menuItem }) {
  return (
    <View style={styles.menuItemContainer}>
      <Text style={styles.menuItemTitle}>{menuItem.name}</Text>
      <View style={styles.menuGroupContainer}>
        <View style={styles.menuGroup}>
          <Text style={styles.menuItemDescription}>{menuItem.description}</Text>
          <Text style={styles.menuItemPrice}>${menuItem.price}</Text>
        </View>
        <Image
          source={{
            uri: `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${menuItem.image}?raw=true`,
          }}
          style={styles.menuItemImage}
        />
      </View>
    </View>
  );
}
