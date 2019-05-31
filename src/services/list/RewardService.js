import RESTFull from '../RESTFull';
import API from '../../commons/API';
import _ from 'lodash';


export default RewardServices = {

  getVouchers: () => {  
    return RESTFull.get(API.doVoucher);
  },

  updateVoucherAvailables: (voucherId, availables) => {
    return RESTFull.put(API.doVoucher, JSON.stringify({voucherId, availables}))
  },

  getHistoryVouchers: () => {
    return RESTFull.get(API.doHistoryVoucher);
  }

}
