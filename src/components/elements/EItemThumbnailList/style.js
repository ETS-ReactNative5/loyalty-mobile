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
    width: '100%',
    paddingVertical: 10,
  },
  describe: {
    alignItems: 'center'
  },
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
    fontWeight: 'bold',
    fontSize: 18,
    color: '#DB291D',
    paddingBottom: 15,
  },
});
