import { connect } from 'react-redux';
import {Text, View, Image, ScrollView } from 'react-native';
import * as selectors from '../../reducers'
import React from 'react';
import styles from './styles'
import { URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { colors } from '../../../configuration';
import { LinearGradient } from 'expo-linear-gradient';

const Versus = ({}) => (
    <View style={styles.row1}>
        <View style={styles.post}>
        <LinearGradient
            colors={[colors.primaryd, 'transparent']}
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              borderRadius: 8,
            }}
          >
          </LinearGradient>
        </View>
        <View style={styles.post}>
            <LinearGradient
            colors={[colors.primaryd, 'transparent']}
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              borderRadius: 8,
            }}
          >
          </LinearGradient>
        </View>
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
)(Versus);