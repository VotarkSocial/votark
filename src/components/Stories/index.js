import { connect } from 'react-redux';
import {Text, ScrollView, Image, TouchableHighlight } from 'react-native';
import * as selectors from '../../reducers'
import React from 'react';
import styles from './styles'
import { URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';

const Stories = () => (
    <ScrollView style={styles.container} horizontal={true}>
        <Image style={styles.story} />
        <Image style={styles.story} />
        <Image style={styles.story} />
        <Image style={styles.story} />
        <Image style={styles.story} />
        <Image style={styles.story} />
        <Image style={styles.story} />
        <Image style={styles.story} />
        <Image style={styles.story} />
        <Image style={styles.story} />
        <Image style={styles.story} />
        <Image style={styles.story} />
        <Image style={styles.story} />
        <Image style={styles.story} />
        <Image style={styles.story} />
        <Image style={styles.story} />
        <Image style={styles.story} />
    </ScrollView>
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
