import { connect } from 'react-redux';
import {Text, View, Image, ScrollView } from 'react-native';
import * as selectors from '../../reducers'
import React from 'react';
import {styles, styles2} from './styles';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { URL, colors } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import Versus from '../Versus';
import * as actions from '../../actions/stories';
import { startFetchingVersus, setNull } from '../../actions/versus';
import { logout } from '../../actions/auth';

const config = {
  velocityThreshold: 0.01,
  directionalOffsetThreshold: 50
};

const VersusPad = ({onSwipeDown,onSwipeLeft,onSwipeUp,onSwipeRight, isFetching,areHidden}) => (
  <View style={(typeof document==='undefined' || areHidden)?styles2.container:styles.container}>
        <GestureRecognizer
        onSwipeUp={onSwipeUp}
        onSwipeDown={onSwipeDown}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        config={config}
        style={{height:'100%', }}
        >
          <Versus></Versus>
          <Text style={styles.text} >{isFetching?"LOADING...":"VS"}</Text>
      </GestureRecognizer>
  </View>
);

export default connect(
  state => ({
    isFetching: selectors.isFetchingVersus(state),
    areHidden: selectors.getHidden(state)
  }),
  dispatch => ({
      onSwipeDown(){
        dispatch(actions.showStories())
      },
      reload(){
        dispatch(startFetchingVersus())
      },
      onSwipeLeft(){
        dispatch(logout())
      },
      onSwipeRight(){
        console.log('right')
      },
      onSwipeUp(){
        dispatch(actions.hideStories())
      }  
  }),
  (stateToProps,dispatchToProps) => ({
    isFetching: stateToProps.isFetching,
    onSwipeUp(){
      dispatchToProps.onSwipeUp()
    },
    onSwipeLeft(){
      dispatchToProps.onSwipeLeft()
    },
    onSwipeRight(){
      dispatchToProps.onSwipeRight()
    },
    onSwipeDown(){
      if(!stateToProps.areHidden){
        dispatchToProps.reload()
      }
      else{
        dispatchToProps.onSwipeDown()
      }
    }
  })
)(VersusPad);
