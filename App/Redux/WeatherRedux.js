import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getCurrent: null,
  getForecast: null,
  currentSuccess: ['results'],
  currentFailure: null,
  forecastSuccess: ['results'],
  forecastFailure: null,
  getSelectedImage: null,
  setSelectedImage: ['image'],
  getStation: null,
  setStation: ['station']
})

export const WeatherTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  station: null,
  current: {},
  forecast: {},
  national: {},
  selectedImage: null,
  fetching: false,
  error: ''
})

/* ------------- Reducers ------------- */

export const request = (state) => {
  return {
    ...state,
    fetching: true,
    error: ''
  }
}

// successful current weather lookup
export const success = (state, action) => {
  const { results, type } = action

  switch (type) {
    case 'CURRENT_SUCCESS': {
      return {
        ...state,
        current: results,
        fetching: false,
        error: ''
      }
    }
    case 'FORECAST_SUCCESS': {
      return {
        ...state,
        forecast: results,
        fetching: false,
        error: ''
      }
    }
    default: {
      return state
    }
  }

}

// failed to get the current weather
export const failure = (state) => {
  return {
    ...state,
    fetching: false,
    error: 'Failed to Load'
  }
}

export const getSelectedImage = (state) => {
  return state
}

export const setSelectedImage = (state, action) => {
  const { image, type } = action
  return {
    ...state,
    selectedImage: image
  }
}

export const getStation = (state) => {
  return state
}

export const setStation = (state, action) => {
  const { station, type } = action
  return {
    ...state,
    station: station
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CURRENT]: request,
  [Types.CURRENT_SUCCESS]: success,
  [Types.CURRENT_FAILURE]: failure,
  [Types.GET_FORECAST]: request,
  [Types.FORECAST_SUCCESS]: success,
  [Types.FORECAST_FAILURE]: failure,
  [Types.SET_SELECTED_IMAGE]: setSelectedImage,
  [Types.GET_SELECTED_IMAGE]: getSelectedImage,
  [Types.SET_STATION]: setStation,
  [Types.GET_STATION]: getStation
})
