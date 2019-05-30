import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './style';
import PropTypes from 'prop-types';
import _ from 'lodash';
import EImage from '../EImage';
import EText from '../EText';
import { getStrings } from '../../../commons/Strings';
import ECounter from '../ECounter';

export default class EItemListRewards extends Component {

  /*
  voucher infor: vId, vName, vPrice, vPoints, vImage
  user own available vouchers: uAvailables - PropTypes.number
  */

  render() {
    const {vId, vName, vPrice, vPoints, vImage, uAvailables} = this.props
    const viewProps = {
      style: styles.view,
    },
    viewImageProps = {
      style: styles.viewImage
    },
    imageProps = {
      style: styles.image,
      uri: vImage,
    },
    contentProps = {
      style: styles.content,
    }
    priceProps = {
      style: styles.price,
      text: vPrice,
    },
    nameProps = {
      text: vName,
      style: styles.name,
    },
    pointProps = {
      text: getStrings().pointVoucher(vPoints),
      style: styles.point,
    },
    counterProps = {
      voucherId: vId,
      availables: uAvailables,
    }
    return (
      <View {...viewProps}>
        <View {...viewImageProps}>
          <EImage {...imageProps} />
        </View>
        <View {...contentProps}>
          <EText {...priceProps} />
          <EText {...nameProps} />
          <EText {...pointProps} />
        </View>
        <ECounter {...counterProps} />
      </View>
    )
  }

}

EItemListRewards.propTypes = {
  vName: PropTypes.string.isRequired,
  vPrice: PropTypes.number.isRequired,
  vPoints: PropTypes.number.isRequired,
  vImage: PropTypes.string.isRequired,
  uAvailables: PropTypes.number.isRequired,
  onPress: PropTypes.func,
}

EItemListRewards.defaultProps = {
  vName: '',
  vPrice: 0,
  vPoints: 0,
  vImage: '',
  uAvailables: 0,
  onPress: () => {},

}