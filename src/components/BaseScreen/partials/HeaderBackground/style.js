import {StyleSheet} from 'react-native';
import { deviceWidth } from '../../../../Constants';

const percent = 160 / 375;

export default StyleSheet.create({
  view: {
    height: deviceWidth * percent,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  background: {
    width: '100%',
    height: deviceWidth * percent,
  }
})