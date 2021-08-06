import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  navigation,
} from "@react-navigation/native-stack";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { globalStyles } from "../styles/globalStyles";

const userNameState = atom({
  key: "userName",
  default: "Aham",
});

export default function Body({ navigation }) {
  const [userName, setUserName] = useRecoilState(userNameState);

  return (
    <View style={globalStyles.body}>
      <h1 style={globalStyles.inputText}>Profile</h1>
      <Text>Person Details: {userName}</Text>
      <TextInput
        style={globalStyles.inputText}
        autoFocus={true}
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <Button
        title="GO DETAILS"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}
