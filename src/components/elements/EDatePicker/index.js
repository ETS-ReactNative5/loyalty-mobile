import React, { Component } from "react";
import {View, PanResponder } from "react-native";
import styles from './style'
import PropTypes from 'prop-types'
import DatePicker from 'react-native-datepicker'
import EText from "../EText";

export default class EDatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
    };
  }


   componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e) => {console.log('onStartShouldSetPanResponder'); return true;},
      onMoveShouldSetPanResponder: (e) => {console.log('onMoveShouldSetPanResponder'); return true;},
      onPanResponderGrant: (e) => console.log('onPanResponderGrant'),
      onPanResponderMove: (e) => console.log('onPanResponderMove'),
      onPanResponderRelease: (e) => console.log('onPanResponderRelease'),
      onPanResponderTerminate: (e) => console.log('onPanResponderTerminate')
    });
  }

  render() {
    
  let   
        viewProps = {
            style: styles.container,
    },
        inputProps ={ 
                    style: this.props.style,
                    mode: this.props.mode,
                    placeholder: this.props.placeholder,
                    format: this.props.format,
                    date: this.props.date,
                    onDateChange: this.props.onDateChange    
                    // minDate: this.props.minDate,
                    // maxDate: this.props.maxDate,
                    // confirmBtnText: this.props.confirmBtnText,
                    // cancelBtnText: this.props.cancelBtnText,
                }
    return (
          <View {...viewProps}>
            <DatePicker 
            {...inputProps}
            date= {this.state.date}
            onDateChange={(date) => {this.setState({date: date});}}
             />
            <EText>{this.state.date}</EText>
          </View>
        );
    }
}

EDatePicker.propTypes = {
    date: PropTypes.string,
    style: PropTypes.object,
    format: PropTypes.string,
    mode: PropTypes.string,
    placeholder: PropTypes.string,
    // confirmBtnText: PropTypes.string,
    // cancelBtnText: PropTypes.string,
    // minDate: PropTypes.string,
    // maxDate: PropTypes.string,
    onDateChange: PropTypes.func,
}

EDatePicker.defaultProps = {
  style: null,
  date: '',
  mode: 'date',
  placeholder: null ,
  format:'DD-MM-YYYY',
  // confirmBtnText:'Confirm',
  // cancelBtnText:'Cancel',
onDateChange: () => {}
  
}
