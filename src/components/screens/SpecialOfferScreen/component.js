import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import EListThumbnail from '../../elements/list/EListThumbnail';
import EText from '../../elements/EText';
import EList from '../../elements/list/EList';
import { actions } from "../../../redux/actions";
import { getStore } from "../../../../App";
const image = [
  {

    source: require('../../../../res/image19.png'),
  },
  {

    source: require('../../../../res/image19.png'),
  },
  {

    source: require('../../../../res/image19.png'),
  },
  {

    source: require('../../../../res/image19.png'),
  },
],
  search = [
    {
      source: require('../../../../res/search-icon-black.png'),
      title: 'Search...'
    }
  ]

export default class SpecialOfferComponent extends Component {

  componentDidMount() {
    getStore().dispatch(actions.getSpecialOffer());
  }

  render() {
    const userProps = {
      style: styles.user,
      text: 'Hey Yumi'
    },
      headerProps = {
        style: styles.header,
        text: 'We have promotions and deals from our specialty stores lined up for you.'
      },
      searchProps = {
        style: styles.search,
        text: 'Search...'
      },
      tittleContentProps = {
        style: styles.tittleContent,
        text: 'SPECIAL OFFER'
      },
      ContentProps = {
        style: styles.content,
        text: 'Circle K always brings you new, special, attractive and exciting promotions, from Monthly Promotions, Cheap Prices to daily meals that you cant miss it '
      }



    return (
      <BaseScreen>
        <ScrollView>
          <View style={styles.view}>
            <View style={styles.header}>
              <EText {...userProps} />
              <EText {...headerProps} />
              <EList data={search} />
              <View style={styles.content}>
                <EText {...tittleContentProps} />
                <EText {...ContentProps} />
                <EListThumbnail style={styles.img} data={image} />
              </View>
            </View>
          </View>
        </ScrollView>
      </BaseScreen>
    )
  }

}
