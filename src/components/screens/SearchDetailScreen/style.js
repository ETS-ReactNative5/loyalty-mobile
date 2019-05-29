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
    mapView: {
      height: 400,
      width: 380,
    },
    detailView: {
      color: '#000000',
      fontSize: 12,
      width: '80%',
      right: 20,
    },
    serviceView: {
      height: 40,
      width: 120,
      right: 120,
      flexDirection: 'row'
    },
    phone: {
      flexDirection: 'row',
      right: 100,
      height: 30,
      paddingTop: 3,
    },
    phoneNumberView: {
      color: 'chocolate',
    },
    location: {
      flexDirection: 'row',
      right: 125,
      height: 50
    },
    locationIconView: {
      height: 30,
      width:30
    },
    getDirectionsView: {
      color: 'chocolate',
      paddingTop: 5,
    }

})