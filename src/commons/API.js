export const API_DOMAIN = 'http://127.0.0.1:3000';
export const API_VERSION = '';
const API_HOST = API_DOMAIN + API_VERSION;

export default APIs = {

    doAppData: API_HOST + '/app-data',

    doLogin: API_HOST + '/login',

    doLogout: API_HOST + '/logout',

    doProfile: API_HOST + '/profile',

    doCategories: API_HOST + '/product-categories',

    doSpecialOffer: API_DOMAIN + '/special-offer',

    doProduct: API_HOST + '/product',

    doStores: API_HOST + '/store',

    doGoogleMapAPI: API_HOST + '/googlemap',

    doVoucher: API_HOST + '/voucher',

    doHistoryVoucher: API_HOST + '/history-voucher',

}
