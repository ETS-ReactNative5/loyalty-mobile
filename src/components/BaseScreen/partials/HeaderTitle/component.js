import React, { Component } from 'react'
import {View, TouchableOpacity} from 'react-native'
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
      style: [styles.view, this.props.style]
    },
    backProps = {
      style: styles.back,
      source: require('../../../../../res/back-icon.png'), 
    },
    viewTitleProps = {
      style: styles.viewTitle
    },
    titleProps = {
      style: [styles.text, this.props.titleStyle],
      text: title,
    }
    return (
      <View {...viewProps}>
        <TouchableOpacity onPress={this.props.onBack}>
          <EImage {...backProps} />
        </TouchableOpacity>
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
