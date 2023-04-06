import React from "react";
import { Dimensions, Pressable, Text } from "react-native";
import commonStyles from "../styles";

export default function Button({
  callback,
  title,
  disabled,
  primary,
  defaultButton,
  full,
  styles,
}) {
  const getBackgroundColor = () => {
    if (disabled) {
      return commonStyles.disabledColor;
    }
    if (defaultButton) {
      return;
    }
    return primary ? commonStyles.primaryColor : commonStyles.secondaryColor;
  };

  return (
    <Pressable
      onPress={callback}
      disabled={disabled}
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        width: full ? Dimensions.get("window").width - 32 : 100,
        borderRadius: 20,
        backgroundColor: getBackgroundColor(),
        borderWidth: defaultButton ? 1 : 0,
        ...styles?.container,
      }}
    >
      <Text
        style={{
          ...commonStyles.lead,
          color: defaultButton ? commonStyles.defaultColor : "white",
          ...styles?.label,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
