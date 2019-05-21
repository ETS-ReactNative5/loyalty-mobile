import React, { Component } from 'react'
import {View} from 'react-native'
import styles from './style'
import PropTypes from 'prop-types';
import _ from 'lodash';
import { goBack } from '../../../../commons/Utils';
import ETextInput from '../../../elements/ETextInput';
import EImage from '../../../elements/EImage';

export default class HeaderSearchComponent extends Component {
  
  render() {
    const { searchText, onSearch, onBack, onChangeText } = this.props,
    viewProps = {
      ...this.props,
      style: styles.view,
      onBlur: onSearch
    },
    backProps = {
      style: styles.back,
      source: require('../../../../../res/back-icon.png'), 
      onPress: onBack
    },
    searchProps = {
      style: styles.searchText,
      placeHolder: 'Find a store...',
      placeholderTextColor: '#828282',
      value: searchText,
      onPress: onSearch,
      onChangeText: onChangeText, 
    },
    searchIconProps = {
      source: require('../../../../../res/search-icon-black.png'),
      style: styles.searchIcon
    }
    return (
      <View {...viewProps}>
        <EImage {...backProps} />
        <ETextInput {...searchProps} />
        <EImage {...searchIconProps} />
      </View>
    )
  }

}

HeaderSearchComponent.propTypes = {
  searchText: PropTypes.string, 
  onSearch: PropTypes.func,
  onBack: PropTypes.func.isRequired, 
}

HeaderSearchComponent.defaultProps = {
  searchText: '', 
  onSearch: () => {},
  onBack: () => {goBack()}
}
