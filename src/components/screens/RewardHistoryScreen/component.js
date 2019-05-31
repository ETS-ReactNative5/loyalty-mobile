import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './style';
import { HISTORY_VOUCHER } from '../../../commons/Constants';
import EListHistoryRewards from '../../elements/list/EListHistoryRewards';
import { getStrings } from '../../../commons/Strings';
import EText from '../../elements/EText';

export default class RewardHistoryComponent extends Component {
  
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
    }
    return (
      <View style={styles.view}>
        <View {...balanceProps}>
          <EText {...balanceTextProps} />
          <EText {...balanceValueProps} />
        </View>
        <EListHistoryRewards data={HISTORY_VOUCHER} />
      </View>
    )
  }

}
