import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import BaseScreen from '../../BaseScreen';

export default class ProductComponent extends Component {
  
  render() {
    return (
      <BaseScreen>
        <View style={style.view}>
          <Text>Product Screen</Text>
        </View>
      </BaseScreen>
    )
  }

}
