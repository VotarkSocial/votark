import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity,TextInput } from 'react-native';
import * as selectors from '../../reducers'
import React, {useEffect,useState} from 'react';
import styles from './styles'
import { URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';
import * as actions from '../../actions/search';
import { ScrollView } from 'react-native-gesture-handler';
import NavBar from '../NavBar';
import TokenRefresh from '../TokenRefresh';

const Search = ({onClick,home,search,getHistory,users,hashtags,isFetchingHash,isFetchingUsers,hashError,userError}) => {
    
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
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
        }}
        >
        <View style={(typeof document==='undefined')?styles.container:styles.webcontainer}>
            <TouchableOpacity style={styles.row} onClick={() => home}>
                <Image style={styles.logo} source={require('../../public/static/img/logo.png')} ></Image>
            </TouchableOpacity>  
            <View style={styles.row}>
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
            <TouchableOpacity style={styles.row} onClick={() => onClick}>
                <Image style={styles.icon} source={require('../../public/static/icon/top.png')} />
            </TouchableOpacity>
        </View>
            <View style={styles.section}>
                <Text style={styles.subtext}>{'# HASHTAGS:'}</Text>
                <View style={styles.elements}>
                    {(!hashError)?((!isFetchingHash)?(
                        <View>
                            {
                            hashtags.map(hash =>
                                <TouchableOpacity key={hash.id}>
                                    <Text style={styles.element} >#{hash.content}</Text>
                                </TouchableOpacity>
                                )
                            }
                        </View>
                    ):(<Text>{'LOADING...'}</Text>))
                    :(<Text>{hashError}</Text>)
                    }
                </View>
                <Text style={styles.subtext}>{'@ USERS'}</Text>
                <View style={styles.elements}>
                    {(!userError)?(!isFetchingUsers)?(
                        <ScrollView>
                            {
                            users.map(user =>
                                <TouchableOpacity key={user.id}>
                                    <Text style={styles.element} >@{user.username}</Text>
                                </TouchableOpacity>
                                )
                            }
                        </ScrollView>
                    ):(<Text>{'LOADING...'}</Text>)
                    :(<Text>{userError}</Text>)
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
    users: selectors.getSearchedUsers(state),
    hashtags: selectors.getSearchedHashtag(state),
    isFetchingUsers: selectors.getisFetchingSearchedUser(state),
    isFetchingHash: selectors.getisFetchingHashtag(state),
    hashError: selectors.getError_Hashtag_search(state),
    userError: selectors.getError_User_search(state),
  }),
  dispatch => ({
      onClick(){
        
      },
      home(){
        if(typeof document !== 'undefined'){
            window.location.href = URL
          }
          else{
            Actions.Home(true)
          }
      },
      search(query){
        dispatch(actions.startHashtagFetching(query))
        dispatch(actions.startUserFetching(query))
      },
      getHistory(hashtags,users,hashError,userError){
          if(hashtags.length===0 && users.length===0 && !hashError && userError){
            dispatch(actions.startHashtagHistoryFetching())
            dispatch(actions.startUserHistoryFetching())
          }
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
    })
  },
)(Search);
