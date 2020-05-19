import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import * as selectors from '../../reducers'
import React from 'react';
import styles from './styles'
import { URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';

const Interactions = ({onClick,home}) => (
    <View style={styles.container}>
        <TouchableOpacity  onPress={() => onClick}>
            <Image style={styles.photo} />
            <Image style={styles.icon2} source={require('../../public/static/icon/add.png')} />
        </TouchableOpacity>  
        <TouchableOpacity  onPress={() => onClick}>
            <Image style={styles.photo} />
            <Image style={styles.icon2} source={require('../../public/static/icon/add.png')} />
        </TouchableOpacity>  
        <TouchableOpacity style={styles.row} onPress={() => home}>
            <Image style={styles.icon} source={require('../../public/static/icon/like.png')} ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={() => onClick}>
            <Image style={styles.icon} source={require('../../public/static/icon/heart.png')} />
        </TouchableOpacity>  
        <TouchableOpacity style={styles.row} onPress={() => onClick}>
            <Image style={styles.icon} source={require('../../public/static/icon/share.png')} />
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
)(Interactions);
