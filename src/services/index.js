import LoginServices from './list/LoginServices';
import ProductServices from './list/ProductServices';
import AppDataService from './list/AppDataService';
import SpecialOfferServices from './list/SpecialOfferServices';
import StoreService from './list/StoreService';


export default services = {
  appData: AppDataService,
  login: LoginServices,
  product: ProductServices,
  specialOffer: SpecialOfferServices,
  store: StoreService,
}
