import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './style';
import EText from '../../elements/EText';
import { getStrings } from '../../../commons/Strings';
import EListRewards from '../../elements/list/EListRewards';
import { REDEEM_DATA } from '../../../commons/Constants';

export default class RewardVoucherComponent extends Component {
  
  navigateToHistory = () => {
    this.props.onNavigateHistory();
  }

  render() {
    const balanceProps = {
      style: styles.balance
    },
    balanceValueProps = {
      style: styles.balanceValue,
      text: '45,000',
    },
    balanceTextProps = {
      style: styles.balanceText,
      text: getStrings().balanceText,
    },
    historyViewProps = {
      style: styles.historyView
    },
    historyTextProps = {
      style: styles.historyText,
      text: 'View history',
    }
    return (
      <View style={styles.view}>
        <View {...balanceProps}>
          <EText {...balanceTextProps} />
          <EText {...balanceValueProps} />
        </View>
        <EListRewards data={REDEEM_DATA} />
        <View {...historyViewProps}>
          <TouchableOpacity onPress={() => this.navigateToHistory()}>
            <EText {...historyTextProps} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}
