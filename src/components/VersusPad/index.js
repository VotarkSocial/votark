import { connect } from 'react-redux';
import {Text, View, Image, ScrollView } from 'react-native';
import * as selectors from '../../reducers'
import React from 'react';
import {styles, styles2} from './styles';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { URL, colors } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import Versus from '../Versus';

const config = {
  velocityThreshold: 0.01,
  directionalOffsetThreshold: 50
};

const VersusPad = ({onSwipeDown,onSwipeLeft,onSwipeUp,onSwipeRight}) => (
  <View style={(typeof document!=='undefined')?styles.container:styles2.container}>
        <GestureRecognizer
        onSwipeUp={onSwipeUp}
        onSwipeDown={onSwipeDown}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        config={config}
        style={{height:'100%', }}
        >
          <Versus></Versus>
          <Text style={styles.text} >{"VS"}</Text>
      </GestureRecognizer>
  </View>
);

export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
  }),
  dispatch => ({
      onSwipeDown(){
        console.log('down')
      },
      onSwipeLeft(){
        console.log('left')
      },
      onSwipeRight(){
        console.log('right')

      },
      onSwipeUp(){
        console.log('up')

      }
      
      
  }),
)(VersusPad);
