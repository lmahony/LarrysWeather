import React, { Component } from 'react'
import { TabNavigator, DrawerNavigator, StackNavigator, NavigationActions } from 'react-navigation'
import SettingsScreen from '../Containers/SettingsScreen'
import WeatherMapsScreen from '../Containers/WeatherMapsScreen'
import MyLocationScreen from '../Containers/MyLocationScreen'
import NationalWeatherScreen from '../Containers/NationalWeatherScreen'
import MyLocalWeatherScreen from '../Containers/MyLocalWeatherScreen'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, TouchableOpacity } from 'react-native'

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
const TabNav = TabNavigator({
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

const DrawerNav = DrawerNavigator({
  Home: {
    screen: TabNav
  },
  Settings: {
    screen: SettingsScreen
  }
},{
  
});

const PrimaryNav = StackNavigator({
  MyTab: {
    screen: DrawerNav,
    navigationOptions: ( { navigation }) => ({
      title: "Larry's Weather",
      headerLeft: <Icon name="bars" style={{padding: 10, marginLeft:10}}size={20} onPress={ () => { navigation.navigate('DrawerOpen');} } />
    })
 }
})

export default PrimaryNav
