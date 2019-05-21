import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import EImage from '../EImage';
import EText from '../EText';
import styles from './style';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class EItemThumbnailList extends Component {

  pressItem = () => {
    this.props.onPress()
  }

  render() {
    const {image, source, title, brief} = this.props
    const viewProps = {
      style: styles.view,
      onPress: () => {this.pressItem()}
    },
    imageProps = _.isEmpty(image) ? {style: styles.imageIcon, source} 
                                  : {style: styles.imageIcon, uri: image},
    describeProps = {
      style: styles.describe,
    },
    titleProps = {
      style: styles.title,
      text: title,
    },
    briefProps = {
      style: styles.brief,
      text: brief
    }
    return (
      <TouchableOpacity {...viewProps}>
        <EImage {...imageProps} />
        <View {...describeProps}>
          <EText {...titleProps} />
          <EText {...briefProps} />
        </View>
      </TouchableOpacity>
    )
  }

}

EItemThumbnailList.propTypes = {
  title: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  hasDescribe: PropTypes.bool.isRequired,
  source: PropTypes.number,
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func,
}

  // EItemThumbnailList.defaultProps = {
  //   title: 'Title name',
  //   brief: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
  //   hasDescribe: true,
  //   image: '',
  //   source: require('../../../../res/default-image.png'),
  //   onPress: () => {}
  // }