import { getStore } from "../../App";
import { getStrings } from "../commons/Strings";
import _ from 'lodash';
import { isEmpty } from "../commons/Utils";

const TIME_OUT = 30000;

function handling(_method, url, requestData) {
	let authorization = (getStore().getState() && getStore().getState().users && getStore().getState().users.accessToken)
		?
		"Bearer " + getStore().getState().users.accessToken : null
	// let authorization = null
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
				let parameter = '?'
				_.keys(requestData).forEach((param, key) => {
					parameter += '&' + param + '=' + requestData[param]
				})
				url += parameter
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
					if (_.isString(responseJson) && _.includes(responseJson, 'Not Found') > -1) {
						reject({
							error: -1,
							message: 'Request Not Found!'
						})
					}
					let resultError = ''
					if(_.has(responseJson, 'error')) {
						const details = _.get(responseJson, 'details', [])
						if(!_.isEmpty(details) && details.length > 0) {
							_.forEach(details, (detail, _dkey) => {
								const violations = _.get(detail, 'field_violations', [])
								if(!_.isEmpty(violations)) {
									resultError = _.get(violations[0], 'description', '')
									return
								}
							})
						}
						if(_.isEmpty(resultError)) {
							resultError = _.get(responseJson, 'message', '')
						}
						reject({error: -1, message: resultError})
					}
					resolve(responseJson)
				})
				.catch(error => {
					reject({
						error: -1,
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
	let store = getStore();
	return store.getState() && store.getState().apps && store.getState().apps.appCommons && store.getState().apps.appCommons.internetConnection;
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