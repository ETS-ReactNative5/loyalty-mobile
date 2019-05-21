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
import NetInfo from '@react-native-community/netinfo';
import {addNavigationHelpers, StackNavigator} from 'react-navigation'
import { addListener } from '../redux/stores/ReactNavigationRedux'
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
    }

    handleConnectionChange = (isConnected) => {
        this.props.onInternetConnectionChange(isConnected)
    }

    onBackPress = () => {
        goBack()
        return true;
    };

    render() {
        const {dispatch, appScreen} = this.props;
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
