import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, WebView, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/WeatherMapsScreenStyle'

class WeatherMapsScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>Weather Maps</Text>
            <Image
              source={{uri:'https://api.sat24.com/mostrecent/GB/rainTMC'}}
              style={{width:400,height:400}}
            />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherMapsScreen)
