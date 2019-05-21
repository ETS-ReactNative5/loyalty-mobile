import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import EAvatar from '../../elements/EAvatar';
import EMixedText from '../../elements/EMixedText';
import ETextInput from '../../elements/ETextInput';
import EImage from '../../elements/EImage';

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
    const mixedProps = {
      isEdit: false,
      text: 'Tran Tran'
    }
    return (
      <View style={styles.viewProfile}>
        {}
      </View>
    )
  }

  render() {
    const avatarProps = {
      style: styles.avatar
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
