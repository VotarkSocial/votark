import { connect } from 'react-redux';
import { Text, View, TextInput, Button, Image } from 'react-native';
import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';
import React, { useState } from 'react';
import styles from './styles'
import { colors } from '../../../configuration';
import Spinner from '../Spinner'
import { Link } from "react-router-dom";
import { Actions } from 'react-native-router-flux';
import { normalize } from '../../utils/normalize';
import { LinearGradient } from 'expo-linear-gradient';


const Login = ({
  onSubmit,
  isLoading,
  error = null,
}) => {
  const [username, changeUsername] = useState('');
  const [password, changePassword] = useState('');
  return (
    <View style={styles.container}>
      <LinearGradient
          colors={[colors.primaryc, 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 1300,
          }}
        />
      <Image style={styles.logo} source={require('../../public/static/img/logo.png')} ></Image>
      <TextInput
        style={styles.input}
        className="user"
        type="text"
        placeholder="username"
        value={username}   
        onChangeText={changeUsername}
        onChange={e => changeUsername(e.target.value)}
      />
      <TextInput
          style={styles.input}
          className="password"
          type="password"
          secureTextEntry={true}
          placeholder="password"
          value={password}
          onChangeText={changePassword}
          onChange={e=>changePassword(e.target.value)}
      />
      <View style={styles.option}>
        <Text style={styles.text} >{"Did you forget your password? "}</Text>
        {
          (typeof document === 'undefined')?(
            <Text style={styles.link} title={' reset password '} type="submit" 
            onPress={() =>
              console.log("here")
            }>{' reset password '}</Text>
          ):(
            <Link to="/reset-password" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text style={styles.text}>{' reset password '}</Text>
            </Link>
          )
        }
        
      </View>
      <View style={styles.errors}>
        {
        error && (
            <Text style={styles.error}>{ error }</Text>
        )
      }
        {
          isLoading ? (
            <View/>
          ) : (
            <View>
              <View style={styles.button}>
                  <Text style={styles.button} type="submit" onPress={
                      () => onSubmit(username,password)
                  }>{'LOGIN'}</Text>
              </View>
              <View style={styles.option}>
                <Text style={styles.text} >{"Do you have an account?  "}</Text>
                {
                  (typeof document === 'undefined')?(
                    <Text style={styles.link} title={' register now '} type="submit" 
                    onPress={() =>
                      Actions.Home(true)
                    }>{' register now '}</Text>
                  ):(
                    <Link to="/signup" underlayColor="#f0f4f7" style={styles.navItem}>
                      <Text style={styles.text}>{' register now'}</Text>
                    </Link>
                  )
                }
                
              </View>
            </View>
          )
        }
      </View>
    </View>
  );
} 

export default connect(
  state => ({
    isLoading: selectors.getIsAuthenticating(state),
    error: selectors.getAuthenticatingError(state),
    isAuthenticated: selectors.isAuthenticated(state),
  }),
  dispatch => ({
    onSubmit(username, password) {
      dispatch(actions.startLogin(username, password))
    },
  }),
  (stateToProps,disptachToProps) => {
    if(stateToProps.isAuthenticated){
      if(typeof document !== 'undefined'){
        window.location.href = URL
      }
      else{
        Actions.Home(true)
      }
    }
    return ({...disptachToProps,...stateToProps.isLoading,...stateToProps.error})
  }
)(Login);
