/*
*
@author tri.tran on 2/15/19
*
*/

import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    view: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    map: {
      flex: 10,
      width: '100%',
    },
    tool: {
      width: 120,
      height: 30,
      right: 85,
    },
    text: {
      fontSize: 14,
      fontWeight: 'bold'
    },
    textInput: {
      flex: 1,
      right: 100,
      padding: 20,
      bottom: 15
    },
    number: {
      color: 'red'
    },
    getLocation: {
      flexDirection: 'row',
      right: 85,
      bottom: 2
    },
    location: {
      width: 20,
      height: 20,
    },
    phonenum: {
      right: 85,
      bottom: 2,
      flexDirection: 'row'
    }
})