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
      padding:10,
      fontSize: 20,
    },
    searchBar: {
      paddingLeft: 10,
      marginTop: 15,
      flex: 1,
      flexDirection: 'row'
    },
    content: {
      flex: 10,
    },
    bigHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#DB291D',
      justifyContent: 'center',
      textAlign: 'center'
    },

})