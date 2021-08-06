import React from "react";
import { Text, View } from "react-native";
import { selector, atom, useRecoilValue } from "recoil";

import { globalStyles } from "../styles/globalStyles";
const userNameState = atom({
  key: "userName",
});

const countState = selector({
  key: "count",
  get: ({ get }) => {
    const userName = get(userNameState);
    return userName.length;
  },
});

export default function Footer() {
  const count = useRecoilValue(countState);

  return (
    <View style={globalStyles.nav}>
      <Text style={globalStyles.navText}>Name Length {count}</Text>
    </View>
  );
}
