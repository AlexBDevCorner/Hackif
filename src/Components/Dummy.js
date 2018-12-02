import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'
import * as selectors from './selectors'

class Dummy extends Component {
    
    render() {
        const { a, setA } = this.props;
        return <div>{a}<button onClick={() => {setA(5)}}>Hey!</button></div>
    }

}

const matchDispatchToProps = dispatch => bindActionCreators(
    { setA : actions.setA }, dispatch
)
  
export default connect(selectors.getA, matchDispatchToProps)(Dummy)