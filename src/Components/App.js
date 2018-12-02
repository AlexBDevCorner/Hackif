import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
//import Routes from '../routes';
import { connect } from 'react-redux';
import './App.css';
import Dummy from './Dummy'
import DateRangeRow from './DateRangerow/DateRangeRow'

import store from '../../rootReducer';

class App extends Component {
     
    render() {
        const title = 'Vacation Planner'

        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <DateRangeRow />
                        <div className="main-title">{title}</div>
                    </div>
                </Router>
            </Provider>
           
        )
    }

}

export default App