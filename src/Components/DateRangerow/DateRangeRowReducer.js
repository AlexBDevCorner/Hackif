import * as actionTypes from './actionTypes'

import moment from 'moment'

const INITIAL_STATE = {
  dateFrom :  moment(),
  dateTo :   moment().add(30, 'day')
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case actionTypes.SET_DATE_FROM :
      return { ...state, a : action.dateFrom }

    case actionTypes.SET_DATE_TO :
      return { ...state, a : action.dateTo }

    default :
      return state

  }
}