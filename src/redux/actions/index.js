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
  doAppData() {
    return {
      type: ACTION_TYPE.DO_APP_DATA
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
  getProfile() {
    return {
      type: ACTION_TYPE.GET_PROFILE
    }
  },
  getProductCategories() {
    return {
      type: ACTION_TYPE.GET_PRODUCT_CATEGORIES
    }
  },
  getProduct(name) {
    return {
      type: ACTION_TYPE.GET_PRODUCT,
      name
    }
  },
  getSpecialOffer() {
    return {
      type: ACTION_TYPE.GET_SPECIAL_OFFER
    }
  },
  doLikeProduct(productId) {
    return {
      type: ACTION_TYPE.DO_LIKE_PRODUCT,
      productId,
    }
  },
  doSearch(searchKey) {
    return {
      type: ACTION_TYPE.DO_SEARCH,
      searchKey
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
