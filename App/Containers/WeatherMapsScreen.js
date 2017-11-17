import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, WebView, Image, Picker } from 'react-native'
import { connect } from 'react-redux'
import WeatherActions from '../Redux/WeatherRedux'

// Styles
import styles from './Styles/WeatherMapsScreenStyle'

const imageClouds = 'https://api.sat24.com/crop?type=visual5hdcomplete&lat=52.6541&lon=-7.2448&width=400&height=400&zoom=0.90&continent=eu'
const imageRain = 'https://api.sat24.com/crop?type=rainTMC&lat=52.6541&lon=-7.2448&width=400&height=400&zoom=0.90&continent=eu'

class WeatherMapsScreen extends Component {

  componentWillMount = () => {
    
  }

  render () {
    switch (this.props.selectedImage) {
      case 'clouds':
        imageUri = imageClouds
        break;
      case 'rain':
        imageUri = imageRain
        break;
      default:
        imageUri = imageRain
    }
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>Weather Maps</Text>
          <Picker
            selectedValue={this.props.selectedImage||'rain'}
            onValueChange={(itemValue, itemIndex) => this.props.setSelectedImage(itemValue)}>
            <Picker.Item label="Clouds/Sun" value="clouds" />
            <Picker.Item label="Rain" value="rain" />
          </Picker>
          <Image
            source={{uri: imageUri}}
            style={{width:400,height:400}}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedImage: state.weather.selectedImage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedImage: (image) => dispatch(WeatherActions.setSelectedImage(image))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherMapsScreen)
