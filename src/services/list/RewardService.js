import RESTFull from '../RESTFull';
import API from '../../commons/API';
import _ from 'lodash';


export default RewardServices = {

  getVouchers: () => {  
    return RESTFull.get(API.doVoucher);
  },

  updateVoucherAvailables: (loyaltyProgramId, uAvailables) => {
    return RESTFull.put(API.doVoucher, JSON.stringify(loyaltyProgramId, uAvailables) )
  },

  getHistoryVouchers: () => {
    return RESTFull.get(API.doHistoryVoucher);
  }

}
