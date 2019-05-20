/*
*
@author tri.tran on 2/19/19
*
*/

import React, {Component} from 'react'
import {View} from 'react-native';
import {addNavigationHelpers, TabNavigator} from 'react-navigation'
import {addListener} from '../../../redux/stores/ReactNavigationRedux'
import ETabIcon from '../../elements/ETabIcon';
import EDisappearingTabBar from '../../elements/EDisappearingTabBar';
import ProductScreen from '../ProductScreen';
import SpecialOfferScreen from '../SpecialOfferScreen';
import SearchScreen from '../SearchScreen';
import RewardScreen from '../RewardScreen';
import MoreScreen from '../MoreScreen';
import EText from '../../elements/EText';

const getTabIconFocus = (focused, routeName, isNotified) => {
  switch (routeName) {
    case 'product':
      return focused ? <ETabIcon icon={require('../../../../res/home-icon-focus.png')}/>
        : <ETabIcon icon={require('../../../../res/home-icon.png')}/>
    case 'specialOffer':
      return focused ? <ETabIcon icon={require('../../../../res/gift-icon-focus.png')} isNotified={isNotified}/>
        : <ETabIcon icon={require('../../../../res/gift-icon.png')} isNotified={isNotified}/>
    case 'search':
      return focused ? <ETabIcon icon={require('../../../../res/search-icon-focus.png')}/>
        : <ETabIcon icon={require('../../../../res/search-icon.png')}/>
    case 'reward':
      return focused ? <ETabIcon icon={require('../../../../res/reward-icon-focus.png')} isNotified={isNotified}/>
        : <ETabIcon icon={require('../../../../res/reward-icon.png')} isNotified={isNotified}/>
    case 'more':
      return focused ? <ETabIcon icon={require('../../../../res/more-icon-focus.png')} isNotified={isNotified}/>
        : <ETabIcon icon={require('../../../../res/more-icon.png')} isNotified={isNotified}/>
    default:
      return
  }
}

const getTextFocus = (focused, routeName) => {
  switch (routeName) {
    case 'product':
      return focused ? <EText text={'Home'} style={{color: '#FFFFFF'}} />
        : <EText text={'Home'} style={{color: '#FFFFFF', opacity: 0.8}} />
    case 'search':
      return focused ? <EText text={'Search'} style={{color: '#FFFFFF'}} />
      : <EText text={'Search'} style={{color: '#FFFFFF', opacity: 0.8}} />
    case 'specialOffer':
      return focused ? <EText text={'Special'} style={{color: '#FFFFFF'}} />
      : <EText text={'Special'} style={{color: '#FFFFFF', opacity: 0.8}} />
    case 'reward':
      return focused ? <EText text={'Reward'} style={{color: '#FFFFFF'}} />
      : <EText text={'Reward'} style={{color: '#FFFFFF', opacity: 0.8}} />
    case 'more':
      return focused ? <EText text={'More'} style={{color: '#FFFFFF'}} />
      : <EText text={'More'} style={{color: '#FFFFFF', opacity: 0.8}} />
    default:
      return
  }
}

export const HomeTabNavigation = TabNavigator(
  {
    product: {screen: ProductScreen},
    specialOffer: {screen: SpecialOfferScreen},
    search: {screen: SearchScreen},
    reward: {screen: RewardScreen},
    more: {screen: MoreScreen},
  },
  {
    navigationOptions: ({navigation, screenProps}) => ({
      tabBarIcon: ({focused}) => {
        const isNotified = screenProps.totalUnread > 0
        const {routeName} = navigation.state;

        return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {getTabIconFocus(focused, routeName, isNotified)}
            {getTextFocus(focused, routeName)}
          </View>
        )
      }
    }),
    swipeEnabled: false,
    animationEnabled: false,
    configureTransition: () => {
    },
    backBehavior: 'none',

    tabBarPosition: 'bottom',
    tabBarComponent: EDisappearingTabBar,
    tabBarOptions: {
      style: {
        backgroundColor: '#F98608',
        height: 50,
      },
      showLabel: false
    },
  }
)


export default class HomeComponent extends Component {
  render() {
    const {dispatch, navTab, totalUnread} = this.props;
    return (
      <HomeTabNavigation screenProps={{
        totalUnread,
      }}
       navigation={addNavigationHelpers({dispatch, state: navTab, addListener})}/>
    )
  }
}
