import React, {Component} from 'react';
import {View} from 'react-native';
import EText from '../EText';
import _ from 'lodash';

export default class EListPointsView extends Component {
  render() {
    const {data} = this.props
    const hasData = !_.isEmpty(data) && _.isArray(data)
    const size = data.length
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {hasData &&
        _.map(data, (point, k) => {
          const pointProps = {
            key: k,
            name: point.name,
            value: point.value,
            hasLastItem: k === size-1
          }
          return (
            <PointView {...pointProps} />
          )
        })
        }
      </View>
    )
  }
}

class PointView extends Component {
  render() {
    const {name, value, hasLastItem} = this.props
    return (
      <View style={{
        paddingHorizontal: 20, 
        alignItems: 'center', 
        marginVertical: 20,
        borderRightColor: hasLastItem ? null : '#BDBDBD',
        borderRightWidth: hasLastItem ? 0 : 1
      }}>
        <EText text={value} style={{color: '#000000', fontWeight: 'bold', fontSize: 18}} />
        <EText text={name} style={{marginTop: 10}} />
      </View>
    )
  }
}