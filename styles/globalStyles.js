import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  body: {
    flex: 1,
    margin: 5,
  },
  nav: {
    height: 25,
    borderBottomColor: "#000",
    margin: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    fontFamily: "Georama",
  },
  navText: {
    fontWeight: "bold",
    fontFamily: "Georama",
  },
  inputText: {
    width: "50%",
    height: 40,
    marginTop: 10,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: "Georama",
    fontSize: 16,
  },
});
