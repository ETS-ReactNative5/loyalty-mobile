export const API_DOMAIN = 'https://wewumbo.tpptechnology.com';
export const API_VERSION = '/api/v1';
const API_HOST = API_DOMAIN + API_VERSION;

export default APIs = {

    doLogin: API_HOST + '/user/login',

    doLogout: API_HOST + '/user/logout',

    doGetListAppointments: API_HOST + '/order-management/orders/current/staff',

    doGetListHistoryAppointments: API_HOST + '/staffs/orders/histories',

    doUpload: API_DOMAIN + '/api/upload',

    doUpdateProfileInfoStaff: API_HOST + '/user-management/users/profile',

    doChangePasswordStaff: API_HOST + '/user-management/users/change-password',

    doForgotPasswordStaff: API_HOST + '/auth/forgot-password/email',

    doGetBookingDetail: API_HOST + '/staffs/orders/{0}/details',

    doGetListCommentsByOrderId: API_HOST + '/staff/comment/comments/{0}',

    doPostCommentByOrderId: API_HOST + '/staff/comment/comments/{0}',

    doPutChangeStateBooking: API_HOST + '/staffs/orders/{0}/state/{1}',

    doGetHistoryStateoBooking: API_HOST + '/order/{0}/changes-history',

    updateDeviceToken: API_HOST + '/cloudmessage/devicetoken',

    getNotifications: API_HOST + '/cloudmessage/notifications?Paging.currentPage={0}&Paging.pageSize={1}',

    readAllNotification: API_HOST + '/cloudmessage/notifications/notified',

    readNotification: API_HOST + '/cloudmessage/notifications/{0}/isread',

    getAppointmentNoti: API_HOST + '/orders/notification',


}
