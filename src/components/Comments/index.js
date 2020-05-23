import { connect } from 'react-redux';
import {Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import * as selectors from '../../reducers'
import React, { useState } from 'react';
import styles from './styles'
import { Actions } from 'react-native-router-flux';
import { startAddingComment } from '../../actions/comment';
import {v4} from 'uuid'

const Comments = ({comments,send}) => {
    const [comment, changeComment] = useState('');
    return (
  <View style={styles.container}>
      <TouchableOpacity style={styles.comments}>
        {
          comments.map(comm => 
            <Text key={comm.id} style={styles.comment} >{comm.content}</Text>
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
            />
            <Text style={styles.send} type="submit" 
            onPress={() =>
              send(comment)
            }>{' Send '}</Text>
      </View>
</View>
)};

export default connect(
  state => ({
    comments: selectors.getComments(state),
    versusid: selectors.getVersus(state)?selectors.getVersus(state):null
  }),
  dispatch => ({
    send(comment,versusid){
      dispatch(startAddingComment(comment,versusid,v4()))
    }
  }),
  (stateToProps, dispatchToProps) => ({
    comments: stateToProps.comments,
    send(comment){
      if(stateToProps.versusid){
        dispatchToProps.send(comment,stateToProps.versusid)
      }
    }
  })
)(Comments);
