import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import BaseScreen from '../../BaseScreen';

export default class SpecialOfferComponent extends Component {
  
  render() {
    return (
      <BaseScreen>
        <View style={style.view}>
          <Text>Special Offer Screen</Text>
        </View>
      </BaseScreen>
    )
  }

}
