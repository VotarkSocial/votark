import { connect } from 'react-redux';
import {Text, View, Image } from 'react-native';
import * as selectors from '../../reducers'
import React from 'react';
import Spinner from '../Spinner'
import styles from './styles'
import { URL } from '../../../configuration'

const Home = () => (
  <View style={styles.container}>
      <Text style={styles.text} >WELCOME TO VOTARK</Text>
      <Spinner/>
  </View>
);

export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
  }),
  undefined,
  (stateToProps,disptachToProps) => {
    if(!stateToProps.isAuthenticated){
      //window.location.href = URL+'login/'
    }
  }
)(Home);
