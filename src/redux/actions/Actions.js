/*
*
@author tri.tran on 1/29/19
*
*/

import ActionTypes from "./ActionTypes";

export const actions = {
  //put all actions
  onInternetConnectionChange(status) {
    return {
      type: ActionTypes.ON_INTERNET_CONNECTION_CHANGE,
      status
    }
  },
  doLogin(email, pass) {
    return {
      type: ActionTypes.DO_LOGIN,
      email, pass,
    }
  },
  doLogout() {
    return {
      type: ActionTypes.DO_LOGOUT
    }
  },
  saveAutoLogin(email, pass) {
    return {
      type: ActionTypes.SAVE_AUTO_LOGIN,
      email,
      pass
    }
  },
  getAutoLogin() {
    return {
      type: ActionTypes.GET_AUTO_LOGIN
    }
  },
  showNoticedDialog(props) {
    return {
      type: ActionTypes.SHOW_NOTICED_DIALOG,
      props
    }
  },
  hideNoticedDialog() {
    return {
      type: ActionTypes.HIDE_NOTICED_DIALOG,
    }
  },
  getListAppointment(status, dateStart, dateEnd, page) {
    return {
      type: ActionTypes.GET_APPOINTMENT,
      page,
      status,
      dateStart,
      dateEnd
    }
  },
  getListHistoryAppointment(currentPage, pageSize) {
    return {
      type: ActionTypes.GET_HISTORY_APPOINTMENT,
      currentPage,
      pageSize
    }
  },
  putUpdateStaff(params) {
    return {
      type: ActionTypes.UPDATE_STAFF,
      params
    }
  },
  putChangePassword(params) {
    return {
      type: ActionTypes.CHANGE_PASSWORD,
      params
    }
  },
  postForgotPassword(params, screen) {
    return {
      type: ActionTypes.FORGOT_PASSWORD,
      params,
      screen
    }
  },
  getBookingDetail(orderId) {
    return {
      type: ActionTypes.GET_BOOKING_DETAIL,
      orderId
    }
  },
  changeStateBooking(orderId, stateChange) {
    return {
      type: ActionTypes.CHANGE_STATE_BOOKING,
      orderId,
      stateChange
    }
  },
  getComments(orderId) {
    return {
      type: ActionTypes.GET_COMMENTS,
      orderId
    }
  },
  postComment(params) {
    return {
      type: ActionTypes.POST_COMMENT,
      params
    }
  },
  getHistoryState(orderId) {
    return {
      type: ActionTypes.GET_HISTORY_STATE,
      orderId
    }
  },
  updateDeviceToken(token) {
    return {
      type: ActionTypes.UPDATE_DEVICE_TOKEN,
      token,
    }
  },
  getNotifications(page, pageSize) {
    return {
      type: ActionTypes.GET_NOTIFICATIONS,
      page,
      pageSize,
    }
  },
  readAllNotification() {
    return {
      type: ActionTypes.READ_ALL_NOTIFICATION,
    }
  },
  readNotification(id) {
    return {
      type: ActionTypes.READ_NOTIFICATION,
      id
    }
  },
  changeNotificationUnread(isAdd) {
    return {
      type: ActionTypes.CHANGE_NOTIFICATION_UNREAD,
      isAdd
    }
  },
  toastMessage(message, messageRandom) {
    return {
      type: ActionTypes.TOAST_MESSAGE,
      message,
      messageRandom
    }
  },
  getAppointmentNoti() {
    return {
      type: ActionTypes.GET_APPOINTMENT_NOTI,
    }
  },
}
