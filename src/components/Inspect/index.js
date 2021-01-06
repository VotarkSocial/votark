import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity, BackHandler } from 'react-native';
import * as selectors from '../../reducers'
import styles from './styles'
import { URL, STATIC_URL } from '../../../configuration'
import FitImage from 'react-native-fit-image';
import { gridList } from '../../utils/gridList';
import { maskNumber } from '../../utils/mask';
import React, { useEffect} from 'react';
import { Actions } from 'react-native-router-flux';
import { selectCurrentPost, startCurrentPostFetch } from '../../actions/currentPost';
import { getCurrentPost } from '../../reducers';
import { select } from 'redux-saga/effects';
import { setToNull } from '../../actions/post';
import * as useractions from '../../actions/user';
import { getAuthUserID } from '../../reducers/auth';

const Inspect = ({post, id, select, fetch, currentUser}) => {
    useEffect(()=>{
        select(id)
        fetch()
    },
        []
      );

    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        ()=>{
            Actions.Search()
    });
    
    return(
        <View key={post.id} style={styles.post}>
            <TouchableOpacity style={styles.return} onPress={()=>Actions.Search()}>
                <Image style={styles.icon2} source={post.userpicture?{uri: post.userpicture}:require('../../public/static/icon/return.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.relative} onPress={()=>selectUser(post.user)}>
                <Image style={styles.photo} source={post.userpicture?{uri: post.userpicture}:require('../../public/static/icon/user.png')}/>
                <Text style={styles.text}>{post.username} </Text>
            </TouchableOpacity>
            {currentUser===post.user && <TouchableOpacity style={styles.options}>
                <Image style={styles.icon3} source={require('../../public/static/icon/options.png')}/>
            </TouchableOpacity> }
            <View>
                <FitImage  
                    style={styles.image}
                    source={{uri: STATIC_URL+post.image}} 
                ></FitImage>
            </View>
            <View style={styles.lastrow}>
                <View style={styles.row}>
                    <Image style={styles.icon} source={post.userpicture?{uri: post.userpicture}:require('../../public/static/icon/topic.png')}/>
                    <Text style={styles.text2}>{post.topicname} </Text>
                </View>
                <View style={styles.row}>
                    <Image style={styles.icon} source={post.userpicture?{uri: post.userpicture}:require('../../public/static/icon/award.png')}/>
                    <Text style={styles.text2}>{maskNumber(post.victories)} </Text>
                </View>
                <View style={styles.row}>
                    <Image style={styles.icon} source={post.userpicture?{uri: post.userpicture}:require('../../public/static/icon/top.png')}/>
                    <Text style={styles.text2}>{maskNumber(post.order)} </Text>
                </View>
            </View>
        </View>
    )
    return (
        <Text style={styles.mainText}>NO POSTS</Text>)
};

export default connect(
  (state, {id}) => ({
      post: getCurrentPost(state),
      id: id,
      currentUser: getAuthUserID(state),
  }),
  dispatch => ({
    fetch(){
        dispatch(startCurrentPostFetch())
    },
    select(id){
        dispatch(selectCurrentPost(id))
    },
    selectUser(id){
        dispatch(setToNull())
        dispatch(useractions.startUsFetch(id))
    },
  }),
  (stateToProps,disptachToProps) => {
    return ({...disptachToProps,
        ...stateToProps,
        selectUser(id){
            dispatchToProps.selectUser(id)
        }
    })
  },
)(Inspect);
