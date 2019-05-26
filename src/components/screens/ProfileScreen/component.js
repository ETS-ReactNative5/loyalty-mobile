import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import EAvatar from '../../elements/EAvatar';
import EMixedText from '../../elements/EMixedText';
import ETextInput from '../../elements/ETextInput';
import EImage from '../../elements/EImage';
import EText from '../../elements/EText';

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
    },
    nameProps ={
      style: styles.text,
      text: 'Yumi Nguyen',
      isEdit: false
    },
    dobProps ={
      style: styles.text,
      text: '14/12/1994',
      isEdit: false
    },
    addressProps={
      style: styles.text,
      text: 'Ho Chi Minh City,Vietnam'
    },
    phoneProps={
      style: styles.boldText,
      text: 'Phone'
    },
    numberProps={
      style: styles.text,
      text: '+84123456789'
    }
    emailProps={
      style: styles.boldText,
      text: 'Email'
    },
    emailInfoProps={
      style: styles.text,
      text: 'yumi.nguyen@salesforce.com'
    },
    languageProps={
      style: styles.boldText,
      text: 'Language'
    },
    choiceLanguageProps={
      style: styles.text,
      text: 'English'
    },
    interestedProps={
      style: styles.boldText,
      text: "I'm interested in"
    }

    return (
      <BaseScreen>
        <View style={styles.view}>
          {this.renderProfile}
          <EAvatar {...avatarProps} />
          <EText {...nameProps} />
          <EText {...dobProps} />
          <EText {...addressProps} />
          <EText {...phoneProps} />
          <EText {...numberProps} />
          <EText {...emailProps} />
          <EText {...emailInfoProps} />
          <EText {...languageProps} />
          <EText {...choiceLanguageProps} />
          <EText {...interestedProps} />



          
        </View>
      </BaseScreen>
    )
  }
}
