import React from "react";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Footer from "./widgets/footer";
import HeaderMenu from "./widgets/headerMenu";
import Body from "./widgets/body";
import HomeScreen from "./screens/homeScreen";
import DetailScreen from "./screens/detailScreen";

export default function App() {
  return (
    <RecoilRoot>
      {/* <HeaderMenu />
      <Body />
      <Footer /> */}

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
