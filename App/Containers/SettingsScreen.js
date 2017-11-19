import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Picker } from 'react-native'
import { connect } from 'react-redux'
import WeatherActions from '../Redux/WeatherRedux'

// Styles
import styles from './Styles/SettingsScreenStyle'

class SettingsScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text style={{fontWeight:'bold',fontSize:20,marginBottom:10}}>Settings</Text>
          <Text>Metric</Text>
          <Text style={{fontWeight:'bold',fontSize:18}}>Change Station:</Text>
          <Picker
            selectedValue={this.props.station||'ICOLAOIS2'}
            onValueChange={(itemValue, itemIndex) => this.props.setStation(itemValue)}>
            <Picker.Item label="Durrow" value="ICOLAOIS2" />
            <Picker.Item label="Johnstown" value="IKILKENN3" />
            <Picker.Item label="Roscrea" value="ITIPPERA2" />
            <Picker.Item label="Mountrath" value="ILAOISMO4" />
          </Picker>

        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    station: state.weather.station
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStation: (station) => dispatch(WeatherActions.setStation(station))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
