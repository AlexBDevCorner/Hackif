import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'
import * as selectors from './selectors'

import dateRangeHelper from './dateRangeHelper'

class DateRangeRow extends Component {
 
    render() {
        const { dateFrom, dateTo } = this.props

        const dateRange = dateRangeHelper(dateFrom, dateTo)

        return (<table>
            <thead>
                <tr>
                    { dateRange.map(date => <th>{date.date()}</th>) }
                </tr>
            </thead>
            <tbody>
                <tr>
                    { dateRange.map(date => <td>{(date.weekday() === 0 || date.weekday() === 6) ? 'W' : 'E'}</td>) }
                </tr>
            </tbody>
        </table>)
    }

}

const matchDispatchToProps = dispatch => bindActionCreators( { 
    setDateFrom : actions.setDateFrom,
    setDateTo : actions.setDateTo 
}, dispatch )

export default connect(selectors.getDateRange, matchDispatchToProps)(DateRangeRow)