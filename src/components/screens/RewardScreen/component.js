import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import BaseScreen from '../../BaseScreen';

export default class RewardComponent extends Component {
  
  render() {
    return (
      <BaseScreen>
        <View style={style.view}>
          <Text>Reward Screen</Text>
        </View>
      </BaseScreen>
    )
  }

}
