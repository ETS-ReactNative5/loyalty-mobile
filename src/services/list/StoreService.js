import RESTFull from '../RESTFull';
import API from '../../commons/API';
import _ from 'lodash';


export default StoreServices = {

  getListStores: (productId, storeName) => {  
    return RESTFull.get(API.doStores, {productId, storeName, address: '', phone: ''});
  },

  getListLocation: (address) => {
    return RESTFull.get(API.doGoogleMapAPI, {address: JSON.stringify(address)})
  },
}