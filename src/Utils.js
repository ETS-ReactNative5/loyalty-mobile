/*
*
@author tri.tran on 2/18/19
*
*/
import {
  BackHandler,
  Alert,
  Platform
} from 'react-native'
import moment from 'moment';
import {getStrings} from "./Strings";
import {getStore} from "../App";
import {actions} from "./redux/actions/Actions";
import {appScreenName, PAGE_SIZE} from "./Constants";
import {NavigationActions} from 'react-navigation';
import _ from 'lodash';

export const isEmpty = (obj) => {
  if(typeof obj === 'undefined' || obj === null || _.isEmpty(obj)) {
    return true
  }
  return false
}

export const isEmail = (email) => {
  if (email.length <= 0)
    return false
  let regex = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$"
  return email.match(regex)
}

function showDialogExitApp() {
  // console.log('ok dialog')
  Alert.alert(
    '',
    'Do you want to exit app',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => BackHandler.exitApp()},
    ],
    {cancelable: false},
  );
}

export const goBack = () => {
  const screenState = getStore().getState().apps.appScreens
  var screenRouteName = screenState.routes[screenState.index].routeName
  switch (screenRouteName) {
    case appScreenName.home:
    case appScreenName.login:
      if (Platform.OS === 'android')
        showDialogExitApp()
      break
    default:
      getStore().dispatch(NavigationActions.back({key: screenState.routes[screenState.routes.length - 1].key}))
    break
  }

}

export const goBackToHome = () => {
  var screenState = getStore().getState().apps.appScreens
  if (screenState.routes.length > 2) {
    for (let i = 0; i < screenState.routes.length; i++) {
      let route = screenState.routes[i]
      if (route.routeName === appScreenName.home && (i + 1) < screenState.routes.length) {
        let fromRoute = screenState.routes [i + 1]
        getStore().dispatch(NavigationActions.back({key: fromRoute.key}))
        break;
      }
    }

  }
}

export const showErrorDialogCanNotTouchOver = (message, buttonText, onPress) => {
  let errorDialogProps = {
    canTouchOver: false,
    contentText: message,
    buttonText: buttonText ? buttonText : getStrings().noticedDialogButton,
    title: getStrings().error,
    onPress: onPress
  };
  getStore().dispatch(actions.showNoticedDialog(errorDialogProps))
}

export const showErrorDialogCanTouchOver = (message, buttonText, onPress) => {
  let errorDialogProps = {
    canTouchOver: true,
    contentText: message,
    buttonText: buttonText ? buttonText : getStrings().noticedDialogButton,
    title: getStrings().error,
    onPress: onPress
  };
  getStore().dispatch(actions.showNoticedDialog(errorDialogProps))
}

export const showMessage = (message) => {
  let toastMessageRandom = Math.random()
	return getStore().dispatch(actions.toastMessage(message, toastMessageRandom))
}

export const showSuccessMessage = () => {
  let messageRandom = Math.random()
  getStore().dispatch(actions.toastMessage('Successful!', messageRandom))
}

export function getMaxPage(totalItem) {
  if (totalItem % PAGE_SIZE === 0)
    return Math.floor(totalItem / PAGE_SIZE)
  else
    return Math.floor(totalItem / PAGE_SIZE) + 1
}

export function guid() {
  const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let str = '';
  for (let i = 0; i < 36; i += 1) {
    str += ((i === 8 || i === 13 || i === 18 || i === 23) ? '-' : chars[Math.floor(Math.random() * chars.length)]);
  }
  ;
  return str;
}

export function getDateByFormat(date, format) {
  const wrapped = moment(date).local()
  const dt = wrapped.format(format);
  return dt;
}

export function deepCopy(oldObject) {
  var newObject = JSON.parse(JSON.stringify(oldObject));
  return newObject

}
