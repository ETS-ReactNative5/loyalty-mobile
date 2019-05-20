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
  saveAutoLogin(email, pass) {
    return {
      type: ACTION_TYPE.SAVE_AUTO_LOGIN,
      email,
      pass
    }
  },
  getAutoLogin() {
    return {
      type: ACTION_TYPE.GET_AUTO_LOGIN
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
  getListAppointment(status, dateStart, dateEnd, page) {
    return {
      type: ACTION_TYPE.GET_APPOINTMENT,
      page,
      status,
      dateStart,
      dateEnd
    }
  },
  getListHistoryAppointment(currentPage, pageSize) {
    return {
      type: ACTION_TYPE.GET_HISTORY_APPOINTMENT,
      currentPage,
      pageSize
    }
  },
  putUpdateStaff(params) {
    return {
      type: ACTION_TYPE.UPDATE_STAFF,
      params
    }
  },
  putChangePassword(params) {
    return {
      type: ACTION_TYPE.CHANGE_PASSWORD,
      params
    }
  },
  postForgotPassword(params, screen) {
    return {
      type: ACTION_TYPE.FORGOT_PASSWORD,
      params,
      screen
    }
  },
  getBookingDetail(orderId) {
    return {
      type: ACTION_TYPE.GET_BOOKING_DETAIL,
      orderId
    }
  },
  changeStateBooking(orderId, stateChange) {
    return {
      type: ACTION_TYPE.CHANGE_STATE_BOOKING,
      orderId,
      stateChange
    }
  },
  getComments(orderId) {
    return {
      type: ACTION_TYPE.GET_COMMENTS,
      orderId
    }
  },
  postComment(params) {
    return {
      type: ACTION_TYPE.POST_COMMENT,
      params
    }
  },
  getHistoryState(orderId) {
    return {
      type: ACTION_TYPE.GET_HISTORY_STATE,
      orderId
    }
  },
  updateDeviceToken(token) {
    return {
      type: ACTION_TYPE.UPDATE_DEVICE_TOKEN,
      token,
    }
  },
  getNotifications(page, pageSize) {
    return {
      type: ACTION_TYPE.GET_NOTIFICATIONS,
      page,
      pageSize,
    }
  },
  readAllNotification() {
    return {
      type: ACTION_TYPE.READ_ALL_NOTIFICATION,
    }
  },
  readNotification(id) {
    return {
      type: ACTION_TYPE.READ_NOTIFICATION,
      id
    }
  },
  changeNotificationUnread(isAdd) {
    return {
      type: ACTION_TYPE.CHANGE_NOTIFICATION_UNREAD,
      isAdd
    }
  },
  toastMessage(message, messageRandom) {
    return {
      type: ACTION_TYPE.TOAST_MESSAGE,
      message,
      messageRandom
    }
  },
  getAppointmentNoti() {
    return {
      type: ACTION_TYPE.GET_APPOINTMENT_NOTI,
    }
  },
}
