import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import { HEADER_TYPE, STORE_DATA } from '../../../commons/Constants';
import EText from '../../elements/EText';
import EImage from '../../elements/EImage';
import _ from 'lodash';
import locationIcon from '../../../../res/location-icon.png';
import EMapView from '../../elements/EMapView';
import { getStore } from '../../../../App';
import { actions } from '../../../redux/actions';

export default class SearchDetailComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.navigation.getParam('productId', 0)
    }
  }

  onSearch = (textKey) => {
    getStore().dispatch(actions.doGetStores(1, textKey));
  } 

  componentDidMount() {
    this.onSearch('');
  }

  get renderStoreInfo() {
    const {stores} = this.props
    if(_.isEmpty(stores)) {
      return null;
    }
    const storeInfor = stores[0]
    const storeInfoProps = {
      style: styles.info
    },
    addressProps = {
      style: styles.address,
      text: storeInfor.address /* '2 Tran Khac Chan Tan Dinh Ward District 1, Ho Chi Minh City, Vietnam'  */
    },
    phoneProps = {
      style: styles.phone
    },
    phoneTitleProps = {
      style: styles.phoneTitle,
      text: 'Phone:'
    },
    phoneValueProps = {
      style: styles.phoneValue,
      text: storeInfor.phone /* '+84 28 3526 1003' */
    },
    locationProps = {
      style: styles.location,
    },
    locationIconProps = {
      style: styles.locationIcon,
      source: locationIcon,
    },
    locationDetectProps = {
      style: styles.locationDetect,
      text: 'Get Directions',
    }
    return (
      <View {...storeInfoProps}>
        <EText {...addressProps} />
        <View style={styles.utilities}>
        {_.map(storeInfor.utilities, (item, k) => {
          const pluginProps = {
            style: styles.plugin,
            uri: item,
            key: k,
          }
          return (
            <EImage {...pluginProps}/>
          )
        })}
        </View>
        <View {...phoneProps}>
          <EText {...phoneTitleProps} />
          <EText {...phoneValueProps} />
        </View>
        <View {...locationProps}>
          <EImage {...locationIconProps} />
          <EText {...locationDetectProps} />
        </View>
      </View>
    )
  }

  render() {
    const {stores} = this.props
    const baseProps = {
      typeHeader: HEADER_TYPE.SEARCH,
      showBack: true,
      style: styles.view,
      onSearch: (textKey) => this.onSearch(textKey)
    },
    mapProps = {
      data: _.isEmpty(stores) ? STORE_DATA : stores
    }
    return (
      <BaseScreen {...baseProps}>
        <View style={styles.container}>
          <EMapView {...mapProps} />
          {this.renderStoreInfo}
        </View>
      </BaseScreen>
    )
  }

}
