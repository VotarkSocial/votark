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
import { user } from '../../schemas/user';
import { setToNull } from '../../actions/post';

const NavBar = ({chats,home,search,user,add}) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.row} onPress={home}>
            <Image style={styles.icon} source={require('../../public/static/icon/home.png')} ></Image>
        </TouchableOpacity>  
        <TouchableOpacity style={styles.row} onPress={search}>
            <Image style={styles.icon} source={require('../../public/static/icon/search.png')} />
        </TouchableOpacity>  
        <TouchableOpacity style={styles.row} onPress={add}>
            <Image style={styles.icon} source={require('../../public/static/icon/add.png')} ></Image>
        </TouchableOpacity>  
        <TouchableOpacity style={styles.row} onPress={chats}>
            <Image style={styles.icon} source={require('../../public/static/icon/notification.png')} />
        </TouchableOpacity>   
        <TouchableOpacity style={styles.row} onPress={user}>
            <Image style={styles.icon} source={require('../../public/static/icon/user.png')} />
        </TouchableOpacity>   
    </View>
);

export default connect(
  state => ({
    userid: selectors.getAuthUserID(state),
  }),
  dispatch => ({
      home(){
        if(typeof document !== 'undefined'){
            window.location.href = URL
          }
          else{
            Actions.replace('Home')
          }
      },
      search(){
        dispatch(setToNull())
        if(typeof document !== 'undefined'){
            window.location.href = URL+'search/'
          }
          else{
            Actions.Search()
          }
      },
      add(){
        dispatch(setToNull())
        if(typeof document !== 'undefined'){
            window.location.href = URL+'camara/'
          }
          else{
            Actions.replace('Camara')
          }
      },
      user(id){
        dispatch(setToNull())
        dispatch(actions.startUsFetch(id))
      },
      chats(){
        if(typeof document !== 'undefined'){
          window.location.href = URL+'chats/'
        }
        else{
          Actions.replace('Chats')
        }
      }
  }), 
  (stateToProps, disptachToProps) => ({
      home(){
          disptachToProps.home()
      },
      search(){
          disptachToProps.search()
      },
      user(){
        disptachToProps.user(stateToProps.userid)
      },
      chats(){
        disptachToProps.chats()
      },
      add(){
        disptachToProps.add()
      }
  })
)(NavBar);
