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
    backView: {
      flexDirection: 'row',
    },
    iconBack: {
      height: 20,
    },
    textBack: {
      color: '#757575',
      fontWeight: '500',
      marginLeft: -10,
      marginTop: 2,
    },
    viewProfile: {
      backgroundColor: '#FFFFFF',
      width: '100%',
      height: deviceHeight,
      position: 'absolute',
      top: 45,
      paddingTop: 30,
    }
})