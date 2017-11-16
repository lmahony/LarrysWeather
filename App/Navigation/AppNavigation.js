import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
import WeatherMapsScreen from '../Containers/WeatherMapsScreen'
import MyLocationScreen from '../Containers/MyLocationScreen'
import NationalWeatherScreen from '../Containers/NationalWeatherScreen'
import MyLocalWeatherScreen from '../Containers/MyLocalWeatherScreen'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './Styles/NavigationStyles'

const tabBarOptions = {
  showLabel: false,
  showIcon: true,
  activeTintColor: '#ee006e',
  style: {
    backgroundColor: '#42c8f4',
    paddingTop: 10
  }
}

let tabBarConfig = {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: tabBarOptions
}

// Manifest of possible screens
const PrimaryNav = TabNavigator({
  LocalWeather: {
    screen:  MyLocalWeatherScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name={"home"} size={24} color="#fff" />
      )
    }
  },
  NationalWeather: {
    screen: NationalWeatherScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name={"umbrella"} size={24} color="#fff" />
      )
    }
  },
  WeatherMaps: {
    screen: WeatherMapsScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name={"globe"} size={24} color="#fff" />
      )
    }
  },
}, tabBarConfig)

export default PrimaryNav
