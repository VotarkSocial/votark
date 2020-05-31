import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import * as selectors from '../../reducers'
import React, {useEffect, useState} from 'react';
import styles from './styles'
import { URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';
import NavBar from '../NavBar';
import TokenRefresh from '../TokenRefresh';
import { startFetchingChats, startAddingChat, selectChat, startAddingUser } from '../../actions/chat';
import {v4} from 'uuid'
import { startFetchingMessages, startAddingMessage } from '../../actions/message';
import { startUserFetching } from '../../actions/search';


const Chats = ({add, chats,error,messages, error_message,fetch,selected,select,send,looggedUser,isFetchingUsers,userError, users,search, addUser }) => {
    
    useEffect(
        () => {
          const interval = setInterval(fetch, 1000);
          return () => {fetch
            clearInterval(interval);
          };
        },
        []
      );
    
    const [query, changeQuery] = useState('');
    const [isAdding, changeIsAdding] = useState(false);
    const [isAddingUser, changeIsAddingUser] = useState(false);
    const [name, changeName] = useState('');
    const [message, changeMessage] = useState('');

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
        {selected?
            <View style={(typeof document==='undefined')?styles.container:styles.webcontainer}>
                {isAddingUser ? 
                        <View style={styles.row2}>
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
                    :
                    <TouchableOpacity style={styles.row} onPress={()=>select(null)}>
                        <Image style={styles.icon} source={require('../../public/static/icon/return.png')} />
                    </TouchableOpacity>    
                }
                <TouchableOpacity style={styles.row} onPress={()=>changeIsAddingUser(!isAdding)}>
                    {
                        isAddingUser?
                        <Text style={styles.text_} >{"cancel"}</Text>
                        :
                        <Image style={styles.icon} source={require('../../public/static/icon/add.png')} />
                    }
                </TouchableOpacity>   
            </View>
            :
            <View style={(typeof document==='undefined')?styles.container:styles.webcontainer}>
                <View style={styles.row}>
                    <Text style={styles.text} >{"CHATS"}</Text>
                </View>
                    {
                        isAdding?
                        <Text style={styles.text_} onPress={()=>changeIsAdding(false)}>{"cancel"}</Text>
                        :
                    <TouchableOpacity style={styles.row} onPress={()=>changeIsAdding(true)}>
                            <Image style={styles.icon} source={require('../../public/static/icon/add.png')} />
                    </TouchableOpacity>   
                    }
                    
            </View>
        }
        {selected?
            <ScrollView style={styles.section}>
                {
            isAddingUser &&
                    <View style={styles.section2}>
                    {(!userError)?(!isFetchingUsers)?(
                        <View style={styles.item}>
                            {
                            users.map(user =>
                                <TouchableOpacity key={user.id} style={styles.item} onPress={()=>{
                                    addUser(user.id)
                                    changeIsAddingUser(false)
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
                }
                <View style={styles.elements}>
                    <LinearGradient
                        colors={[colors.primaryd, 'transparent']}
                        style={{
                            width: '100%',
                            height: '100%',
                            flexDirection: 'column-reverse',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            
                        }}
                        >
                    {(!error_message)?(
                        <View style={styles.item}>
                            {
                                messages.length!==0?
                                messages.map(item =>
                                    <View style={looggedUser===item.user?styles.my_message:item.isConfirmed?styles.their_message:styles.message_notConfirmed}>
                                        <Text style={styles.username} > {item.username?'@'+item.username:'Loading...'}</Text>
                                        <Text style={styles.message_text} > { item.content }</Text>
                                    </View>                                
                                ):
                                <Text style={styles.error_} >NO CURRENT MESSAGES</Text>
                            }
                        </View>
                    ):(<Text>{error}</Text>)
                    }
                    </LinearGradient>
                </View>
            </ScrollView>
        :
        <View style={styles.section3}>
        {
            isAdding &&
                    <View style={styles.row2}>
                        <TextInput
                            style={styles.sendInput}
                            className="user"
                            type="text"
                            placeholder="Chat name"
                            value={name}   
                            onChangeText={changeName}
                            onChange={e => changeName(e.target.value)}
                            />
                        <TouchableOpacity style={styles.row} onPress={()=>{
                            changeIsAdding(false)
                            add(name)}}>
                            <Text style={styles.text2} >{"CREATE"}</Text>
                        </TouchableOpacity> 
                    </View>
        }
            
                <ScrollView>
                <View style={styles.elements}>
                    {(!error)?(
                        <View style={styles.item}>
                            {
                                chats.length!==0?
                            chats.map(chat =>
                                <TouchableOpacity key={chat.id} style={styles.item} onPress={()=>{
                                    select(chat.id)
                                }}>
                                    <View style={styles.row}>
                                        <Image style={styles.photo} source={chat.picture?{uri: STATIC_URL + chat.picture}:require('../../public/static/icon/user.png')}/>
                                        <Text style={styles.element} > { chat.name }</Text>
                                    </View>
                                    <View style={styles.bar}></View>
                                </TouchableOpacity>
                                ):
                                <Text style={styles.error_} >NO CURRENT CHATS</Text>
                            }
                        </View>
                    ):(<Text>{error}</Text>)
                    }
                </View>
            </ScrollView>
        </View>
    }
    </LinearGradient>
    { selected&&
  <View style={styles.Writer}>
      <View style={styles.row}>
            <TextInput
            style={styles.sendInput}
            className="user"
            type="text"
            placeholder="Write here..."
            value={message}   
            onChangeText={changeMessage}
            onChange={e => changeMessage(e.target.value)}
            />
            <TouchableOpacity style={styles.row} onPress={() =>{
              send(message)
              changeMessage('')
            }}>
                <Image style={styles.icon_big} source={require('../../public/static/icon/send.png')} />
            </TouchableOpacity>    
      </View>
    </View>
    }
    <NavBar/>
    <TokenRefresh/>
    </View>
)};

export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
    error: selectors.getErrorChat(state),
    isFetching: selectors.getisFetchingChat(state),
    chats: selectors.getChats(state),
    messages: selectors.getMessages(state),
    error_message: selectors.getErrorMessage(state),
    selected: selectors.getChat(state,selectors.getChatSelected(state)),
    selectedid: selectors.getChatSelected(state),
    looggedUser: selectors.getAuthUserID(state),
    isFetchingUsers: selectors.getisFetchingSearchedUser(state),
    userError: selectors.getError_User_search(state),
    users: selectors.getSearchedUsers(state),
  }),
  dispatch => ({
      add(name){
        dispatch(startAddingChat(name,v4()))
      },
      fetch(){
          dispatch(startFetchingChats())
          dispatch(startFetchingMessages())
      },
      select(id){
          dispatch(selectChat(id))
      },
      send(message){
          dispatch(startAddingMessage(message,v4()))
      },
      addUser(id){
          dispatch(startAddingUser(id))
      },
      search(query){
        dispatch(startUserFetching(query))
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
    })
  }
)(Chats);