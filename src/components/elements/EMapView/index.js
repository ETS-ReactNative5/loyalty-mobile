import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { Component } from "react";
import styles from './style'
import PropTypes from 'prop-types'
// import Marker  from 'react-native-maps';

export default class EMapView extends Component {
    constructor(props) {
        super(props);
        
          this.state = {
            markers: [{
                title: 'OKIE',
                coordinates: {
                  latitude: 10.804015,
                  longitude: 106.675381
                },
              },
              {
                title: 'OKIE',
                coordinates: {
                  latitude: 10.803509,
                  longitude: 106.678428
                },  
              }]
         };
        }

    render() {
       
      return (
                <MapView 
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                    latitude: 10.763337,
                    longitude: 106.671024,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                    }}
                    mapType= 'standard'
                >
                    {this.state.markers.map(marker => (
                    <MapView.Marker 
                    coordinate={marker.coordinates}
                    title={marker.title}
                    />
                ))}
                </MapView>
          );
      }
  }
  
  EMapView.propTypes = {

    //marker
    // description: PropTypes.string,
    // coordinate: PropTypes.object,
    // title: PropTypes.string,

    //bug
    // provider: PropTypes.string.isRequired,
    // loadingIndicatorColor: PropTypes.color,
    region: PropTypes.object,
    initialRegion: PropTypes.object,
    mapType: PropTypes.string.isRequired,
    showUserLocation: PropTypes.bool,
    followsUserLocation: PropTypes.bool,
    zoomEnabled: PropTypes.bool,
    zoomTapEnabled: PropTypes.bool,
    zoomControlEnabled: PropTypes.bool,
    rotateEnabled: PropTypes.bool,
    loadingEnabled: PropTypes.bool,
    moveOnMarkerPress: PropTypes.bool,
    kmlSrc: PropTypes.string,
    
  }
  
  EMapView.defaultProps = {
    showUserLocation: true,
    followsUserLocation: true,
    zoomEnabled: true,
    zoomTapEnabled: true,
    zoomControlEnabled: true,
    rotateEnabled: true,
    loadingEnabled: true,
    moveOnMarkerPress: true,
    mapType: 'standard'

    
  }