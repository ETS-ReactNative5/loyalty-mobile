import _ from 'lodash'

export default class Utils {

  static isEmpty(obj) {
    return typeof obj == 'undefined' || obj == null ||  _.isEmpty(obj)
  }

  static equalsStatusAppointment(sap1, sap2) {
    return JSON.stringify(sap1) == JSON.stringify(sap2)
  }

  static formatString(text, _arguments) {
    if(this.isEmpty(_arguments)) {
      return text;
    }
    for (k in _arguments) {
      text = text.replace("{" + k + "}", _arguments[k])
    }
    return text;
  }

  static captializeText(text) {
    let _text = text.toLowerCase()
    return _text.charAt(0).toUpperCase() + _text.substring(1, _text.length)
  }

  static formatCurrency(currency) {
    currency = _.isNumber(currency) ? currency : parseFloat(currency)
    return currency.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

}

