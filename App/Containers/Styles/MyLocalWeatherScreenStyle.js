import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainHeading: {
    fontWeight:'bold',fontSize:20, marginBottom: 10
  },
  subHeading: {
    fontWeight:'bold',
    fontSize: 16
  },
  currentConditionsWrapper: {
    borderRadius:10,backgroundColor:'#EFEFEF'
  },
  currentConditionsIcon: {
    width: 80, height: 80
  },
  currentDetailsWrapper: {
    display: 'flex', 
    flexDirection: 'column', 
    marginLeft: 15,
    marginTop: 5, 
    marginBottom: 5 
  },
  temperatureFigure: {
    fontWeight:'bold',fontSize:16
  },
  timestamp: {
    marginTop: 10, marginBottom: 10
  },
  forecastWrapper: {
    marginBottom:10
  }
})
