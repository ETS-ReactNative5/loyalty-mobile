import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import EAvatar from '../../elements/EAvatar';
import ETextInput from '../../elements/ETextInput';
import EImage from '../../elements/EImage';
import EText from '../../elements/EText';
import { goBack } from '../../../commons/Utils';
import backIcon from '../../../../res/back-icon-black.png';
import editIcon from '../../../../res/edit-icon.png';
import { INTERESTED } from '../../../commons/Constants';
import ECheckbox from '../../elements/ECheckbox';
import _ from 'lodash';
import EButton, { TextButtonTypes } from '../../elements/EButton';
import { getStrings } from '../../../commons/Strings';

export default class ProfileComponent extends Component {

  state = {
    interests: INTERESTED
  }

  setInterests = (itemInterest) => {
    const {interests} = this.state
    let nextInterests = _.map(interests, (item, key) => {
      return item.value === itemInterest.value ? itemInterest : item
    })
    this.setState({
      interests: nextInterests
    })
  }

  onSubmit = () => {

  }

  get renderBackButton() {
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

  get renderProfile() {
    const user = this.props
    
    inforProps = {
      style: styles.inforView
    }
    return (
      <View {...inforProps}>
        <EditText title={'Name'} value={'Yumi Nguyen'} />
        <EditText title={'Date of Birth'} value={'14/12/1994'} />
        <EditText title={'Address'} value={'Ho Chi Minh City, Vietnam'} />
        <EditText title={'Phone'} value={'+84 773432667'} />
        <EditText title={'Email'} value={'yumi.nguyen@gmail.com'} />
      </View>
    )
  }

  get renderInteresting() {
    const {interests} = this.state
    const _this = this
    const interestTitleProps = {
      style: styles.interestTitle,
      text: 'I’m interested in'
    },
    interestedProps = {
      style: styles.interestView
    }
    return (
      <View>
        <EText {...interestTitleProps} />
        <View {...interestedProps}>
          {_.map(interests, (item, key) => {
            let checkboxProps = {
              text: item.title,
              isChecked: item.isChoose,
              onPress: () => {
                item.isChoose = !item.isChoose
                _this.setInterests(item)
              }
            },
            viewCheckBoxProps = {
              key: item.value,
              style: styles.viewCheckBox,
            }
            return (
              <View {...viewCheckBoxProps}>
                <ECheckbox {...checkboxProps}/>
              </View>
            )
          })}
        </View>
      </View>
    )
  }

  get renderPoints() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <PointView name={'Rewards Points'} value={145000} />
        <PointView name={'Vouchers'} value={13} />
        <PointView name={'Offers'} value={8} />
      </View>
    )
  }

  render() {
    const {avatarImage} = this.props.user
    console.log('Image:', avatarImage)
    const avatarProps = {
      avatar: avatarImage
    },
    submitProps = {
			text: getStrings().submit,
			style: styles.submit,
			onPress: this.onSubmit.bind(this),
			type: TextButtonTypes.red,
			textStyle: styles.textSubmit,
    }
    return (
      <BaseScreen>
        <View style={styles.view}>
          {this.renderBackButton}
          <EAvatar {...avatarProps} />
          <ScrollView style={styles.scrollView}>
            {this.renderProfile}
            {this.renderInteresting}
            {this.renderPoints}
            <EButton {...submitProps} />
          </ScrollView>
        </View>
      </BaseScreen>
    )
  }
}

class EditText extends Component {
  render() {
    const {title, value} = this.props
    const editViewProps = {
      style: styles.editView
    },
    titleProps = {
      text: title,
      style: styles.editTitle
    },
    inputProps = {
      style: styles.inputView
    },
    textProps = {
      value: value,
      textInputStyle: styles.editValue
    },
    iconProps = {
      source: editIcon,
      style: styles.editIconView
    }
    return (
      <View {...editViewProps} >
        <EText {...titleProps} />
        <View {...inputProps}>
          <ETextInput {...textProps} />
          <EImage {...iconProps} />
        </View>
      </View>
    )
  }
}

class PointView extends Component {
  render() {
    const {name, value} = this.props
    return (
      <View style={{paddingHorizontal: 20, alignItems: 'center', paddingVertical: 20}}>
        <EText text={value} style={{color: '#000000', fontWeight: 'bold', fontSize: 18}} />
        <EText text={name} style={{marginTop: 10}} />
      </View>
    )
  }
}