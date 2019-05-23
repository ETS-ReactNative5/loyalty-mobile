import RESTFull from '../RESTFull';
import API from '../../commons/API';
import _ from 'lodash';


export default LoginServices = {

  getData: (token) => {  
    return RESTFull.get(API.doAppData, {token})
  },

}