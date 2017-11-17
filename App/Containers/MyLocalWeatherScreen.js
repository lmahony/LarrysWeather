import React, { Component } from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView, ActivityIndicator, Image, Linking, FlatList } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import WeatherActions from '../Redux/WeatherRedux'

// Styles
import styles from './Styles/MyLocalWeatherScreenStyle'

class MyLocalWeatherScreen extends Component {

  componentWillMount = () => {
    if (!(this.props.current && this.props.current.temp_c)) {
      this.props.getCurrent()
    }
    if (!(this.props.forecast && this.props.forecast.txt_forecast)) {
      this.props.getForecast();
    }


  }

  _FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#AAA",
        }}
      />
    );
  }

  _renderForecastItem = ({item, index}) => {
    let bgColor = '#EFEFEF'
    if (index%2===1){
      bgColor = '#DDD'
    }
    return (
      <View style={{backgroundColor: bgColor,padding:5,borderRadius:10,marginBottom:5}}>
        <Text style={{fontWeight:'bold'}}>{item.title}</Text>
        <Text>{item.fcttext_metric}</Text>
      </View>
    )
  }


  render () {
    const spinner = this.props.fetching ? <ActivityIndicator size='large'/> : null;
    let iconUrl = 'https://icons.wxug.com/i/c/k/nt_cloudy.gif'
    if (this.props.current.icon_url) {
      iconUrl = this.props.current.icon_url.replace('http:', 'https:')
    }
    let forecastMain = {}
    if (this.props.forecast && this.props.forecast.txt_forecast) {
      forecastMain = this.props.forecast.txt_forecast
    }
    return (
      <ScrollView style={{padding: 5}}>
        <KeyboardAvoidingView behavior='position'>
          <Text style={styles.mainHeading}>Local Weather</Text>
          <View style={styles.currentConditionsWrapper}>
          <View style={{flexDirection:'row'}}>
            <Image source={{uri: iconUrl}} style={styles.currentConditionsIcon} />
            <View style={styles.currentDetailsWrapper} >
              <Text>{this.props.current.weather}</Text>
              <Text>Temp: <Text style={styles.temperatureFigure}>{this.props.current.temp_c}</Text></Text>
              <Text>Feels Like: <Text style={styles.temperatureFigure}>{this.props.current.feelslike_c}</Text></Text>
            </View>
          </View>
          <Text>Wind: {this.props.current.wind_string}</Text>
          <Text>Rain: {this.props.current.precip_1hr_metric}</Text>
          </View>
          <Text style={styles.timestamp}>{this.props.current.observation_time}</Text>

          <View style={styles.forecastWrapper}>
            <Text style={styles.subHeading}>Forecast </Text>
            <FlatList
              data={forecastMain.forecastday}
              renderItem={this._renderForecastItem}
              keyExtractor={(item, index) => index}

            />
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
