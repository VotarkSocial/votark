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


const VersusPad = ({onSwipeDown,onSwipeLeft,onSwipeUp,onSwipeRight, isFetching,areHidden, fail}) => {
  const escFunction = useCallback((event) => {
    if(event.keyCode===37){
      onSwipeLeft()
    }
    else if(event.keyCode===39){
      onSwipeRight()
    }
  }, []);

  useEffect(() => {
    if(typeof document !== 'undefined'){
      document.addEventListener("keydown", escFunction, false);

      return () => {
        document.removeEventListener("keydown", escFunction, false);
      };
    }
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
          <Text style={styles.text} >{fail?fail:(isFetching?"LOADING...":"VS")}</Text>
      </GestureRecognizer>
  </View>
)};

export default connect(
  state => ({
    isFetching: selectors.isFetchingVersus(state),
    areHidden: selectors.getHidden(state),
    versusid: selectors.getVersus(state)?selectors.getVersus(state).id:null,
    fail: selectors.getFetchError(state)
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
      onSwipeLeft(){
        dispatch(setNull_toProps())
        dispatch(startVoteVersus(true))
      },
      onSwipeRight(){
        dispatch(setNull_toProps())
        dispatch(startVoteVersus(false))
      },
      onSwipeUp(){
        dispatch(actions.hideStories())
      }  
  }),
  (stateToProps,dispatchToProps) => ({
    isFetching: stateToProps.isFetching,
    fail: stateToProps.fail,
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
