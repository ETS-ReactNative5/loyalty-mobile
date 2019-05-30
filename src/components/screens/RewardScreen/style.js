/*
*
@author tri.tran on 2/15/19
*
*/

import {StyleSheet} from 'react-native'
import { appStyleConstants } from '../../../commons/Constants';

export default StyleSheet.create({
    rewardHeader: {
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',      
      borderBottomWidth: 3,
      borderBottomColor: '#F98608',
      marginHorizontal: appStyleConstants.NORMAL_SCREEN_MARGIN,
      marginTop: -20,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    titleView: {

    },
    name: {
      fontSize: 18,
      color: '#000000',
    },
    thankyou: {
      fontSize: 14,
      color: '#000000',
      paddingVertical: 5,
    },
    segmentView: {
      flexDirection: 'row',
      borderColor: '#BDBDBD',
      borderWidth: 1,
      borderRadius: 10,
      height: 30,
    },
    segment: (isActive) => {
      return isActive 
      ? {
        backgroundColor: '#EF3026',
        borderWith: 1,
        borderColor: '#BDBDBD',
        borderRadius: 10,
        paddingHorizontal: 10,
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'center',
      }
      : {
        paddingHorizontal: 10,
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'center',
      }
    },
    title: (isActive) => {
      return {
        color: isActive ? '#FFFFFF' : '#000000',
        fontSize: 14,
      }
    }
})