/*
*
@author tri.tran on 2/15/19
*
*/

import {StyleSheet} from 'react-native'
import { appStyleConstants } from '../../../commons/Constants';

export default StyleSheet.create({
    view: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: appStyleConstants.NORMAL_SCREEN_MARGIN,

    },
    header:{
      flex: 2,
      justifyContent: 'flex-start',
      alignItems:'flex-start',
      paddingBottom: appStyleConstants.NORMAL_SCREEN_MARGIN,

    },
    headerText:{
      padding:5,
      fontSize: 16,
    },
    search: {
      paddingLeft: 10,
      marginTop: 15,
      
    },
    content: {
      flex: 10,
    },
    tittleContent: {
      justifyContent: 'center',
      alignItems: 'center',
      color: '#DB291D',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
    }

})