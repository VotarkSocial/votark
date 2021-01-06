import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import * as selectors from '../../reducers'
import React, { useEffect}  from 'react';
import styles from './styles'
import { URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';
import * as actions from '../../actions/user';
import { startLikeVersus, startHeartVersus, startUnLikeVersus, startUnHeartVersus, startFetchinHeart, startFetchinLike } from '../../actions/reaction';
import { startFetchingComments } from '../../actions/comment';

const Interactions = ({fetch, isLiked, isHearted, like, heart,share}) => {
    
    useEffect(fetch,
        []
      );
    
    return (
    <View style={styles.container}>  
        <TouchableOpacity style={styles.row} onPress={like}>
            {
                (isLiked)?(
                    <Image style={styles.icon} source={require('../../public/static/icon/liked.png')}/>
                ):(
                    <Image style={styles.icon} source={require('../../public/static/icon/like.png')}/>
                )
            }
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={heart}>
        {
                (isHearted)?(
                    <Image style={styles.icon} source={require('../../public/static/icon/hearted.png')}/>
                ):(
                    <Image style={styles.icon} source={require('../../public/static/icon/heart.png')}/>
                )
            }
        </TouchableOpacity>  
        <TouchableOpacity style={styles.row} onPress={share}>
            <Image style={styles.icon} source={require('../../public/static/icon/share.png')} />
        </TouchableOpacity>   
    </View>
)};

export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
    userid: selectors.getUser(state).id,
    extrauserid: selectors.getExtraUser(state).id,
    userPicture: selectors.getUser(state).picture,
    extrauserPicture: selectors.getExtraUser(state).picture,
    followsUser: selectors.getIsFollowingUser(state)&&selectors.getUser(state).id!==selectors.getAuthUserID(state),
    followsExtrauser: selectors.getIsFollowingExtraUser(state),
    isLiked: selectors.getisLiked(state),
    isHearted : selectors.getisHearted(state),
    likeid: selectors.getLike(state)?selectors.getLike(state).id:null,
    heartid: selectors.getHeart(state)?selectors.getHeart(state).id:null,
    versusid: selectors.getVersus(state)?selectors.getVersus(state).id:null,
  }),
  dispatch => ({
        like(id){
            dispatch(startLikeVersus(id))
        },
        unlike(id){
            dispatch(startUnLikeVersus(id))
        },
        heart(id){
            dispatch(startHeartVersus(id))
        },
        unHeart(id){
            dispatch(startUnHeartVersus(id))
        },
        fetch(id,id2){
            dispatch(actions.startUserFollowFetch(id))
            dispatch(actions.startExtraUserFollowFetch(id2))
        }
  }),
  (stateToProps,dispatchToProps) => ({
    isLiked: stateToProps.isLiked,
    isHearted: stateToProps.isHearted,
    like(){
        if(!stateToProps.isLiked){
            dispatchToProps.like(stateToProps.versusid)
        }
        else{
            dispatchToProps.unlike(stateToProps.likeid)
        }
    },
    heart(){
        if(!stateToProps.isHearted){
            dispatchToProps.heart(stateToProps.versusid)
        }
        else{
            dispatchToProps.unHeart(stateToProps.heartid)
        }
    },
    share(){
        //do Share
    },
    fetch(){
        dispatchToProps.fetch(stateToProps.userid,stateToProps.extrauserid)
    }
  }),
)(Interactions);
