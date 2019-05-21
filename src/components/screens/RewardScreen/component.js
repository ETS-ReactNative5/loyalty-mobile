import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import BaseScreen from '../../BaseScreen';
import { HEADER_TYPE } from '../../../commons/Constants';

export default class RewardComponent extends Component {
  
  render() {
    const baseProps = {
      typeHeader: HEADER_TYPE.TITLE,
      title: 'Receipt'
    }
    return (
      <BaseScreen {...baseProps}>
        <View style={style.view}>
          <Text>Reward Screen</Text>
        </View>
      </BaseScreen>
    )
  }

}
