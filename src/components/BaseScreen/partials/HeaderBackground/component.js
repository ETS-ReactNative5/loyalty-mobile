import React, { Component } from 'react'
import {View} from 'react-native'
import style from './style'
import EImage from '../../../elements/EImage';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class HeaderBackgroundComponent extends Component {
  
  render() {
    const { headerImage, sourceImage } = this.props
    const viewProps = {
      style: style.view
    },
    backgroundProps = _.isEmpty(headerImage) 
    ? {
      style: style.background,
      source: sourceImage
    }
    : {
      style: style.background,
      uri: headerImage
    }
    console.log('BackgroundProps:', backgroundProps)
    return (
      <View {...viewProps}>
        <EImage {...backgroundProps} />
      </View>
    )
  }

}

HeaderBackgroundComponent.propTypes = {
  headerImage: PropTypes.string,
  sourceImage: PropTypes.number, 
}

HeaderBackgroundComponent.defaultProps = {
  headerImage: '',
  sourceImage: require('../../../../../res/bg-header.png')
}
