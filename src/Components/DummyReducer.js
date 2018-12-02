import * as actionTypes from './actionTypes'

const INITIAL_STATE = {
  a : 0
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case actionTypes.SET_A :
      return { ...state, a : action.a }

    default :
      return state

  }
}