import { connect } from 'react-redux';
import {Text, View, Image, TouchableHighlight } from 'react-native';
import * as selectors from '../../reducers'
import React from 'react';
import styles from './styles'
import { URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';

const Stories = ({onClick,home}) => (
    <View style={styles.container}>
        
    </View>
);

export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
  }),
  dispatch => ({
      onClick(){

      },
      home(){
        if(typeof document !== 'undefined'){
            window.location.href = URL
          }
          else{
            Actions.Home(true)
          }
      }
      
  }),
)(Stories);
