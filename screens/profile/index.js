import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Switch, ScrollView } from "react-native";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Error from "../error";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { useIsFocused } from "@react-navigation/native";
import Button from "../../components/button";

export default function Profile({ navigation, setIsOnboardingCompleted }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    image: "",
    orderNotifications: false,
    passwordNotifications: false,
    offersNotifications: false,
    newsletterNotifications: false,
  });
  const isFocused = useIsFocused();

  const getData = async () => {
    try {
      const data = await AsyncStorage.multiGet(["firstName", "email"]);
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

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <Text>Retrieving data....</Text>;
  }

  const onHandleImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfile((prev) => ({ ...prev, image: result.assets[0].uri }));
    }
  };

  const onHandleValue = (key, text) => {
    setProfile((prev) => ({
      ...prev,
      [key]: key.includes("Notifications") ? !prev[key] : text,
    }));
  };

  const onHandleSave = async () => {
    try {
      setIsLoading(true);
      await AsyncStorage.multiSet(
        Object.entries(profile).map(([key, value]) => [key, value.toString()])
      );
      setError(false);
    } catch (error) {
      alert(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const onHandleLogout = async () => {
    try {
      await AsyncStorage.clear();
      setIsOnboardingCompleted(false);
      navigation.navigate("OnBoarding");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.containerTitle}>Personal Information</Text>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarContainerText}>Avatar</Text>
        <View style={styles.avatar}>
          {profile.image ? (
            <Image style={styles.avatarImage} source={{ uri: profile.image }} />
          ) : (
            <View style={styles.avatarTextContainer}>
              <Text style={styles.avatarText}>
                {profile.firstName.charAt(0).concat(profile.lastName.charAt(0))}
              </Text>
            </View>
          )}
          <Button title="Change" callback={onHandleImage} primary />
          <Button
            title="Remove"
            callback={() => onHandleValue("image", "")}
            defaultButton
          />
        </View>
      </View>
      <View style={styles.dataContainer}>
        <View>
          <Text style={styles.dataInputControlLabel}>First Name</Text>
          <TextInput
            style={styles.dataInputControl}
            value={profile.firstName}
            onChangeText={(text) => onHandleValue("firstName", text)}
            textContentType="givenName"
          />
        </View>
        <View>
          <Text style={styles.dataInputControlLabel}>Last Name</Text>
          <TextInput
            style={styles.dataInputControl}
            value={profile.lastName}
            onChangeText={(text) => onHandleValue("lastName", text)}
            textContentType="familyName"
          />
        </View>
        <View>
          <Text style={styles.dataInputControlLabel}>Email</Text>
          <TextInput
            style={styles.dataInputControl}
            value={profile.email}
            onChangeText={(text) => onHandleValue("email", text)}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
        </View>
        <View>
          <Text style={styles.dataInputControlLabel}>Phone Number</Text>
          <TextInput
            style={styles.dataInputControl}
            value={profile.phoneNumber}
            onChangeText={(text) => onHandleValue("phoneNumber", text)}
            textContentType="telephoneNumber"
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <View style={styles.dataEmailContainer}>
        <Text>Email notifications</Text>
        <View style={styles.dataEmailInputContainer}>
          <Switch
            value={profile.orderNotifications}
            onChange={() => onHandleValue("orderNotifications")}
          />
          <Text>Order statuses</Text>
        </View>
        <View style={styles.dataEmailInputContainer}>
          <Switch
            value={profile.passwordNotifications}
            onChange={() => onHandleValue("passwordNotifications")}
          />
          <Text>Password changes</Text>
        </View>
        <View style={styles.dataEmailInputContainer}>
          <Switch
            value={profile.offersNotifications}
            onChange={() => onHandleValue("offersNotifications")}
          />
          <Text>Special offers</Text>
        </View>
        <View style={styles.dataEmailInputContainer}>
          <Switch
            value={profile.newsletterNotifications}
            onChange={() => onHandleValue("newsletterNotifications")}
          />
          <Text>Newsletter</Text>
        </View>
      </View>
      <Button title="Save changes" callback={onHandleSave} primary full />
      <Button title="Log out" callback={onHandleLogout} full />
    </ScrollView>
  );
}
