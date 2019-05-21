import {StyleSheet} from 'react-native';
import { deviceWidth } from '../../../../commons/Constants';

const percent = 160 / 375;

export default StyleSheet.create({
  view: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
  },
  back: {
    marginTop: 5,
    height: 20,
  },
  searchText: {
    height: 30,
    width: deviceWidth - 100,
  },
   
  searchIcon: {
    marginTop: 5,
    height: 20,
  }
})