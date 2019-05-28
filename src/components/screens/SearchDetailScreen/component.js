import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import { HEADER_TYPE } from '../../../commons/Constants';
import EImage from '../../elements/EImage';
import EText from '../../elements/EText';


//test onPress 
import { getStore } from '../../../../App';
import {NavigationActions} from 'react-navigation';
import { appScreenName } from '../../../commons/Constants';



export default class SearchDetailComponent extends Component {
  
  render() {
    const baseProps = {
      typeHeader: HEADER_TYPE.SEARCH
    },
        mapProps ={
          style: styles.map,
          source: require('../../../../res/image21.png'),
          resizeMode: 'contain'
        },
        toolProps ={
          style: styles.tool,
          source: require('../../../../res/image23.png')
        }
        addressProps ={
          style: styles.text,
          text: '2 Tran Khac Chan',
        },
        wardProps ={
          style: styles.text,
          text: 'Tan Dinh Ward'
        },
        directionProps ={
          style: styles.text,
          text: 'District 1, Ho Chi Minh City'
        },
        nationalProps ={
          style: styles.text,
          text: 'Vietnam'
        },
        phoneProps ={
          style: styles.text,
          text:   'Phone: '
        },
        numberProps ={
          style: styles.number,
          text: '+84 28 3526 1003',
          onPress: () => {getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.profile}))}
        },
        locationProps ={
          style: styles.location,
          source: require('../../../../res/_new-locate.png')
        },
        locationTextProps ={
          style: styles.number,
          text: 'Get Directions'
        }
        
    return (
      <BaseScreen {...baseProps}>
        <View style={styles.view}>
          <View style={styles.map}>
            <EImage {...mapProps} />
          </View>
          <View style={styles.textInput}>
            <EText {...addressProps}/>
            <EText {...wardProps}/>
            <EText {...directionProps}/>
            <EText {...nationalProps}/>
          </View>
          <View style={styles.footer}>
          <EImage {...toolProps} />
          <View style={styles.phonenum}>
              <EText {...phoneProps} />
              <EText {...numberProps} />
          </View>
          <View style={styles.getLocation}>
            <EImage {...locationProps} />
            <EText {...locationTextProps} />
          </View>
          </View>
        </View>
      </BaseScreen>
    )
  }

}
