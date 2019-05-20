import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import BaseScreen from '../../BaseScreen';

export default class MoreComponent extends Component {
  
  render() {
    return (
      <BaseScreen>
        <View style={style.view}>
          <Text>More Screen</Text>
        </View>
      </BaseScreen>
    )
  }

}
