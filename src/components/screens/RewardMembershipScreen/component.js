import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './style';
import EText from '../../elements/EText';
import moment from 'moment';
import { DATETIME_ZMT_FORMAT, FULL_MONTH_FORMAT } from '../../../commons/Constants';
import { getStrings } from '../../../commons/Strings';
import EImage from '../../elements/EImage';
import EListPointsView from '../../elements/EListPointsView';

export default class RewardMembershipComponent extends Component {
  

  render() {
    const {user} = this.props
    const points = [
      {name: 'Rewards Points', value: user.rewardPoints},
      {name: 'Vouchers', value: user.vouchers},
      {name: 'Offers', value: user.offers}
    ]
    const sinceProps = {
      text: getStrings().registerDate(moment(user.registerDate, DATETIME_ZMT_FORMAT).format(FULL_MONTH_FORMAT)),
      style: styles.since
    },
    remindQRCodeProps = {
      text: getStrings().remindScanQRCode(user.name),
      style: styles.since
    },
    viewQRCodeProps = {
      style: styles.viewQRCode
    },
    QRCodeProps = {
      uri: user.qrcodeImage,
      style: styles.qrcode
    }
    return (
      <View style={styles.content}>
        <EText {...sinceProps} />
        <EText {...remindQRCodeProps} />
        <View {...viewQRCodeProps}>
          <EImage {...QRCodeProps} />
          <EListPointsView data={points} />
        </View>
      </View>
    )
  }

}
