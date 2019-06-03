import React, {Component} from 'react';
import {View} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import { HEADER_TYPE } from '../../../commons/Constants';
import EText from '../../elements/EText';
import EImage from '../../elements/EImage';
import _ from 'lodash';
import locationIcon from '../../../../res/location-icon.png';

export default class SearchDetailComponent extends Component {
  
  state = {
    latitude: 0,
    longitude: 0,
    error: null,
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        })
      }, 
      (error) => {
        this.setState({
          error: error.message
        }) 
      },
      {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 2000
      }
    )
  }

  getDelta = () => {
    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const northeastLat = parseFloat(boundingBox.northEast.latitude);
    const southwestLat = parseFloat(boundingBox.southWest.latitude);
    return {
      latDelta: northeastLat - southwestLat,
      lngDelta: latDelta * ASPECT_RATIO
    }
  }

  get renderStoreInfo() {
    const {storeInfor} = this.props
    const storeInfoProps = {
      style: styles.info
    },
    addressProps = {
      style: styles.address,
      text: '2 Tran Khac Chan Tan Dinh Ward District 1, Ho Chi Minh City, Vietnam' /* storeInfor.address */
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
      text: '+84 28 3526 1003' /* storeInfor.phone */
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
        {/* {_.map(storeInfor.plugins, (item, k) => {
          const pluginProps = {
            style: styles.plugin,
            uri: item.link,
            key: k,
          }
          return (
            <EImage {...pluginProps}/>
          )
        })} */}
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
    const {longitude, latitude} = this.state,
    {latDelta, lngDelta} = this.getDelta,
    baseProps = {
      typeHeader: HEADER_TYPE.SEARCH,
      showBack: true,
      style: styles.view,
    }
    return (
      <BaseScreen {...baseProps}>
        <View style={styles.container}>
          <View style={styles.mapView}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: latDelta,
                longitudeDelta: lngDelta,
              }}
            >
              <Marker coordinate={this.state} />
            </MapView>
          </View>
          {this.renderStoreInfo}
        </View>
      </BaseScreen>
    )
  }

}
