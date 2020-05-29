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
import { startFetchingChats, startAddingChat } from '../../actions/chat';
import {v4} from 'uuid'


const Chats = ({add, chats,error,isFetching,fetch}) => {
    
    useEffect(
        () => {
          const interval = setInterval(fetch, 50000);
          return () => {
            clearInterval(interval);
          };
        },
        []
      );

    const [isAdding, changeIsAdding] = useState(false);
    const [name, changeName] = useState('');

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
                <Text style={styles.text} >{"CHATS"}</Text>
            </View>
            <TouchableOpacity style={styles.row} onPress={()=>changeIsAdding(!isAdding)}>
                {
                    isAdding?
                    <Text style={styles.text_} >{"cancel"}</Text>
                    :
                    <Image style={styles.icon} source={require('../../public/static/icon/add.png')} />
                }
                
            </TouchableOpacity>   
        </View>
        {
            isAdding? 
                <View style={styles.section}>
                    <View style={styles.row2}>
                        <TextInput
                            style={styles.input}
                            className="user"
                            type="text"
                            placeholder="Chat name"
                            value={name}   
                            onChangeText={changeName}
                            onChange={e => changeName(e.target.value)}
                            />
                        <TouchableOpacity style={styles.row} onPress={()=>add(name)}>
                            <Text style={styles.text2} >{"CREATE"}</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            :
                <ScrollView style={styles.section}>
                <View style={styles.elements}>
                    {(!error)?(
                        <View style={styles.item}>
                            {
                                chats.length!==0?
                            chats.map(chat =>
                                <TouchableOpacity key={chat.id} style={styles.item} onPress={()=>{
                                    
                                }}>
                                    <View style={styles.row}>
                                        <Image style={styles.photo} source={chat.picture?{uri: STATIC_URL + chat.picture}:require('../../public/static/icon/user.png')}/>
                                        <Text style={styles.element} > { chat.name }</Text>
                                    </View>
                                    <View style={styles.bar}></View>
                                </TouchableOpacity>
                                ):
                                <Text style={styles.element} >NO CURRENT CHATS</Text>
                            }
                        </View>
                    ):(<Text>{error}</Text>)
                    }
                </View>
            </ScrollView>
        }
    </LinearGradient>
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
  }),
  dispatch => ({
      add(name){
        dispatch(startAddingChat(name,v4()))
      },
      fetch(){
          dispatch(startFetchingChats())
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
    return ({...disptachToProps,...stateToProps})
  }
)(Chats);