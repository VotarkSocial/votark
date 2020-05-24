import { connect } from 'react-redux';
import {Text, View, Image, ScrollView } from 'react-native';
import * as selectors from '../../reducers'
import React, {useEffect, useCallback} from 'react';
import {styles, styles2} from './styles';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { URL, colors } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import Versus from '../Versus';
import * as actions from '../../actions/stories';
import { startFetchingVersus, setNull, setNull_toProps, startVoteVersus } from '../../actions/versus';
import { logout } from '../../actions/auth';

const config = {
  velocityThreshold: 0.01,
  directionalOffsetThreshold: 50
};


const VersusPad = ({onSwipeDown,onSwipeLeft,onSwipeUp,onSwipeRight, isFetching,areHidden}) => {
  const escFunction = useCallback((event) => {
    if(event.keyCode===37){
      console.log("here")
      onSwipeLeft()
    }
    else if(event.keyCode===39){
      onSwipeRight()
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  
  return (
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
)};

export default connect(
  state => ({
    isFetching: selectors.isFetchingVersus(state),
    areHidden: selectors.getHidden(state),
    versusid: selectors.getVersus(state)?selectors.getVersus(state).id:null
  }),
  dispatch => ({
      onSwipeDown(){
        dispatch(actions.showStories())
      },
      reload(){
        dispatch(setNull())
        dispatch(setNull_toProps())
        dispatch(startFetchingVersus())
      },
      onSwipeLeft(versusid){
        dispatch(setNull_toProps())
        dispatch(startVoteVersus(true,versusid))
      },
      onSwipeRight(versusid){
        dispatch(setNull_toProps())
        dispatch(startVoteVersus(false,versusid))
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
      if(stateToProps.versusid){
        dispatchToProps.onSwipeLeft(stateToProps.versusid)
      }
    },
    onSwipeRight(){
      if(stateToProps.versusid){
        dispatchToProps.onSwipeRight(stateToProps.versusid)
      }
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
