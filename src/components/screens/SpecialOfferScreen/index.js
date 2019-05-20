/*
*
@author tri.tran on 1/29/19
*
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import SpecialOfferComponent from './component';
import { actions } from '../../../redux/actions/Actions';

const mapStateToProps = (state) => {
    return {
        //map state from store to component props
    }
}

const mapDispatchToProps = (dispatch) => {
    //map dispatch to component props
    return {...{dispatch: dispatch}, ...bindActionCreators(actions, dispatch)};
}

class SpecialOfferScreen extends Component {
    render() {
        return (
            <SpecialOfferComponent {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecialOfferScreen)