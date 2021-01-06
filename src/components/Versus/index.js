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
import FitImage from 'react-native-fit-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as useractions from '../../actions/user';
import { setToNull } from '../../actions/post';

const Versus = ({fetchVersus,url1,url2,followUser,followExtraUser,
  extrauserPicture,userPicture,followsUser,followsExtrauser,isFetchingVersus,
   selectUser, userid, extrauserid, username, extrausername}) =>{
  useEffect(fetchVersus,[])
  
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
              margin: 0,
              borderRadius: 1,
            }}
          >{
            !isFetchingVersus ?
            <View style={styles.set}>
              <TouchableOpacity style={styles.relative} onPress={()=>selectUser(userid)}>
                  <Image style={styles.photo} source={userPicture?{uri: userPicture}:require('../../public/static/icon/user.png')}/>
                <Text style={styles.follow}>{'@' + username}</Text>
              </TouchableOpacity>
              <FitImage
                style={styles.image}
                source={{uri: url1}} 
              />
            </View>
            : null
          }
          </LinearGradient>
        </View>
        <View style={styles.post}>
            <LinearGradient
            colors={[colors.primaryd, 'transparent']}
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              padding: 10,
              margin: 0,
              justifyContent: 'flex-start',
              borderRadius: 1,
            }}
          >
            { !isFetchingVersus ?
              <View style={styles.set}>
                <TouchableOpacity style={styles.relative} onPress={()=>selectUser(extrauserid)}>
                    <Image style={styles.photo} source={extrauserPicture?{uri: extrauserPicture}:require('../../public/static/icon/user.png')}/>
                  <Text style={styles.follow}>{'@' + extrausername}</Text>
                  </TouchableOpacity>
                <FitImage
                style={styles.image}
                source={{uri: url2}} 
                />
              </View>
              : null
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
    fail: selectors.getFetchError(state),
    userid: selectors.getUser(state).id,
    extrauserid: selectors.getExtraUser(state).id,
    userPicture: selectors.getUser(state).picture,
    extrauserPicture: selectors.getExtraUser(state).picture,
    followsUser: selectors.getIsFollowingUser(state)&&selectors.getUser(state).id!==selectors.getAuthUserID(state),
    followsExtrauser: selectors.getIsFollowingExtraUser(state),
    username: selectors.getUser(state).username,
    extrausername: selectors.getExtraUser(state).username
  }),
  dispatch => ({
      fetchVersus(){
          dispatch(actions.startFetchingVersus())
        },
      followUser(userid,versusid){
        dispatch(useractions.startFollowUser(userid,versusid))
      },
      followExtraUser(userid,versusid){
          dispatch(useractions.startFolloExtraUser(userid,versusid))
      },
      unFollowUser(userid){
          dispatch(useractions.startUnFollowUser(userid))
      },
      unfollowExtraUser(userid){
          dispatch(useractions.startUnFollowExtraUser(userid))
      },
      selectUser(id){
        dispatch(setToNull())
        dispatch(useractions.startUsFetch(id))
      },
  }),
  (stateToProps,dispatchToProps)=>({
    url1:(stateToProps.versus)? STATIC_URL+stateToProps.versus.content1.image:null,
    url2:(stateToProps.versus)?STATIC_URL+stateToProps.versus.content2.image:null,
    userPicture: stateToProps.userPicture,
    extrauserPicture: stateToProps.extrauserPicture,
    followsUser: stateToProps.followsUser,
    followsExtrauser: stateToProps.followsExtrauser,
    isFetchingVersus: stateToProps.isFetchingVersus,
    userid: stateToProps.userid,
    extrauserid: stateToProps.extrauserid,
    username: stateToProps.username,
    extrausername: stateToProps.extrausername,
    fetchVersus(){
      if(!stateToProps.versus){
        dispatchToProps.fetchVersus()
      }
    },
    followUser(){
      if(stateToProps.followsUser){
          dispatchToProps.unFollowUser(stateToProps.userid)
      }
      else{
          dispatchToProps.followUser(stateToProps.userid,stateToProps.versusid)
      }
    },
    followExtraUser(){
        if(stateToProps.followsExtrauser){
            dispatchToProps.unfollowExtraUser(stateToProps.extrauserid)
        }
        else{
            dispatchToProps.followExtraUser(stateToProps.extrauserid,stateToProps.versusid)
        }
    },
    selectUser(id){
      dispatchToProps.selectUser(id)
    }
  })
)(Versus);