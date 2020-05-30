import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
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

const Header = ({user,followsUser,logged,followers,following,
    isReporting,changeIsReporting,follow,isFollowing,
    edit,unfollow,message,messages,deleteAccount,
    report,posts, fetch, isEditing, cancelEdit, cancelDelete,
    startdeleteAccount,isDeleting, logout }) => {
        
         const [content, changeContent] = useState('');

        useEffect(
            () => {
              const interval = setInterval(fetch, 500);
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
                        </TouchableOpacity> 
                        <Text style={styles.text3} >{user.first_name + ' ' + user.last_name}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.text2} >{followers}</Text>
                        <Text style={styles.text3} >{'Followers'}</Text>
                    </View> 
                    <View >
                        <Text style={styles.text2} >{following}</Text>
                        <Text style={styles.text3} >{'Following'}</Text>
                    </View> 
                </View>
                <Text style={styles.text2} >{user.bio}</Text>
                    {logged?(
                            <View style={styles.row}>
                                {!isDeleting&&(
                                    (isEditing)?
                                    <TouchableOpacity style={styles.button} onPress={cancelEdit}>
                                        <Text style={styles.text3} >{'CANCEL'}</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={styles.button} onPress={edit}>
                                        <Text style={styles.text3} >{'Edit profile'}</Text>
                                    </TouchableOpacity>
                                        )
                                }
                                {!isEditing&&(
                                    (isDeleting)?
                                    <TouchableOpacity style={styles.button} onPress={cancelDelete}>
                                        <Text style={styles.text3} >{'CANCEL'}</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={styles.button} onPress={startdeleteAccount}>
                                        <Text style={styles.text3} >{'DELETE MY ACCOUNT'}</Text>
                                    </TouchableOpacity>
                                        )
                                }
                                <TouchableOpacity style={styles.done} onPress={logout}>
                                    <Text style={styles.text_selected} >{'Logout'}</Text>
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
                                <TouchableOpacity style={styles.button} onPress={changeIsReporting}>
                                    <Text style={styles.text3} >{isReporting?'CANCEL':'REPORT'}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                    {
                        isEditing?
                            <Text style={styles.text2}>This option will be soon integrated</Text>
                        :
                            isDeleting? 
                            <View>
                                <Text style={styles.mainText}>ARE YOU SURE YOU WANT TO DELETE YOUR ACCOUNT?</Text>
                                <View style={styles.row}>
                                    <TouchableOpacity style={styles.done} onPress={deleteAccount}>
                                        <Text style={styles.text_selected} >{'YES'}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.done} onPress={cancelDelete}>
                                        <Text style={styles.text_selected} >{'NO'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            :
                                isReporting?
                                <View style={styles.report}>
                                    <Text style={styles.mainText}>TELL US WHAT IS GOING ON</Text>
                                    <View style={styles.row}>
                                        <TextInput
                                            style={styles.input}
                                            className="email"
                                            type="multiline"
                                            placeholder="Write here..."
                                            value={content}   
                                            onChangeText={changeContent}
                                            onChange={e => changeContent(e.target.value)}
                                        />
                                        <TouchableOpacity style={styles.done} onPress={()=>report(content)}>
                                            <Text style={styles.text_selected} >{'Send'}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            :
                            <Posts posts={posts}/>
                    }
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
    hasFetchedPost : selectors.getFetchedOnce(state),
    isEditing: selectors.getIsEditingUser(state),
    isDeleting: selectors.getIsDeletingUser(state),
    isReporting : selectors.getIsReporting(state),
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
