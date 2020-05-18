import { connect } from 'react-redux';
import { Text, View, TextInput, Button, Image } from 'react-native';
import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';
import React, { useState } from 'react';
import styles from './styles'
import { colors } from '../../../configuration';
import { Link } from "react-router-dom";
import { Actions } from 'react-native-router-flux';
import { normalize } from '../../utils/normalize';
import { LinearGradient } from 'expo-linear-gradient';
import { URL } from '../../../configuration'
import Spinner from 'react-native-loading-spinner-overlay';

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
          colors={[colors.primary, 'transparent']}
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
      <View style={styles.centered}>
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
              Actions.ResetPassword(true)
            }>{' reset password '}</Text>
          ):(
            <Link to="/reset-password" style={styles.navItem}>
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
            <View>
              <Text style={styles.error}>{'LOADING...'}</Text>
            </View>
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
                      Actions.SignUp(true)
                    }>{' register now '}</Text>
                  ):(
                    <Link to="/signup" style={styles.navItem}>
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
      </LinearGradient>
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
      if(username && password){
        dispatch(actions.startLogin(username, password))
      }
      else if(!username){
        dispatch(actions.failLogin('WRITE A VALID USERNAME'))
      }
      else if(!password){
        dispatch(actions.failLogin('WRITE A VALID PASSWORD'))
      }
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
    return ({...disptachToProps,...stateToProps})
  }
)(Login);
