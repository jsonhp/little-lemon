import React, { useEffect, useState } from "react";
import { View, Image, TextInput, Text } from "react-native";
import logo from "../../assets/Logo.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import Button from "../../components/button";

export default function Onboarding({ setIsOnboardingCompleted }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [enableButton, setEnableButton] = useState(false);

  useEffect(() => {
    if (firstName !== "" && isEmailValid(email)) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }, [firstName, email]);

  const isEmailValid = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(email);

  const onHandleSubmit = async () => {
    await AsyncStorage.multiSet([
      ["isLoggedIn", "true"],
      ["firstName", firstName],
      ["email", email],
    ]);
    setIsOnboardingCompleted(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} resizeMode="contain" />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Welcome to Little Lemon</Text>
        <View style={styles.form}>
          <View style={styles.formControlContainer}>
            <Text style={styles.formControlLabel}>First Name</Text>
            <TextInput
              textContentType="givenName"
              style={styles.formControl}
              value={firstName}
              onChangeText={(text) => setFirstName(text.replace(/[^A-z]/g, ""))}
            />
          </View>
          <View style={styles.formControlContainer}>
            <Text style={styles.formControlLabel}>Email</Text>
            <TextInput
              textContentType="emailAddress"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.formControl}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          title="Next"
          disabled={!enableButton}
          callback={onHandleSubmit}
          primary
        />
      </View>
    </View>
  );
}
