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
import EDateTime from '../../elements/EDateTime';

export default class ProfileComponent extends Component {

  state = {
    user: this.props.user || {
      address: "",
      avatarImage: "",
      currentBalancePoints: 0,
      dateOfBirth: "",
      email: "",
      interestedFields: [],
      language: "en-English",
      name: "",
      offers: 0,
      phone: "+84 ",
      qrcodeImage: "",
      registerDate: "",
      rewardPoints: 0,
      vouchers: 0
    }
  }

  setInterests = (itemInterest) => {
    let _user = this.state.user
    let nextInterests = _.map(_user.interestedFields, (item, key) => {
      return item.value === itemInterest.value ? itemInterest : item
    })
    _user.interestedFields = nextInterests
    this.setState({
      user: _user
    })
  }

  onSubmit = () => {

  }

  changeDateTime = (date) => {
    let _user = this.state.user
    _user.dateOfBirth = date
    this.setState({user: _user})
  }

  getInterestFields = () => {
    const {interestedFields} = this.props
    const { user } = this.state
    const userFields = user.interestedFields
    return _.map(interestedFields, (item, k) => {
      return {
        value: item.value,
        name: item.name,
        isChoose: _.indexOf(userFields, item.value) >= 0
      }
    })
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
    const {user} = this.props
    
    inforProps = {
      style: styles.inforView
    }
    return (
      <View {...inforProps}>
        <EditText title={'Name'} value={user.name} />
        <View style={{alignItems: 'center'}}>
          <EText style={{fontWeight: 'bold', color: '#000000'}} text={'Date of Birth'} />
          <EDateTime iconButton={editIcon} value={user.dateOfBirth} onChange={(date) => this.changeDateTime(date)} />
        </View>
        <EditText title={'Address'} value={user.address} />
        <EditText title={'Phone'} value={user.phone} />
        <EditText title={'Email'} value={user.email} />
      </View>
    )
  }

  get renderInteresting() {
    const _this = this
    const interestTitleProps = {
      style: styles.interestTitle,
      text: 'I’m interested in'
    },
    interestedProps = {
      style: styles.interestView
    }
    let interests = this.getInterestFields()
    return (
      <View>
        <EText {...interestTitleProps} />
        <View {...interestedProps}>
          {_.map(interests, (item, key) => {
            let checkboxProps = {
              text: item.name,
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