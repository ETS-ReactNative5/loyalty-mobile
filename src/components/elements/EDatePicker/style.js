import {StyleSheet} from 'react-native'
import {deviceWidth, appStyleConstants}  from "../../../commons/Constants";


export default StyleSheet.create ({
container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: appStyleConstants.UI_ITEM_HEIGHT,
    borderRadius: appStyleConstants.UI_BORDER_RADIUS,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'stretch'
   },
input: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    height: appStyleConstants.UI_ITEM_HEIGHT,
    marginLeft: appStyleConstants.LARGE_SCREEN_MARGIN,
    fontSize: appStyleConstants.mediumFont,
},
clearButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 18 + appStyleConstants.LARGE_SCREEN_MARGIN * 2,
    justifyContent: 'center',
    alignItems: 'center'
}
    
   })
