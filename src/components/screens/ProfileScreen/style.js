/*
*
@author tri.tran on 2/15/19
*
*/

import {StyleSheet, Platform} from 'react-native'
import { deviceHeight } from '../../../commons/Constants';

const headerHeight = 90

export default StyleSheet.create({
    view: {
      flex: 1,
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      top: headerHeight + (Platform.OS === 'ios' ? 25 : 0),
    },
    avatar: {
      position: 'absolute',
      top: 100,
    },
    viewProfile: {
      backgroundColor: '#FFFFFF',
      width: '100%',
      height: deviceHeight,
      alignItems: 'center',
      position: 'absolute',
      top: 45,
      paddingTop: 70,
    },
    text: {
        margin: 3
    },
    boldText: {
      margin: 3,
      fontWeight: 'bold'
    }
})