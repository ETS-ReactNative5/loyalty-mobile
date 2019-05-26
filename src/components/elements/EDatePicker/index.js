import React, { Component } from "react";
import {View } from "react-native";
import styles from './style'
import PropTypes from 'prop-types'
import DatePicker from 'react-native-datepicker'

export default class EDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: ''
    };
  }
  
  render() {
    
  let   
        viewProps = {
            style: styles.container       
            
    },
        inputProps ={ 
                    style: this.props.style,
                    mode: this.props.mode,
                    placeholder: this.props.placeholder,
                    format: this.props.format,
                    minDate: this.props.minDate,
                    maxDate: this.props.maxDate,
                    confirmBtnText: this.props.confirmBtnText,
                    cancelBtnText: this.props.cancelBtnText,
                    onDateChange: this.props.onDateChange,
                    date: this.props.date,
                    getDateStr: this.props.date
                }
    return (
          <View {...viewProps}>
            <DatePicker {...inputProps} />
          </View>
        );
    }
}

EDatePicker.propTypes = {
    style: PropTypes.object,
    confirmBtnText: PropTypes.string,
    cancelBtnText: PropTypes.string,
    minDate: PropTypes.string,
    mode: PropTypes.enum,
    placeholder: PropTypes.string,
    maxDate: PropTypes.string,
    format: PropTypes.string,
    onDateChange: PropTypes.func,
    date: PropTypes.string,
    getDateStr: PropTypes.func
}

EDatePicker.defaultProps = {
  style: null,
  date: '',
  mode: 'date',
  placeholder:'Date Of Birth',
  format:'YYYY-MM-DD',
  // confirmBtnText:'Confirm',
  // cancelBtnText:'Cancel',
  onDateChange: () => {},
  getDateStr: () => {}
}