/*
*
@author tri.tran on 2/19/19
*
*/

import React, {Component} from 'react'
import {addNavigationHelpers, TabNavigator} from 'react-navigation'
import {addListener} from '../../../redux/stores/ReactNavigationRedux'
import ProductScreen from '../ProductScreen';
import SpecialOfferScreen from '../SpecialOfferScreen';
import ETabIcon from '../../elements/ETabIcon';
import EDisappearingTabBar from '../../elements/EDisappearingTabBar';

export const HomeTabNavigation = TabNavigator(
  {
    product: {screen: ProductScreen},
    specialOffer: {screen: SpecialOfferScreen},
  },
  {
    navigationOptions: ({navigation, screenProps}) => ({
      tabBarIcon: ({focused}) => {
        const isNotified = screenProps.totalUnread > 0
        const {routeName} = navigation.state;
        switch (routeName) {
          case 'product':
            return focused ? <ETabIcon icon={require('../../../../res/home-active-ico.png')}/>
              : <ETabIcon icon={require('../../../../res/home-ico.png')}/>
          case 'specialOffer':
            return focused ? <ETabIcon icon={require('../../../../res/apointment-active-ico.png')} isNotified={isNotified}/>
              : <ETabIcon icon={require('../../../../res/appointment-ico.png')} isNotified={isNotified}/>
          default:
            return
        }
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
        backgroundColor: '#212121',
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
