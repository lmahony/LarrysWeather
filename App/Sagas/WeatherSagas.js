import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import WeatherActions from '../Redux/WeatherRedux'

export const currentWeather = (state) => state.weather.current
export const currentForecast = (state) => state.weather.forecast

export function * getCurrent(api, action) {
  // make the call to the api

  if (currentWeather && currentWeather.weather) {
    yield put(WeatherActions.currentSuccess(currentWeather))
  } else {
    const response = yield call(api.getCurrent)

    if (response.ok) {
      // do data conversion here if needed
      yield put(WeatherActions.currentSuccess(response.data.current_observation))
    } else {
      yield put(WeatherActions.currentFailure())
    }
  }

}

export function * getForecast(api, action) {
  // make the call to the api

  if (currentForecast && currentForecast.txt_forecast) {
    yield put(WeatherActions.forecastSuccess(currentForecast))
  } else {
    const response = yield call(api.getForecast)

    if (response.ok) {
      // do data conversion here if needed
      yield put(WeatherActions.forecastSuccess(response.data.forecast))
    } else {
      yield put(WeatherActions.forecastFailure())
    }
  }

}
