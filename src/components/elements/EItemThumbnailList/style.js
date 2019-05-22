import { StyleSheet } from "react-native";

export default StyleSheet.create({
  view: {
    flexDirection: "column",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DADADA",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },  
  imageIcon: {
    width: 400,
    height: 400,
  },
  describe: {},
  title: {
    textAlign: "center",
    color: "crimson",
    paddingTop: 30,
    fontSize: 30,
    fontWeight: 'bold'
  },
  brief: {
    textAlign: "center",
    paddingTop: 30,
    color: 'black',
    textShadowColor: 'black',
  }
});
