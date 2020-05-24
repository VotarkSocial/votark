import { connect } from 'react-redux';
import {Text, View, Image, ScrollView } from 'react-native';
import * as selectors from '../../reducers'
import React, { useEffect} from 'react';
import styles from './styles'
import { URL, STATIC_URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { colors } from '../../../configuration';
import { LinearGradient } from 'expo-linear-gradient';
import * as actions from '../../actions/versus'
import ReactPlayer from 'react-player'
import { useParams } from "react-router-dom";
import FitImage from 'react-native-fit-image';

const Versus = ({fetchVersus,url1,url2,versusid}) =>{
  useEffect(fetchVersus)
  
  return (
    <View style={styles.row1}>
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
          >{
            <FitImage  
            style={styles.image}
            source={{uri: url1}} 
           />
          }
          </LinearGradient>
        </View>
        { console.log(url2)}
        <View style={styles.post}>
            <LinearGradient
            colors={[colors.primaryd, 'transparent']}
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              padding: 10,
              justifyContent: 'flex-start',
              borderRadius: 8,
            }}
          >
            {
            <FitImage  
            style={styles.image}
            source={{uri: url2}} 
           />
          }
          </LinearGradient>
        </View>
    </View>
)};

export default connect(
  (state) => ({
    isAuthenticated: selectors.isAuthenticated(state),
    versus: selectors.getVersus(state),
    versusid: selectors.getVersus(state)?selectors.getVersus(state).id:null,
    isFetchingVersus: selectors.isFetchingVersus(state),
    fail: selectors.getFetchError(state)
  }),
  dispatch => ({
      fetchVersus(){
          dispatch(actions.startFetchingVersus())
        }
  }),
  (stateToProps,dispatchToProps)=>({
    url1:(stateToProps.versus)? STATIC_URL+stateToProps.versus.content1.image:null,
    url2:(stateToProps.versus)?STATIC_URL+stateToProps.versus.content2.image:null,
    fetchVersus(){
      if(!stateToProps.versusid && !stateToProps.isFetchingVersus && !stateToProps.fail){
        dispatchToProps.fetchVersus()
      }
    }
  })
)(Versus);