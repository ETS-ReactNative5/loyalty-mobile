/*
*
@author tri.tran on 1/29/19
*
*/

import {ACTION_TYPE} from "./type";

export const actions = {
  //put all actions
  onInternetConnectionChange(status) {
    return {
      type: ACTION_TYPE.ON_INTERNET_CONNECTION_CHANGE,
      status
    }
  },
  doAppData(token) {
    return {
      type: ACTION_TYPE.DO_APP_DATA,
      token
    }
  },
  doLogin(email, pass) {
    return {
      type: ACTION_TYPE.DO_LOGIN,
      email, pass,
    }
  },
  doLogout() {
    return {
      type: ACTION_TYPE.DO_LOGOUT
    }
  },
  getAutoLogin() {
    return {
      type: ACTION_TYPE.DO_AUTO_LOGIN
    }
  },
  getProfile(token) {
    return {
      type: ACTION_TYPE.GET_PROFILE,
      token
    }
  },
  getProductCategories() {
    return {
      type: ACTION_TYPE.GET_PRODUCT_CATEGORIES
    }
  },
  showNoticedDialog(props) {
    return {
      type: ACTION_TYPE.SHOW_NOTICED_DIALOG,
      props
    }
  },
  hideNoticedDialog() {
    return {
      type: ACTION_TYPE.HIDE_NOTICED_DIALOG,
    }
  },
}
