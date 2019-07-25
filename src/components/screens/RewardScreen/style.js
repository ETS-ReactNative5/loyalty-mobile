/*
*
@author tri.tran on 2/15/19
*
*/

import {StyleSheet} from 'react-native'
import { appStyleConstants, deviceWidth } from '../../../commons/Constants';

const WIDTH_SEGMENT = (deviceWidth - appStyleConstants.NORMAL_SCREEN_MARGIN*2) / 3;

export default StyleSheet.create({
    rewardHeader: {
      backgroundColor: '#FFFFFF',
      borderBottomWidth: 1,
      borderBottomColor: '#F98608',
      marginHorizontal: appStyleConstants.NORMAL_SCREEN_MARGIN,
      marginTop: -20,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    titleView: {
      flexDirection: 'row', 
      alignItems: 'center',  
      paddingVertical: 10,   
    },
    name: {
      fontSize: 25,
      color: '#F98608',
      fontWeight: 'bold',
    },
    thankyou: {
      fontSize: 14,
      color: '#828282',
      paddingHorizontal: 5,
      fontWeight: 'bold',
    },
    segmentView: {
      flexDirection: 'row',
      borderColor: '#BDBDBD',
      height: 30,
      width: '100%',
      justifyContent: 'space-between',
    },
    segment: (isActive) => {
      return isActive 
      ? {
        width: WIDTH_SEGMENT,
        backgroundColor: '#F98608',
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'center',
      }
      : {
        width: WIDTH_SEGMENT,
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