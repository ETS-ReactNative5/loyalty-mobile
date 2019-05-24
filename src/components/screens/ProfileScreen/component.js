import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import EAvatar from '../../elements/EAvatar';
import ETextInput from '../../elements/ETextInput';
import EImage from '../../elements/EImage';
import EText from '../../elements/EText';
import { goBack } from '../../../commons/Utils';
import backIcon from '../../../../res/back-icon-black.png';

export default class ProfileComponent extends Component {

  renderItemProfile(item, key) {
    const itemViewProps = {

    },
    fixedTextProps = {

    },
    editTextProps = {

    },
    editIconProps = {

    }
    return (
      <View {...itemViewProps} >
        <EText {...fixedTextProps} />
        <ETextInput {...editTextProps} />
        <EImage {...editIconProps} />
      </View>
    )
  }

  get renderProfile() {
    const user = this.props
    const backProps = {
      style: styles.backView,
      onPress: () => {goBack()}
    },
    iconBackProps = {
      source: backIcon,
      style: styles.iconBack
    },
    textBackProps = {
      text: 'Back',
      style: styles.textBack
    }
    return (
      <View style={styles.viewProfile}>
        <TouchableOpacity {...backProps}>
          <EImage {...iconBackProps} />
          <EText {...textBackProps} />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const {avatarImage} = this.props.user
    console.log('Image:', avatarImage)
    const avatarProps = {
      avatar: avatarImage
    }
    return (
      <BaseScreen>
        <View style={styles.view}>
          {this.renderProfile}
          <EAvatar {...avatarProps} />
        </View>
      </BaseScreen>
    )
  }
}
