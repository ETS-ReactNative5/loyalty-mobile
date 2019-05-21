import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './style';
import BaseScreen from '../../BaseScreen';
// import Elist from '../../elements/list/EList';
import EListThumbnail from '../../elements/list/EListThumbnail';
// import EItemThumbnailList from '../../elements/EItemList';
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
]
export default class SpecialOfferComponent extends Component {
  constructor(){
    super()
    this.state = {
        name: 'Yumi'
    }
  }
  render() {
    
    return (
      <BaseScreen>
      <ScrollView>
      <View style={styles.view}>
            <View style={styles.header}>
          <Text style={styles.headerText}>Hey {this.state.name} </Text>
          <Text>We have promotions and deals from our 
                  specialty stores lined up for you. </Text>
            <View style={styles.searchBar}>
              <Image source={require('../../../../res/search-icon-black.png')} />
              <Text>Search...</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.bigHeader}>SPECIAL OFFER</Text>
                <Text>Circle K always brings you new, special, attractive and exciting promotions, from Monthly Promotions, Cheap Prices to daily meals that you can't miss.</Text>
                {/* <Image source={require('../../../../res/image19.png')}/> */}
                {/* <Elist data={image} /> */}
                <EListThumbnail style={styles.img} data= {image} />
                    
            </View>
            </View>
        </View>
      </ScrollView>
       
      </BaseScreen>
    )
  }

}
