import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity,TextInput } from 'react-native';
import * as selectors from '../../reducers'
import React, {useEffect,useState} from 'react';
import styles from './styles'
import { URL, STATIC_URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';
import * as actions from '../../actions/search';
import { ScrollView } from 'react-native-gesture-handler';
import NavBar from '../NavBar';
import TokenRefresh from '../TokenRefresh';
import { startFetchPost, setToNull } from '../../actions/post';
import { startFetchTopic, selectTopic } from '../../actions/topic';
import Posts from '../Posts';
import { startUsFetch } from '../../actions/user';

const Search = ({search,users,hashtags,isFetchingHash,isFetchingUsers,hashError,userError,fetch,posts,topics,error,select,selected,selectUser}) => {
    
    useEffect(
        () => {
          const interval = setInterval(fetch, 500);
          return () => {
            clearInterval(interval);
          };
        },
        []
      );

    const [query, changeQuery] = useState('');

    const changeQueryMiddleware = (query) => {
        changeQuery(query)
        search(query)
    }

    return (
    <View style={styles.main_container}>
    <LinearGradient
        colors={[colors.primaryB, 'transparent']}
        style={{
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
        }}
        >
        <View style={(typeof document==='undefined')?styles.container:styles.webcontainer}>
            <View style={styles.row}>
                <Image style={styles.icon} source={require('../../public/static/icon/search.png')} ></Image>
                <TextInput
                style={styles.input}
                className="user"
                type="text"
                placeholder="Search"
                value={query}   
                onChangeText={changeQueryMiddleware}
                onChange={e => changeQueryMiddleware(e.target.value)}
                />
            </View>
        </View>
        {
            query?(
                <ScrollView style={styles.section}>
                    <Text style={styles.subtext}>{'@ USERS'}</Text>
                    <View style={styles.elements}>
                        {(!userError)?(!isFetchingUsers)?(
                            <View style={styles.item}>
                                {
                                users.map(user =>
                                    <TouchableOpacity key={user.id} style={styles.item} onPress={()=>{
                                        selectUser(user.id)
                                    }}>
                                        <View style={styles.row}>
                                            <Image style={styles.photo} source={user.picture?{uri: STATIC_URL + user.picture}:require('../../public/static/icon/user.png')}/>
                                            <Text style={styles.element} >@ { user.username }</Text>
                                        </View>
                                        <View style={styles.bar}></View>
                                    </TouchableOpacity>
                                    )
                                }
                            </View>
                        ):(<Text>{'LOADING...'}</Text>)
                        :(<Text>{userError}</Text>)
                        }
                    </View>
                    <Text style={styles.subtext}>{'# HASHTAGS:'}</Text>
                    <View style={styles.elements}>
                        {(!hashError)?((!isFetchingHash)?(
                            <View style={styles.item}>
                                {
                                hashtags.map(hash =>
                                    <TouchableOpacity key={hash.id} style={styles.item} onPress={()=>{
                                        select(hash.topic)
                                        changeQuery('')
                                    }}>
                                        <Text style={styles.element} ># {hash.content}</Text>
                                        <View style={styles.bar}></View>
                                    </TouchableOpacity>
                                    )
                                }
                            </View>
                        ):(<Text>{'LOADING...'}</Text>))
                        :(<Text>{hashError}</Text>)
                        }
                    </View>
                </ScrollView>):(
                        (error)?(
                        <View style={styles.section2}>
                            <Text style={styles.subtext} >{error}</Text>
                        </View>
                        
                        ):(                    
                            <View style={styles.section2}>
                                <ScrollView horizontal={true}>
                                        {
                                        topics.map(topic =>
                                            <TouchableOpacity key={topic.id} style={selected===topic?styles.selected:styles.topic} onPress={()=>{select(topic.id)}}>
                                                <Text style={selected===topic?styles.el_selected:styles.element} >{topic.name}</Text>
                                            </TouchableOpacity>
                                            )
                                        }
                                </ScrollView>
                                {
                                    selected &&
                                    <ScrollView horizontal={true}>
                                        {
                                        selected.hashtags.map(hash =>
                                                <Text key={hash.id} style={styles.hash} >#{hash.content}</Text>
                                            )
                                        }
                                </ScrollView>
                                }
                                <Posts posts={posts}></Posts>
                            </View>
                        )
                )
        }
        </LinearGradient>
       <NavBar/>
      <TokenRefresh/>
    </View>
)};

export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
    users: selectors.getSearchedUsers(state),
    hashtags: selectors.getSearchedHashtag(state),
    isFetchingUsers: selectors.getisFetchingSearchedUser(state),
    isFetchingHash: selectors.getisFetchingHashtag(state),
    hashError: selectors.getError_Hashtag_search(state),
    userError: selectors.getError_User_search(state),
    topics: selectors.getTopics(state),
    posts: selectors.getPosts(state),
    error : selectors.getFetchingErrorTopic(state),
    selected : selectors.getTopic(state,selectors.getTopicSelected(state))
  }),
  dispatch => ({
      onClick(){
        
      },
      home(){
        if(typeof document !== 'undefined'){
            window.location.href = URL
          }
          else{
            Actions.replace('Home')
          }
      },
      search(query){
        dispatch(actions.startHashtagFetching(query))
        dispatch(actions.startUserFetching(query))
      },
    dofetch(){
        dispatch(startFetchPost())
        dispatch(startFetchTopic())
      },
    select(id){
        dispatch(selectTopic(id))
    },
    selectUser(id){
        dispatch(setToNull())
        dispatch(startUsFetch(id))
    },
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
            if(stateToProps.topics.length===0 || stateToProps.posts.length===0){
                disptachToProps.dofetch()
            }
        }
    })
  },
)(Search);
