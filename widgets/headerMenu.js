import React from "react";
import { Text, View } from "react-native";
import { atom, useRecoilValue } from "recoil";
import { globalStyles } from "../styles/globalStyles";

const userNameState = atom({
  key: "userName",
  default: "Aham",
});

export default function HeaderMenu() {
  const userName = useRecoilValue(userNameState);

  return (
    <View style={globalStyles.nav}>
      <Text style={globalStyles.navText}>Welcome {userName}</Text>
    </View>
  );
}
