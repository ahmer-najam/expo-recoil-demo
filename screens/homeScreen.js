import React from "react";
import { Button, TextInput, Text, View } from "react-native";
import { atom, useRecoilState } from "recoil";
import { globalStyles } from "../styles/globalStyles";
import Footer from "../widgets/footer";

const userNameState = atom({
  key: "userName",
  default: "Aham",
});
export default function HomeScreen({ navigation }) {
  const [userName, setUserName] = useRecoilState(userNameState);

  return (
    <View style={globalStyles.body}>
      <h1>Profile</h1>
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
          navigation.navigate("Detail");
        }}
      />
      <Footer />
    </View>
  );
}
