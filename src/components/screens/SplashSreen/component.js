/*
*
@author tri.tran on 1/29/19
*
*/
import React, { Component } from "react";
import { View, Image } from "react-native";
import { getStore } from "../../../../App";
import styles from "./style";
import { actions } from "../../../redux/actions/Actions";

export default class SplashComponent extends Component {
  componentDidMount() {
    getStore().dispatch(actions.getAutoLogin());
  }

  render() {
    const logoProps = {
      source: require("../../../../res/app-white-ico.png"),
      style: styles.logo,
      resizeMode: "contain"
    };
    return (
      <View style={styles.container}>
        <Image {...logoProps} />
      </View>
    );
  }
}
