import AsyncStorage from '@react-native-community/async-storage';
import CryptoJS from 'crypto-js'
import RESTFull from '../RESTFull';
import API from '../API';
import { AsyncStorageConstants, AES_KEY } from '../../commons/Constants';
import { getStore } from '../../../App';


export default LoginServices = {

  doLogin: (email, pass) => {
    let body = JSON.stringify({
      email: email,
      password: pass
    });
    return RESTFull.post(API.doLogin, body)
  },

  doSaveAutoLogin: async (email, pass) => {
    try {
      let encryptPassword = CryptoJS.AES.encrypt(
        JSON.stringify(pass),
        AES_KEY
      ).toString();
      let myAccount = {
        email: email,
        pass: encryptPassword
      };
      return await AsyncStorage.setItem(AsyncStorageConstants.autoLogin, JSON.stringify(myAccount))
    }catch (e) {
      return {
        error: -1,
        message: 'Cannot save info to auto login'
      }
    }
  },
  doGetAutoLogin: async () => {
    try {
      const result = await AsyncStorage.getItem(AsyncStorageConstants.autoLogin)
      if(result) {
        let myAccount = JSON.parse(result)
        myAccount.pass = JSON.parse(CryptoJS.AES.decrypt(myAccount.pass, AES_KEY).toString(CryptoJS.enc.Utf8));
        return myAccount
      }
      return {}
    }catch (e) {
      return {
        error: -1,
        message: 'Cannot get info to auto login'
      }
    }
  },
  doLogout: () => {
    let UID = getStore().getState().users.user.id
    let body = JSON.stringify({
      userID: UID
    });
    return RESTFull.post(API.doLogout, body)
  }
}
