import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { atom, useRecoilState } from "recoil";
import { globalStyles } from "../styles/globalStyles";

const userNameState = atom({
  key: "userName",
  default: "Aham",
});

export default function DetailScreen() {
  const [userName, setUserName] = useRecoilState(userNameState);

  return (
    <View>
      <Text style={globalStyles.inputText}>Welcome {userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
