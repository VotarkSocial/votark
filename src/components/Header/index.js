import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import * as selectors from '../../reducers'
import React from 'react';
import styles from './styles'
import { URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';

const Header = ({onClick,home}) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.row} onPress={() => home}>
            <Image style={styles.logo} source={require('../../public/static/img/logo.png')} ></Image>
        </TouchableOpacity>  
        <View style={styles.row}>
            <Text style={styles.text} >{"VOTARK"}</Text>
        </View>
        <TouchableOpacity style={styles.row} onPress={() => onClick}>
            <Image style={styles.icon} source={require('../../public/static/icon/notification.png')} />
        </TouchableOpacity>   
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
)(Header);
