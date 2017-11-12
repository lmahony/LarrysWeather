import React, { Component } from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView, ActivityIndicator, Image, Linking } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import WeatherActions from '../Redux/WeatherRedux'

// Styles
import styles from './Styles/MyLocalWeatherScreenStyle'

class MyLocalWeatherScreen extends Component {

  componentWillMount = () => {
    if (!this.props.current.temp_c) {
      this.props.getCurrent()
    }
  /*  if (!this.props.forecast.txt_forecast) {
      this.props.getForecast();
    }*/


  }

  render () {
    const spinner = this.props.fetching ? <ActivityIndicator size='large'/> : null;
    let iconUrl = 'https://icons.wxug.com/i/c/k/nt_cloudy.gif'
    if (this.props.current.icon_url) {
      iconUrl = this.props.current.icon_url.replace('http:', 'https:')
    }
    return (
      <ScrollView style={{padding: 4}}>
        <KeyboardAvoidingView behavior='position'>
          <Text style={{fontWeight:'bold',fontSize:14, marginBottom: 10}}>My Local Weather</Text>


          <Image source={{uri: iconUrl}} style={{width: 100, height: 100}} />
          <Text>{this.props.current.weather}</Text>
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 5, marginBottom: 5 }} >
            <Text>Temperature: {this.props.current.temp_c} </Text>
            <Text> Feels Like: {this.props.current.feelslike_c}</Text>
          </View>
          <Text>Wind: {this.props.current.wind_string}</Text>
          <Text>Rain: {this.props.current.precip_1hr_metric}</Text>

          <Text style={{marginTop: 10, marginBottom: 10}}>Time: {this.props.current.observation_time}</Text>

          <Text style={{color: 'blue'}} onPress={() => Linking.openURL(this.props.current.forecast_url)}>
          {this.props.current.forecast_url}
          </Text>
          <Text>{this.props.error}</Text>

          <View>
            <Text>Forecast</Text>
          </View>
          {spinner}
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.weather.fetching,
    current: state.weather.current,
    forecast: state.weather.forecast,
    error: state.weather.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrent: () => dispatch(WeatherActions.getCurrent()),
    getForecast: () => dispatch(WeatherActions.getForecast())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyLocalWeatherScreen)
