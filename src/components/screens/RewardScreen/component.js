import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import { HEADER_TYPE, rewardTabName } from '../../../commons/Constants';
import RewardMembershipScreen from '../RewardMembershipScreen';
import RewardVoucherScreen from '../RewardVoucherScreen';
import RewardHistoryScreen from '../RewardHistoryScreen';
import EText from '../../elements/EText';
import _ from 'lodash';

export default class RewardComponent extends Component {

  state = {
    activeTab: rewardTabName.membership
  }

  onChangeTab = (activeValue) => {
    this.setState({
      activeTab: activeValue
    })
  }

  get renderRewardView() {
    switch(this.state.activeTab) {
      case 2: return <RewardHistoryScreen />
      case 1: return <RewardVoucherScreen />
      case 0: 
      default: return <RewardMembershipScreen />
    }
  }

  get renderSegmentControl() {
    const segmentViewProps = {
      style: styles.segmentView
    }
    const membershipProps = {
      title: 'Membership',
      isActive: this.state.activeTab === rewardTabName.membership,
      onChange: () => this.onChangeTab(rewardTabName.membership)
    },
    voucherProps = {
      title: 'Rewards',
      isActive: _.indexOf([rewardTabName.voucher, rewardTabName.history], this.state.activeTab) >= 0,
      onChange: () => this.onChangeTab(rewardTabName.voucher)
    }
    return (
      <View {...segmentViewProps}>
        <SegmentItem {...membershipProps} />
        <SegmentItem {...voucherProps} />
      </View>
    )
  }

  render() {
    const baseProps = {
      typeHeader: HEADER_TYPE.TITLE,
      title: 'Receipt',
    },
    rewardHeaderProps = {
      style: styles.rewardHeader
    }
    titleProps = {
      style: styles.titleView
    },
    nameProps = {
      style: styles.name,
      text: 'Circle K Rewards'
    },
    thankyouProps = {
      style: styles.thankyou,
      text: 'Thank you',
    }
    return (
      <BaseScreen {...baseProps}>
        <View {...rewardHeaderProps}>
          <View {...titleProps}>
            <EText {...nameProps} />
            <EText {...thankyouProps} />
          </View>
          {this.renderSegmentControl}
        </View>
        {this.renderRewardView}
      </BaseScreen>
    )
  }

}

class SegmentItem extends Component {

  render() {
    const {title, isActive, onChange} = this.props
    const segmentProps = {
      onPress: () => onChange(),
      style: styles.segment(isActive),
    },
    titleProps = {
      text: title,
      style: styles.title(isActive),
    }
    return (
      <TouchableOpacity {...segmentProps}>
        <EText {...titleProps} />
      </TouchableOpacity>
    )
  }

}