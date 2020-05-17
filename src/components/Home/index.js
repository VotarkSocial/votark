import { connect } from 'react-redux';
import {Text, View, Image } from 'react-native';
import * as selectors from '../../reducers'
import React from 'react';
import styles from './styles'
import { URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';

const Home = () => (
  <View style={styles.container}>
      <Text style={styles.text} >WELCOME TO VOTARK</Text>
  </View>
);

export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
  }),
  undefined,
  (stateToProps,disptachToProps) => {
    if(!stateToProps.isAuthenticated){
      if(typeof document !== 'undefined'){
        window.location.href = URL+'login/'
      }
      else{
        console.log("pase por home")
        Actions.Login(true)
      }
    }
    return ({isAuthenticated: stateToProps.isAuthenticated})
  }
)(Home);
