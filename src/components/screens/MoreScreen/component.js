import React, {Component} from 'react';
import {View} from 'react-native';
import {NavigationActions} from 'react-navigation';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import EText from '../../elements/EText';
import { appScreenName } from '../../../commons/Constants';
import EList from '../../elements/list/EList';
import { getStore } from '../../../../App';

const data = [
  {
    source: require('../../../../res/avatar-default.png'), 
    title: 'Tri Tran', 
    onPress: () => {getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.aboutme}))}
  },
  {
    source: require('../../../../res/logout-icon.png'), 
    title: 'Log out', 
    onPress: () => {getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.login}))}
  },
]

export default class MoreComponent extends Component {
  
  render() {
    const headerProps = {
      style: styles.headerTitle,
      text: 'More'
    }
    return (
      <BaseScreen>
        <View style={styles.view}>
          <EText {...headerProps} />
          <EList data={data} />
        </View>
      </BaseScreen>
    )
  }

}
