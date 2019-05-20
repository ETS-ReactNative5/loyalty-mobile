import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import BaseScreen from '../../BaseScreen';

export default class SearchComponent extends Component {
  
  render() {
    return (
      <BaseScreen>
        <View style={style.view}>
          <Text>Search Screen</Text>
        </View>
      </BaseScreen>
    )
  }

}
