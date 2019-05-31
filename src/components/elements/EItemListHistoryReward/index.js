import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './style';
import PropTypes from 'prop-types';
import _ from 'lodash';
import EText from '../EText';
import { getStrings } from '../../../commons/Strings';

export default class EItemListHistoryReward extends Component {

  /*
  history voucher infor: name, price, points, description
  */

  render() {
    const { name, price, points, description } = this.props
    const viewProps = {
      style: styles.view,
    },
    titleProps = {
      style: styles.title,
    }
    priceProps = {
      style: styles.price,
      text: price,
    },
    nameProps = {
      text: name,
      style: styles.name,
    },
    pointProps = {
      text: getStrings().pointVoucher(points),
      style: styles.point,
    },
    contentProps = {
      style: styles.content,
    },
    descriptionProps = {
      style: styles.description,
      text: description
    }
    return (
      <View {...viewProps}>
        <View {...titleProps}>
          <EText {...priceProps} />
          <EText {...nameProps} />
          <EText {...pointProps} />
        </View>
        <View {...contentProps}>
          <EText {...descriptionProps} />
        </View>
      </View>
    )
  }

}

EItemListHistoryReward.propTypes = {
  vName: PropTypes.string.isRequired,
  vPrice: PropTypes.number.isRequired,
  vPoints: PropTypes.number.isRequired,
  vImage: PropTypes.string.isRequired,
  uAvailables: PropTypes.number.isRequired,
  onPress: PropTypes.func,
}

EItemListHistoryReward.defaultProps = {
  vName: '',
  vPrice: 0,
  vPoints: 0,
  vImage: '',
  uAvailables: 0,
  onPress: () => {},

}