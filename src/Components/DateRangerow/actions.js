import * as actionTypes from './actionTypes'

export const setDateFrom = (dateFrom) => ({
    type : actionTypes.SET_DATE_FROM,
    dateFrom
})

export const setDateTo = (dateTo) => ({
    type : actionTypes.SET_DATE_TO,
    dateTo
})

