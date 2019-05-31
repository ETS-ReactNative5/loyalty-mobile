import RESTFull from '../RESTFull';
import API from '../../commons/API';
import _ from 'lodash';


export default StoreServices = {

  getListStores: () => {  
    return RESTFull.get(API.doStores);
  },

  getListLocation: (address) => {
    return RESTFull.get(API.doGoogleMapAPI, {address: JSON.stringify(address)})
  },
}