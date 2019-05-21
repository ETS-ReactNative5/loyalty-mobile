import React, { Component } from 'react'
import {View} from 'react-native'
import styles from './style'
import PropTypes from 'prop-types';
import _ from 'lodash';
import { goBack } from '../../../../commons/Utils';
import EImage from '../../../elements/EImage';
import EText from '../../../elements/EText';

export default class HeaderTitleComponent extends Component {
  
  render() {
    const { title, onBack } = this.props,
    viewProps = {
      ...this.props,
      style: styles.view
    },
    backProps = {
      style: styles.back,
      source: require('../../../../../res/back-icon.png'), 
      onPress: onBack
    },
    viewTitleProps = {
      style: styles.viewTitle
    },
    titleProps = {
      style: styles.text,
      text: title,
    }
    return (
      <View {...viewProps}>
        <EImage {...backProps} />
        <View {...viewTitleProps}>
          <EText {...titleProps} />
        </View>
      </View>
    )
  }

}

HeaderTitleComponent.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func.isRequired, 
}

HeaderTitleComponent.defaultProps = {
  title: '',
  onBack: () => {goBack()}
}
