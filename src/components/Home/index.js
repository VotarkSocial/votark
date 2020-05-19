import { connect } from 'react-redux';
import {Text, View, Image } from 'react-native';
import * as selectors from '../../reducers'
import React from 'react';
import styles from './styles'
import { URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';
import Header from '../Header';
import Stories from '../Stories';
import NavBar from '../NavBar';
import VersusPad from '../VersusPad';
import Comments from '../Comments';
import Interactions from '../Interactions';

const Home = () => (
  <View style={styles.container}>
  <LinearGradient
      colors={[colors.primaryB, 'transparent']}
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      }}
    >
    <View style={styles.body}>
      <Header/>
      {
        (typeof document === 'undefined')&&<Stories/>
      }
      <VersusPad/>  
      <Comments/>
      <NavBar/>
      <Interactions/>
    </View>
    
  </LinearGradient>
</View>
);

export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
  }),
  undefined,
  (stateToProps,disptachToProps) => {
    if(stateToProps.isAuthenticated){
      if(typeof document !== 'undefined'){
        window.location.href = URL+'login/'
      }
      else{
        Actions.Login(true)
      }
    }
    return ({isAuthenticated: stateToProps.isAuthenticated})
  }
)(Home);
