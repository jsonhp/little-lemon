import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import styles from "./styles";
import * as SQLite from "expo-sqlite";
import MenuItem from "./menuItem";

export default function Menu({ filtersSelected, textQuery }) {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const db = SQLite.openDatabase("db.little_lemon");

  const getData = () => {
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json"
    )
      .then((response) => response.json())
      .then((responseMapped) => {
        db.transaction((tx) => {
          tx.executeSql(
            `INSERT INTO menu_items (name, price, description, image, category) VALUES ${responseMapped.menu.map(
              (menuItem) =>
                `(${Object.values(menuItem)
                  .map((v) => `"${v}"`)
                  .join()})`
            )};`
          );
          setMenuItems(responseMapped.menu);
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS menu_items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price TEXT, description TEXT, image TEXT, category TEXT);"
      );
    });
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM menu_items;",
        null,
        (txObj, { rows: { _array } }) => {
          _array.length > 0 ? setMenuItems(_array) : getData();
          setLoading(false);
        }
      );
    });
  }, [isFocused]);

  renderSeparator = () => <View style={styles.separator} />;

  useEffect(() => {
    db.transaction((tx) => {
      const query = `SELECT * FROM menu_items WHERE name LIKE '%${textQuery}%' ${
        filtersSelected.length > 0
          ? `AND category IN (${filtersSelected.map((f) => `"${f}"`).join()})`
          : ""
      };`;
      tx.executeSql(query, null, (txObj, { rows: { _array } }) => {
        setMenuItems(_array);
        setLoading(false);
      });
    });
  }, [filtersSelected, textQuery]);

  return loading ? (
    <Text>Loading</Text>
  ) : (
    <View style={styles.container}>
      {menuItems.length > 0 ? (
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={renderSeparator}
          renderItem={({ item }) => <MenuItem menuItem={item} />}
        />
      ) : (
        <Text>No items</Text>
      )}
    </View>
  );
}
