import { call, put, select } from 'redux-saga/effects'
import { path } from 'ramda'
import WeatherActions from '../Redux/WeatherRedux'

export const currentWeather = (state) => state.weather.current
export const currentForecast = (state) => state.weather.forecast
export const selectedStation = (state) => state.weather.station

export function * getCurrent(api, action) {
  // make the call to the api
  let { station } = action
  if (!station) {
    station = yield select(selectedStation)
  }
  //console.tron.log("Saga Station = " + station)
  const response = yield call(api.getCurrent, station)

  if (response.ok) {
    // do data conversion here if needed
    yield put(WeatherActions.currentSuccess(response.data.current_observation))
  } else {
    yield put(WeatherActions.currentFailure())
  }

}

export function * getForecast(api, action) {
  // make the call to the api
  const { station } = action

  const response = yield call(api.getForecast, station)

  if (response.ok) {
    // do data conversion here if needed
    yield put(WeatherActions.forecastSuccess(response.data.forecast))
  } else {
    yield put(WeatherActions.forecastFailure())
  }

}
