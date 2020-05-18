import { connect } from 'react-redux';
import {Text, View, Image, TouchableHighlight } from 'react-native';
import * as selectors from '../../reducers'
import React from 'react';
import styles from './styles'
import { URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';

const NavBar = ({onClick,home}) => (
    <View style={styles.container}>
        <TouchableHighlight style={styles.row} onPress={() => home}>
            <Image style={styles.icon} source={require('../../public/static/icon/home.png')} ></Image>
        </TouchableHighlight>  
        <TouchableHighlight style={styles.row} onPress={() => onClick}>
            <Image style={styles.icon} source={require('../../public/static/icon/search.png')} />
        </TouchableHighlight>  
        <TouchableHighlight style={styles.row} onPress={() => home}>
            <Image style={styles.icon} source={require('../../public/static/icon/add.png')} ></Image>
        </TouchableHighlight>  
        <TouchableHighlight style={styles.row} onPress={() => onClick}>
            <Image style={styles.icon} source={require('../../public/static/icon/dm.png')} />
        </TouchableHighlight>   
        <TouchableHighlight style={styles.row} onPress={() => onClick}>
            <Image style={styles.icon} source={require('../../public/static/icon/user.png')} />
        </TouchableHighlight>   
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
)(NavBar);
