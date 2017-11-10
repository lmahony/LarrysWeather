import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getCurrent: null,
  getForecast: null,
  success: ['results'],
  failure: null
})

export const WeatherTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  current: {},
  forecast: {},
  national: {},
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
  const { results } = action

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


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CURRENT]: request,
  [Types.CURRENT_SUCCESS]: success,
  [Types.CURRENT_FAILURE]: failure,
  [Types.GET_FORECAST]: request,
  [Types.FORECAST_SUCCESS]: success,
  [Types.FORECAST_FAILURE]: failure
})
