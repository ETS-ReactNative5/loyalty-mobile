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
    height: 20,
  },
  viewTitle: {
    width: deviceWidth - 100,
		alignItems: 'center',
  },
  text: {
    color: '#323259',
    fontSize: 18,
    textAlign: 'center',
  }
})