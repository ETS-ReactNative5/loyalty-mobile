import React, {Component} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './style';
import EItemThumbnailList from '../../EItemThumbnailList';

export default class EListThumbnail extends Component {

  get dataProps() {
    const {data} = this.props
    return {
      style: styles.list,
      renderItem: this.renderItem,
      keyExtractor: (item, _key) => {return _key.toString()},
      data: data
    }
  }

  renderItem = (itemData) => {
    return <EItemThumbnailList {...itemData.item} />
  }

  render() {
    return <FlatList {...this.dataProps} />
  }

}

EListThumbnail.propTypes = {
  data: PropTypes.array
}

// EListThumbnail.defaultProps = {
//   data: []
// }