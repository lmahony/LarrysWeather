import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, WebView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/NationalWeatherScreenStyle'

class NationalWeatherScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container} scrollEnabled={false}>
        <KeyboardAvoidingView behavior='position'>
          <Text style={{fontWeight:'bold',fontSize:14}}>National Weather</Text>
          <WebView
            source={{uri: 'https://www.larrymahony.com/weather/api/ireland.php'}}
            style={{height:600,width:'100%',padding: 4}}  >
            </WebView>


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

export default connect(mapStateToProps, mapDispatchToProps)(NationalWeatherScreen)
