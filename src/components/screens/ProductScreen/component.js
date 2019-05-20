import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from './style';

export default class ProductComponent extends Component {
  
  render() {
    return (
      <View style={style.view}>
        <Text>Product Screen</Text>
      </View>
    )
  }

}
