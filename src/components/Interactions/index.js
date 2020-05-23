import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import * as selectors from '../../reducers'
import React from 'react';
import styles from './styles'
import { URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';
import * as actions from '../../actions/user';
import { startLikeVersus, startHeartVersus, startUnLikeVersus, startUnHeartVersus } from '../../actions/reaction';

const Interactions = ({followUser,followExtraUser,home,extrauserPicture,userPicture,followsUser, followsExtrauser, isLiked, isHearted, like, heart,share}) => (
    <View style={styles.container}>
        <TouchableOpacity  onPress={followUser}>
            <Image style={styles.photo} source={userPicture?{uri: userPicture}:require('../../public/static/icon/user.png')}/>
            {!followsUser&&<Image style={styles.icon2} source={require('../../public/static/icon/add.png')} />}
        </TouchableOpacity>  
        <TouchableOpacity  onPress={followExtraUser}>
            <Image style={styles.photo} source={extrauserPicture?{uri: extrauserPicture}:require('../../public/static/icon/user.png')}/>
            {!followsExtrauser&&<Image style={styles.icon2} source={require('../../public/static/icon/add.png')} />}
        </TouchableOpacity>  
        <TouchableOpacity style={styles.row} onPress={like}>
            {
                (isLiked)?(
                    <Image style={styles.icon} source={require('../../public/static/icon/like.png')}/>
                ):(
                    <Image style={styles.icon} source={require('../../public/static/icon/liked.png')}/>
                )
            }
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={heart}>
        {
                (isHearted)?(
                    <Image style={styles.icon} source={require('../../public/static/icon/heart.png')}/>
                ):(
                    <Image style={styles.icon} source={require('../../public/static/icon/hearted.png')}/>
                )
            }
        </TouchableOpacity>  
        <TouchableOpacity style={styles.row} onPress={share}>
            <Image style={styles.icon} source={require('../../public/static/icon/share.png')} />
        </TouchableOpacity>   
    </View>
);

export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
    userid: selectors.getUser(state).id,
    extrauserid: selectors.getExtraUser(state).id,
    userPicture: selectors.getUser(state).picture,
    extrauserPicture: selectors.getExtraUser(state).picture,
    followsUser: selectors.getIsFollowingUser(state),
    followsExtrauser: selectors.getIsFollowingExtraUser(state),
    isLiked: selectors.getisLiked(state),
    isHearted : selectors.getisHearted(state),
    reactionid: selectors.getLike(state)?selectors.getLike(state).id:null,
    versusid: selectors.getVersus(state)?selectors.getVersus(state).id:null,
  }),
  dispatch => ({
        followUser(userid){
            dispatch(actions.startFollowUser(userid))
        },
        followExtraUser(userid){
            dispatch(actions.startFolloExtraUser(userid))
        },
        unFollowUser(userid){
            dispatch(actions.startUnFollowUser(userid))
        },
        unfollowExtraUser(userid){
            dispatch(actions.startUnFollowExtraUser(userid))
        },
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
        }
  }),
  (stateToProps,dispatchToProps) => ({
    userPicture: stateToProps.userPicture,
    extrauserPicture: stateToProps.extrauserPicture,
    followsUser: stateToProps.followsUser,
    followsExtrauser: stateToProps.followsExtrauser,
    isLiked: stateToProps.isLiked,
    isHearted: stateToProps.isHearted,
    followUser(){
        if(!stateToProps.followsUser){
            dispatchToProps.unFollowUser(stateToProps.userid)
        }
        else{
            dispatchToProps.followUser(stateToProps.userid)
        }
    },
    followExtraUser(){
        if(!stateToProps.followExtraUser){
            dispatchToProps.unfollowExtraUser(stateToProps.userid)
        }
        else{
            dispatchToProps.followExtraUser(stateToProps.extrauserid)
        }
    },
    like(){
        if(stateToProps.isLiked){
            dispatchToProps.like(stateToProps.versusid)
        }
        else{
            dispatchToProps.unlike(stateToProps.reactionid)
        }
    },
    heart(){
        if(stateToProps.isHearted){
            dispatchToProps.heart(stateToProps.versusid)
        }
        else{
            dispatchToProps.unHeart(stateToProps.reactionid)
        }
    },
    share(){
        //do Share
    }
  }),
)(Interactions);
