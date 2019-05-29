import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {NavigationActions} from 'react-navigation';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import { getStore } from '../../../../App';
import { actions } from '../../../redux/actions';
import EAvatar from '../../elements/EAvatar';
import EText from '../../elements/EText';
import { getStrings } from '../../../commons/Strings';
import EImage from '../../elements/EImage';
import ETextInput from '../../elements/ETextInput';
import EListThumbnail from '../../elements/list/EListThumbnail';
import searchIcon from '../../../../res/search-icon-black.png';
import { appScreenName, searchScreenName, homeTabName } from '../../../commons/Constants';

// const data = [
//   {
    
//     title: 'BEER - FRUIT WINE',
//     brief: 'Circle K beer and wine products are served 24/7 with a full range of famous brands in the country and around the world. You will not worry about your fun being interrupted.',
//     hasDescribe: true,
//     image: '',
//     source: require('../../../../res/beer.png'),
//     onPress: () => {}
//   },
//   {
//     title: 'ALCOHOL',
//     brief: 'At Circle K, you will be assured that our products are guaranteed of quality and clear origin.',
//     hasDescribe: true,
//     image: '',
//     source: require('../../../../res/beer.png'),
//     onPress: () => {}
//   },
//   {
//     title: 'COLD BEVERAGE',
//     brief: 'Most of the favorite, quality and prestigious beverage brands in the market today are available at Circle K, from pure water, natural mineral water, carbonated water, energy drinks, body drink sports, tea, coffee, juice ...',
//     hasDescribe: true,
//     image: '',
//     source: require('../../../../res/beer.png'),
//     onPress: () => {}
//   },
//   {
//     title: 'CANDY',
//     brief: 'Circle Ks variety of cakes, candies, chewing gum and chocolate will bring a lot of fun to your daily snack.',
//     hasDescribe: true,
//     image: '',
//     source: require('../../../../res/beer.png'),
//     onPress: () => {}
//   },
//   {
//     title: 'FRESH BREAD',
//     brief: 'Various types of fresh cakes are prepared with high quality ingredients, ensuring food safety, domestic and foreign origin with famous brands such as SAVOURE, D-PLUS, SAMPLIP, LEELA ... together Many attractive flavors will give customers interesting experiences.',
//     hasDescribe: true,
//     image: '',
//     source: require('../../../../res/beer.png'),
//     onPress: () => {}
//   }
// ]
export default class ProductComponent extends Component {
  
  state = {
    searchKey: ''
  }

  searchHandle = () => {
    getStore().dispatch(NavigationActions.navigate({routeName: homeTabName.search}));
    getStore().dispatch(NavigationActions.navigate({routeName: searchScreenName.searchMain}));
    getStore().dispatch(actions.getProduct(this.state.searchKey));
    getStore().dispatch(actions.doSearch(this.state.searchKey));
  }

  componentDidMount() {
    getStore().dispatch(actions.getProductCategories())
  }

  render() {
    const {categories, name, avatarImage} = this.props
    const avatarProps = {
      avatar: avatarImage,
      onPress: () => {getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.profile}))}
    }
    const productProps = {
      style: styles.productView
    }
    const nameProps = {
      style: styles.nameView,
      text: 'Hey ' + name
    },
    describeProps = {
      style: styles.describeView,
      text: getStrings().describeProductScreen
    },
    searchProps = {
      style: styles.searchView
    }
    iconSearchProps = {
      source: searchIcon,
      style: styles.iconSearchView,
    },
    textSearchProps = {
      placeholder: 'Search...',
      onChangeText: (text) => {this.setState({searchKey: text})},
      onBlur: () => this.searchHandle()
    },
    listProductProps = {
      title: 'Product',
      data: categories,
      style: styles.listView
    }
    return (
      <BaseScreen>
        <View style={styles.view}>
          <EAvatar {...avatarProps} />
        </View>
        <ScrollView {...productProps}>
          <EText {...nameProps}/>
          <EText {...describeProps} />
          <View {...searchProps}>
            <EImage {...iconSearchProps} />
            <ETextInput {...textSearchProps} />
          </View>
          <EListThumbnail {...listProductProps} />
        </ScrollView>
      </BaseScreen>
    )
  }

}