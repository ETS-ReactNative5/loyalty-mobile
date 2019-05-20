/*
*
@author tri.tran on 2/18/19
*
*/

import {StyleSheet} from 'react-native'
import { appStyleConstants } from '../../../Constants';

export default StyleSheet.create({
    container: {
        height: appStyleConstants.UI_ITEM_HEIGHT,
        backgroundColor: 'rgba(54, 198, 211, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: appStyleConstants.UI_BORDER_RADIUS
    },
    text: {
        color: 'white',
        fontSize: appStyleConstants.mediumFont,
    },
    validate: {
        borderWidth: 1,
        borderColor: '#D93A53'
    },
})