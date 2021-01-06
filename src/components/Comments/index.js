import { connect } from 'react-redux';
import {Text, View, Image, TextInput, ScrollView, TouchableOpacity, BackHandler } from 'react-native';
import * as selectors from '../../reducers'
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles'
import { Actions } from 'react-native-router-flux';
import { startAddingComment, startFetchingComments } from '../../actions/comment';
import {v4} from 'uuid'

const Comments = ({comments,send,fetch}) => {
    
  useEffect(
    () => {
      const interval = setInterval(fetch, 1000);
      return () => {
        clearInterval(interval);
      };
    },
    []
  );

  const [isOpen, toggleComments] = useState(false)
  const [comment, changeComment] = useState('');
  const scrollViewRef = useRef();

  backAction = () => {
    if(isOpen){
      toggleComments(false)
    }
  }

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );

  
  return (
  <View style={styles.container}>
      <TouchableOpacity style={styles.comments} onPress={()=>toggleComments(true)}>
        {
          comments.map(comm =>
            <Text key={comm.id} style={comm.isConfirmed?styles.comment:styles.notConfirmed} >{comm.isConfirmed?comm.username + ' : ' + comm.content:comm.content}</Text>
            )
        }
      </TouchableOpacity>
      <View style={styles.row}>
            <TextInput
            style={styles.input}
            className="user"
            type="text"
            placeholder="Write a Comment..."
            value={comment}   
            onChangeText={changeComment}
            onChange={e => changeComment(e.target.value)}
            placeholderTextColor="#777777"
            onFocus={()=>toggleComments(true)}
            />
            <Text style={styles.send} type="submit" 
            onPress={() =>{
              changeComment('')
              send(comment)}
            }>{' Send '}</Text>
      </View>
      {isOpen && <View style={styles.comments_banner}>
        <TouchableOpacity style={styles.iconContainer} onPress={()=>toggleComments(false)}>
          <Image style={styles.icon} source={require('../../public/static/icon/close.png')}/>
        </TouchableOpacity>
        <Text style={styles.text} >
          {'Comments'}
        </Text>
        
        <ScrollView style={styles.comments_container}
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
        {
          [...comments].reverse().map(comm =>
            <Text key={comm.id} style={comm.isConfirmed_?styles.comment_:styles.notConfirmed_} >{comm.isConfirmed?comm.username + ' : ' + comm.content:comm.content}</Text>
            )
        }
        </ScrollView >
        <View style={styles.row}>
          <TextInput
          style={styles.input_}
          className="user"
          type="text"
          placeholder="Write a Comment..."
          value={comment}   
          onChangeText={changeComment}
          onChange={e => changeComment(e.target.value)}
          />
          <Text style={styles.send_} type="submit" 
          onPress={() =>{
            changeComment('')
            send(comment)}
          }>{' Send '}</Text>
      </View>
      </View>}
</View>
)};

export default connect(
  state => ({
    comments: selectors.getComments(state),
    versusid: selectors.getVersus(state)?selectors.getVersus(state).id:null
  }),
  dispatch => ({
    send(comment,versusid){
      dispatch(startAddingComment(comment,versusid,v4()))
    },
    fetch(){
      dispatch(startFetchingComments())
    }
  }),
  (stateToProps, dispatchToProps) => ({
    comments: stateToProps.comments,
    send(comment){
      if(stateToProps.versusid){
        dispatchToProps.send(comment,stateToProps.versusid)
      }
    },
    fetch(){
      dispatchToProps.fetch()
    }
  })
)(Comments);
