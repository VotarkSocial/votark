import { connect } from 'react-redux';
import {Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import * as selectors from '../../reducers'
import React, { useState } from 'react';
import styles from './styles'
import { URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';
import Header from '../Header';
import Stories from '../Stories';
import NavBar from '../NavBar';
import VersusPad from '../VersusPad';

const Comments = () => {
    const [comment, changeComment] = useState('');
    return (
  <View style={styles.container}>
      <TouchableOpacity style={styles.comments}>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT super large sdjflsdjflkjsdlkfjsdfjslkdjfksjdfsdfsdfsjdlkfjskjdfñsjdñfjafñjañfjs</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT super large sdjflsdjflkjsdlkfjsdfjslkdjfksjdfsdfsdfsjdlkfjskjdfñsjdñfjafñjañfjs</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT super large sdjflsdjflkjsdlkfjsdfjslkdjfksjdfsdfsdfsjdlkfjskjdfñsjdñfjafñjañfjs</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT super large sdjflsdjflkjsdlkfjsdfjslkdjfksjdfsdfsdfsjdlkfjskjdfñsjdñfjafñjañfjs</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
        <Text style={styles.comment} >HERE IS A COMMENT</Text>
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
              Actions.ResetPassword(true)
            }>{' Send '}</Text>
      </View>
</View>
)};

export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
  }),
  undefined,
  (stateToProps,disptachToProps) => {
    if(stateToProps.isAuthenticated){
      if(typeof document !== 'undefined'){
        window.location.href = URL+'login/'
      }
      else{
        Actions.Login(true)
      }
    }
    return ({isAuthenticated: stateToProps.isAuthenticated})
  }
)(Comments);
