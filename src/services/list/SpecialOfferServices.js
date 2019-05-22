import AsyncStorage from '@react-native-community/async-storage';
import RESTFull from '../RESTFull';
import API from '../../commons/API';
import {isEmpty} from '../../commons/Utils';
import _ from 'lodash';
import { TOKEN_KEY } from '../../commons/Constants';


export default SpecialOfferServices = {

  special: () => {
    return RESTFull.get(API.doSpecialOffer)
  },

}
