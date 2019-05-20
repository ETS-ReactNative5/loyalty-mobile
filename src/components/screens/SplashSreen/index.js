/*
*
@author tri.tran on 1/29/19
*
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import SplashComponent from "./component";
import { actions } from '../../../redux/actions';

const mapStateToProps = (state) => {
    return {
        //map state from store to component props
    }
}

const mapDispatchToProps = (dispatch) => {
    //map dispatch to component props
    return {...{dispatch: dispatch}, ...bindActionCreators(actions, dispatch)};
}

class SplashContainer extends Component {
    render() {
        return (
            <SplashComponent {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer)