import { getStore } from "../../App";
import { getStrings } from "../commons/Strings";
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';
import { isEmpty } from "../commons/Utils";
import { ERROR_CODE, TOKEN_KEY } from "../commons/Constants";

const TIME_OUT = 30000;

function handling(_method, url, requestData) {
	let isSaveToken = _.includes(url, 'login')
	let authorization = (getStore().getState() && getStore().getState().users && getStore().getState().users.token)
		?
		"Bearer " + getStore().getState().users.token : null

	return Promise.race([
		new Promise((resolve, reject) => {
			if (!checkInternetConnection()) {
				const e = {
					error: -1,
					message: getStrings().noInternetConnection
				};
				reject(e);
			}
			if (_method === 'GET' && !isEmpty(requestData)) {
				if(_.includes(url, 'profile')) {
					authorization = isEmpty(authorization) ? "Bearer " + requestData.token : authorization
				} else {
					let parameter = '?'
					_.keys(requestData).forEach((param, key) => {
						parameter += '&' + param + '=' + requestData[param]
					})
					url += parameter
				}
			}
			return fetch(url, {
				method: _method,
				headers: {
					"Content-Type": "application/json",
					Authorization: authorization,
					"Cache-Control": "no-cache"
				},
				body: _method !== 'GET' ? requestData : null,
			})
				.then(response => {
					return response.json()
				})
				.then(responseJson => {
					const error = _.get(responseJson, 'error', ERROR_CODE.ERROR)
					if(error < 0) {
						reject({message: _.get(responseJson, 'message', 'No message')})
					}
					if(isSaveToken) {
						AsyncStorage.clear(() => {
							AsyncStorage.setItem(TOKEN_KEY, responseJson.data)
						})
					}
					resolve(responseJson);
				})
				.catch(error => {
					reject({
						message: error.toString() === 'TypeError: Network request failed' ? getStrings().noInternetConnection : error.toString()
					});
				});
		}),
		new Promise((resolve, reject) => {
			setTimeout(() => {
				let e = {
					error: -1,
					message: getStrings().timeOutError
				};
				reject(e);
			}, TIME_OUT);
		})
	]);
}

function checkInternetConnection() {
	return true
	// let store = getStore();
	// return store.getState() && store.getState().apps && store.getState().apps.appCommons && store.getState().apps.appCommons.internetConnection;
}

export default class RESTFull {
	
	static get = (url, parameters) => {
		return handling('GET', url, parameters)
	}

	static post = (url, body) => {
		return handling('POST', url, body)
	}

	static put = (url, body) => {
		return handling('PUT', url, body)
	}
	
}