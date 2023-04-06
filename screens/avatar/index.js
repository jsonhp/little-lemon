import { View, Text, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Avatar() {
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    image: "",
  });
  const navigation = useNavigation();

  const getData = async () => {
    try {
      const data = await AsyncStorage.multiGet([
        "firstName",
        "lastname",
        "image",
      ]);
      data.forEach(([key, value]) => {
        value && setProfile((prev) => ({ ...prev, [key]: value }));
      });
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [isFocused]);

  return (
    <Pressable onPress={() => navigation.navigate("Profile")}>
      {profile.image ? (
        <Image source={{ uri: profile.image }} style={styles.avatarImage} />
      ) : (
        <View style={styles.avatarTextContainer}>
          <Text style={styles.avatarText}>
            {profile.firstName.charAt(0).concat(profile.lastName.charAt(0))}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
