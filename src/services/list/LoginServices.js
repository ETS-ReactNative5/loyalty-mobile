import AsyncStorage from '@react-native-community/async-storage';
import RESTFull from '../RESTFull';
import API from '../../commons/API';
import {isEmpty} from '../../commons/Utils';
import _ from 'lodash';
import { TOKEN_KEY } from '../../commons/Constants';
import Storage from '../../commons/Storage';


export default LoginServices = {

  doLogin: (email, pass) => {
    let body = JSON.stringify({
      email: email,
      password: pass
    });
    return RESTFull.post(API.doLogin, body)
  },

  doLogout: () => {
    try {
      AsyncStorage.clear();
      return {error: 0, message: 'Log out successfully!'}
    } catch(e) {
      console.error('Error:', e);
      return {error: -1, message: e}
    }
  },

  autoLogin: async () => {
    return await Storage.getToken()
  },

  getProfile: () => {
    return RESTFull.get(API.doProfile);
  }

}
