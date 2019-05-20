/*
*
@author tri.tran on 1/29/19
*
*/
import React, { Component } from "react";
import { View } from "react-native";
import styles from "./style";
import { actions } from "../../../redux/actions";
import { getStore } from "../../../../App";

export default class SplashComponent extends Component {
  componentDidMount() {
    getStore().dispatch(actions.getAutoLogin());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loyalty</Text>
      </View>
    );
  }
}
