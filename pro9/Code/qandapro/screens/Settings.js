import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

const Settings = () => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: colors.text }}>Setting Screen</Text>
    </View>
  );
};

export default Settings;
