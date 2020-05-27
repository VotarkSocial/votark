import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import * as selectors from '../../reducers'
import React, {useEffect} from 'react';
import styles from './styles'
import { URL, STATIC_URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';
import { logout } from '../../actions/auth';
import NavBar from '../NavBar';
import TokenRefresh from '../TokenRefresh';
import Posts from '../Posts';
import { startFollowersFetching, startFollowingFetching, startStoriesFetch } from '../../actions/user';
import { startUserPostsFetch } from '../../actions/post';

const Header = ({user,followsUser,logged,followers,following,
    isFetchingFollow,follow,isFollowing,
    edit,unfollow,message,messages,deleteAccount,
    report,posts, fetch}) => {
        
        useEffect(
            () => {
              const interval = setInterval(fetch, 5000);
              return () => {
                clearInterval(interval);
              };
            },
            []
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
            <View style={styles.row}>
                <Text style={styles.text} >{user.username?'@'+user.username:'PROFILE'}</Text>
            </View>
        </View>
        <View style={styles.section}>
            <View style={styles.item}>
                <View style={styles.row}>
                    <View>
                        <TouchableOpacity >
                            <Image style={styles.photo} source={user.picture?{uri: user.picture}:require('../../public/static/icon/user.png')}/>
                            {!followsUser&&logged&&<Image style={styles.icon2} source={require('../../public/static/icon/add.png')} />}
                        </TouchableOpacity> 
                        <Text style={styles.text3} >{user.first_name + ' ' + user.last_name}</Text>
                    </View>
                    <View>
                        <Text style={styles.text2} >{followers}</Text>
                        <Text style={styles.text3} >{'Followers'}</Text>
                    </View> 
                    <View>
                        <Text style={styles.text2} >{following}</Text>
                        <Text style={styles.text3} >{'Following'}</Text>
                    </View> 
                </View>
                <Text style={styles.text2} >{user.bio}</Text>
                    {logged?(
                            <View style={styles.row}>
                                <TouchableOpacity style={styles.button} onPress={edit}>
                                    <Text style={styles.text3} >{'Edit profile'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={messages}>
                                    <Text style={styles.text3} >{'Messsages'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={deleteAccount}>
                                    <Text style={styles.text3} >{'DELETE MY ACCOUNT'}</Text>
                                </TouchableOpacity>
                            </View>
                        ):(
                            <View style={styles.row}>
                                {isFollowing?
                                    <TouchableOpacity style={styles.button} onPress={unfollow}>
                                        <Text style={styles.text3} >{'UNFOLLOW'}</Text>
                                    </TouchableOpacity>:
                                    <TouchableOpacity style={styles.button} onPress={follow}>
                                        <Text style={styles.text3} >{'FOLLOW'}</Text>
                                    </TouchableOpacity>
                                }
                                <TouchableOpacity style={styles.button} onPress={message}>
                                    <Text style={styles.text3} >{'MESSAGE'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={report}>
                                    <Text style={styles.text3} >{'REPORT'}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                <Posts posts={posts}/>
            </View>
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
    hasFetchedPost : selectors.getFetchedOnce(state)
  }),
  dispatch => ({
      messages(){
        
      },
      message(){

      },
      follow(){

      },
      unfollow(){

      },
      deleteAccount(){

      },
      report(){

      },
      edit(){

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
        Actions.Login(true)
      }
    }
    return ({...disptachToProps,
        ...stateToProps,
        fetch(){
            if(stateToProps.followers===0){
                disptachToProps.fetchFollowers()
            }
            if(stateToProps.following===0){
                disptachToProps.fetchFOllowing()
            }
            if(stateToProps.posts.length===0 && !stateToProps.hasFetchedPost){
                disptachToProps.fetchPosts()
            }
            if(stateToProps.stories.length===0){
                disptachToProps.fetchStories()
            }
        }
    })
  }
)(Header);
