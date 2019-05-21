import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import BaseScreen from '../../BaseScreen';
import EText from '../../elements/EText';
import EListThumbnail from '../../elements/list/EListThumbnail';

const data = [
  {
    
    title: 'BEER - FRUIT WINE',
    brief: 'Circle K beer and wine products are served 24/7 with a full range of famous brands in the country and around the world. You will not worry about your fun being interrupted.',
    hasDescribe: true,
    image: '',
    source: require('../../../../res/beer.png'),
    onPress: () => {}
  },
  {
    title: 'ALCOHOL',
    brief: 'At Circle K, you will be assured that our products are guaranteed of quality and clear origin.',
    hasDescribe: true,
    image: '',
    source: require('../../../../res/beer.png'),
    onPress: () => {}
  },
  {
    title: 'COLD BEVERAGE',
    brief: 'Most of the favorite, quality and prestigious beverage brands in the market today are available at Circle K, from pure water, natural mineral water, carbonated water, energy drinks, body drink sports, tea, coffee, juice ...',
    hasDescribe: true,
    image: '',
    source: require('../../../../res/beer.png'),
    onPress: () => {}
  },
  {
    title: 'CANDY',
    brief: 'Circle Ks variety of cakes, candies, chewing gum and chocolate will bring a lot of fun to your daily snack.',
    hasDescribe: true,
    image: '',
    source: require('../../../../res/beer.png'),
    onPress: () => {}
  },
  {
    title: 'FRESH BREAD',
    brief: 'Various types of fresh cakes are prepared with high quality ingredients, ensuring food safety, domestic and foreign origin with famous brands such as SAVOURE, D-PLUS, SAMPLIP, LEELA ... together Many attractive flavors will give customers interesting experiences.',
    hasDescribe: true,
    image: '',
    source: require('../../../../res/beer.png'),
    onPress: () => {}
  }
]
export default class ProductComponent extends Component {
  
  render() {
    const headerProps = {
      text: 'PRODUCT'
    }
    return (
      <BaseScreen>
        <View style={style.view}>
          <EText {...headerProps} />
          <EListThumbnail data = {data} />
        </View>
      </BaseScreen>
    )
  }

}
