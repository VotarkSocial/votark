import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity, BackHandler } from 'react-native';
import * as selectors from '../../reducers'
import React, {useEffect, useState} from 'react';
import styles from './styles'
import { URL, STATIC_URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';
import { logout } from '../../actions/auth';
import NavBar from '../NavBar';
import TokenRefresh from '../TokenRefresh';
import Posts from '../Posts';
import { startFollowersFetching, startFollowingFetching, startStoriesFetch, startFollowUser, startUnFollowUser, editUser, cance_editUser, canceL_deleteUser, deleteUser, startDelete } from '../../actions/user';
import { startUserPostsFetch } from '../../actions/post';
import { startSendingReport, toggleReport } from '../../actions/report';
import { reducer } from 'redux-form';
import { maskNumber } from '../../utils/mask';

const Header = ({user,followsUser,logged,followers,following,
    isReporting,changeIsReporting,follow,isFollowing,
    edit,unfollow,message,messages,deleteAccount,
    report,posts, fetch, isEditing, cancelEdit, cancelDelete,
    startdeleteAccount,isDeleting, logout, isFetchingFollow, }) => {
        
    const [content, changeContent] = useState('');

    useEffect(
        () => {
            fetch()
            const interval = setInterval(fetch, 1000);
            return () => {fetch
                clearInterval(interval);
            };
        },
        []
    );
    
    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        ()=>{
            if(logged){
                Actions.replace('Home')
            }
            else {
                Actions.pop()
            }
        }
    );
    
    return (

    <View style={styles.main_container}>
        <LinearGradient
            colors={[colors.primaryB, 'transparent']}
            style={{
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
            }}
        >
        <View style={(typeof document==='undefined')?styles.container:styles.webcontainer}>
            <View style={styles.row2}>
                <Text style={styles.text} >{user.username?user.username:'PROFILE'}</Text>
                <TouchableOpacity>
                    <Image style={styles.options} source={require('../../public/static/icon/options.png')}/>
                </TouchableOpacity> 
            </View>
        </View>
        <View style={styles.section}>
            <View style={styles.userpicture}>
                <TouchableOpacity >
                    <Image style={styles.photo} source={user.picture?{uri: user.picture}:require('../../public/static/icon/user.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <View style={styles.row}>
                    <View >
                        <Text style={styles.text2} >{maskNumber(following)}</Text>
                        <Text style={styles.text3} >{'Following'}</Text>
                    </View> 
                    <View style={styles.column}>
                        <Text style={styles.text2} >{maskNumber(followers)}</Text>
                        <Text style={styles.text3} >{'Followers'}</Text>
                    </View> 
                    <View style={styles.column}>
                        <Text style={styles.text2} >{maskNumber([...posts].reduce(
                            (accumulator, current) => (
                                accumulator + current.victories
                            ),
                            0
                        ))
                        }</Text>
                        <Text style={styles.text3} >{'Victories'}</Text>
                    </View> 
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={logged ? 
                            edit : 
                                isFollowing ? 
                                follow :
                                unfollow
                        } >
                        <Text style={
                            logged ? 
                            styles.username : 
                                isFollowing ? 
                                styles.follow :
                                styles.unfollow
                        } >{
                        logged ? 
                        'Edit Profile' : 
                            isFollowing ? 
                            'Follow' :
                            'Unfollow'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={message
                        } >
                        <Text style={styles.message
                        } >{
                        logged ? 
                        'Money $' : 
                        'Message'}
                        </Text>
                    </TouchableOpacity>
                </View>
                {user.bio ? <Text style={styles.bio} >{user.bio}</Text>: null}
            </View>
            <Posts posts={posts}
                isOnSearchPage={false}
            />
        </View>
        </LinearGradient>
        <NavBar/>
        <TokenRefresh/>
    </View>
)};

export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
    user: selectors.getUser(state)?selectors.getUser(state):null,
    logged: selectors.getUser(state).id===selectors.getAuthUserID(state),
    followers: selectors.getFollowersCount(state),
    following: selectors.getFollowingCount(state),
    isFetchingFollow: selectors.getisFetchingFollowInfo(state),
    isFollowing: selectors.getIsFollowingUser(state),
    posts: selectors.getPosts(state),
    stories: selectors.getUserStories(state),
    hasFetchedPost : selectors.getFetchedOnce(state),
    isEditing: selectors.getIsEditingUser(state),
    isDeleting: selectors.getIsDeletingUser(state),
    isReporting : selectors.getIsReporting(state),
    isFetchingFollow: selectors.getIsFetchingFollow(state),
  }),
  dispatch => ({
      logout(){
        dispatch(logout())
      },
      message(){

      },
      changeIsReporting(){
          dispatch(toggleReport())
      },
      deleteAccount(){
        dispatch(startDelete())
      },
      follow_(id){
        dispatch(startFollowUser(id))
      },
      unfollow_(id){
        dispatch(startUnFollowUser(id))
      },
      startdeleteAccount(){
        dispatch(deleteUser())
      },
      report(content){
        dispatch(startSendingReport(content,'user'))
      },
      edit(){
        dispatch(editUser())
      },
      cancelEdit(){
        dispatch(cance_editUser())
      },
      cancelDelete(){
          dispatch(canceL_deleteUser())
      },
    fetchFollowers(){
        dispatch(startFollowersFetching())
    },
    fetchFOllowing(){
        dispatch(startFollowingFetching())
    },
    fetchPosts(){
        dispatch(startUserPostsFetch())
    },
    fetchStories(){
        dispatch(startStoriesFetch())
    }
  }),
  (stateToProps,disptachToProps) => {
    if(!stateToProps.isAuthenticated){
      if(typeof document !== 'undefined'){
        window.location.href = URL+'login/'
      }
      else{
        Actions.replace('Login')
      }
    }
    return ({...disptachToProps,
        ...stateToProps,
        fetch(){
            disptachToProps.fetchFollowers()
            disptachToProps.fetchFOllowing()
            disptachToProps.fetchPosts()
            disptachToProps.fetchStories()
        },
        follow(){
            disptachToProps.follow_(stateToProps.user.id)
        },
        unfollow(){
            disptachToProps.unfollow_(stateToProps.user.id)
        }
    })
  }
)(Header);
