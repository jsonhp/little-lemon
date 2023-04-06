import { Image } from "react-native";
import React from "react";
import logo from "../assets/Logo.png";

export default function Header() {
  return (
    <Image
      source={logo}
      style={{ width: 250, height: 40 }}
      resizeMode="contain"
      resizeMethod="scale"
    />
  );
}
