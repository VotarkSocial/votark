import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import * as selectors from '../../reducers'
import React from 'react';
import styles from './styles'
import { URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';
import { logout } from '../../actions/auth';
import FitImage from 'react-native-fit-image';

const Post = ({image}) => (
        <View style={styles.post}>
        <LinearGradient
            colors={[colors.primaryd, 'transparent']}
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: 10,
              borderRadius: 8,
            }}
          >
            <Image  
            style={styles.image}
            source={{uri: image}} 
           />
          </LinearGradient>
        </View>
);

export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
    image: selectors.getImage(state)
  }),
  dispatch => ({
      
  }),
  (stateToProps,disptachToProps) => {
    if(!stateToProps.isAuthenticated){
      if(typeof document !== 'undefined'){
        window.location.href = URL+'login/'
      }
      else{
        Actions.replace('Login')
      }
    }
    return ({...disptachToProps,...stateToProps})
  }
)(Post);
