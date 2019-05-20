/*
*
@author tri.tran on 1/29/19
*
*/

import React, { Component } from 'react';
import {
    View,
    Easing,
    AppState,
    BackHandler,
} from 'react-native'
import firebase from 'react-native-firebase';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';
import {addNavigationHelpers, NavigationActions, StackNavigator} from 'react-navigation'
import { addListener } from '../redux/stores/ReactNavigationRedux'
import {getStore} from "../../App";
import {actions} from "../redux/actions";
import {appScreenName} from "../commons/Constants";
import { goBack } from '../commons/Utils';
import LoginScreen from '../components/screens/LoginScreen';
import HomeScreen from '../components/screens/HomeScreen';
import SplashSreen from '../components/screens/SplashSreen';
import AboutMeScreen from '../components/screens/AboutMeScreen';

let fcmToken = null;

export function getFcmToken() {
    return fcmToken;
}

// Create app stack navigator
export const AppNavigator = StackNavigator({
    splash: { screen: SplashSreen },
    login: { screen: LoginScreen },
    aboutme: {screen: AboutMeScreen},
    home: { screen: HomeScreen },
  },
	{
		navigationOptions: {
			header: null,
		},
		transitionConfig: () => ({
			transitionSpec: {
				duration: 0,
				easing: Easing.linear,
			},
			screenInterpolator: (props) => {
				return fade(props)
			}
		})
	})

// create fade effect for App transition
const fade = (props) => {
	const { position, scene } = props

	const index = scene.index

	const translateX = 0
	const translateY = 0

	const opacity = position.interpolate({
		inputRange: [index - 0.7, index, index + 0.7],
		outputRange: [0.3, 1, 0.3]
	})

	return {
		opacity,
		transform: [{ translateX }, { translateY }]
	}
}

export default class RootAppComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            appState: "active"
        }
    }

    componentDidMount() {
        NetInfo.isConnected.fetch().then(
            (isConnected) => {
                NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange)
            }
        );
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
        AppState.addEventListener('change', this.handleAppStateChange);
        this.checkPermission();
        this.createNotificationListeners(); //add this line
    }

    handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            //do something
        }
        this.setState({appState: nextAppState});
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
        AppState.removeEventListener('change', this.handleAppStateChange);
        this.notificationListener();
        this.notificationOpenedListener();
    }

    handleConnectionChange = (isConnected) => {
        this.props.onInternetConnectionChange(isConnected)
    }

    onBackPress = () => {
        goBack()
        return true;
    };

    async checkPermission() {
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            this.getToken();
        } else {
            this.requestPermission();
        }
    }

    async getToken() {
        fcmToken = await AsyncStorage.getItem('fcmToken');
        if (!fcmToken) {
            fcmToken = await firebase.messaging().getToken();
            if (fcmToken) {
                // user has a device token
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        }
    }

    async requestPermission() {
        try {
            await firebase.messaging().requestPermission();
            // User has authorised
            this.getToken();
        } catch (error) {
            // User has rejected permissions
        }
    }

    async createNotificationListeners() {
        /*
        * Triggered when a particular notification has been received in foreground
        * */
        this.notificationListener = firebase.notifications().onNotification((notification) => {
          getStore().dispatch(actions.changeNotificationUnread(true))
          // console.log(notificationOpen.notification)
        });

        /*
        * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
        * */
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
            const { title, body } = notificationOpen.notification;
            this.handleNotificationClick(notificationOpen.notification.data)
          // console.log(notificationOpen.notification)
        });

        /*
        * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
        * */
        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            setTimeout(()=> {
                this.handleNotificationClick(notificationOpen.notification.data)
            }, 2000)
        }
        /*
        * Triggered for data only payload in foreground
        * */
        this.messageListener = firebase.messaging().onMessage((message) => {
            //process data message
          // console.log(message)
          getStore().dispatch(actions.changeNotificationUnread(true))
        });
    }

    handleNotificationClick = (data) => {
      if(!data) return
      const {TargetScreen, Notification} = data
      if(TargetScreen === 'order' && Notification) {
        const notiObj = JSON.parse(Notification)
        getStore().dispatch(actions.readNotification(notiObj.Id))
        getStore().dispatch(actions.getComments(notiObj.OrderId))
        getStore().dispatch(actions.getBookingDetail(notiObj.OrderId))
        getStore().dispatch(NavigationActions.navigate({
          params: { appointmentId: notiObj.OrderId },
          routeName: appScreenName.bookingDetail,
        }))

      }
    }

    render() {
        const {dispatch, appScreen} = this.props;
        const screenIndex = getStore().getState().apps.appScreens.index
        // console.log("Current Index Screen:", screenIndex)
        return (
            <View style={{
                flex: 1
            }}>
                <AppNavigator
                    navigation={addNavigationHelpers({dispatch, state: appScreen, addListener})}/>
            </View>
        );
    }
}
