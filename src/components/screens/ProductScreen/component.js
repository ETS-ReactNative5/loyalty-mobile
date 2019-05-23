import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import { getStore } from '../../../../App';
import { actions } from '../../../redux/actions';
import EAvatar from '../../elements/EAvatar';

export default class ProductComponent extends Component {
  
  componentDidMount() {
    getStore().dispatch(actions.getProductCategories())
  }

  render() {
    
    const {categories} = this.props
    const avatarProps = {
      style: styles.avatar,

    }

    return (
      <BaseScreen>
        <EAvatar {...avatarProps} />
      </BaseScreen>
    )
  }

}
