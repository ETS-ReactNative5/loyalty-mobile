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
import { appScreenName } from '../../../commons/Constants';

export default class ProductComponent extends Component {
  
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
      placeholder: 'Search...'
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