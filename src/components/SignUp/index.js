import { connect } from 'react-redux';
import { Text, View, TextInput, Button, Image } from 'react-native';
import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';
import React, { useState } from 'react';
import styles from './styles'
import { colors } from '../../../configuration';
import { Link } from "react-router-dom";
import { Actions } from 'react-native-router-flux';
import { validateEmail } from '../../utils/validate';
import { LinearGradient } from 'expo-linear-gradient';
import { URL } from '../../../configuration'
import Spinner from 'react-native-loading-spinner-overlay';

const SignUp = ({
  onSubmit,
  isLoading,
  error = null,
}) => {
  const [username, changeUsername] = useState('');
  const [password, changePassword] = useState('');
  const [email, changeEmail] = useState('');
  const [confirmPassword, changeConfirmation] = useState('');
  return (
    <View style={styles.container}>
      <LinearGradient
          colors={[colors.primaryc, 'transparent']}
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
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
        className="email"
        type="email"
        placeholder="email"
        value={email}   
        onChangeText={changeEmail}
        onChange={e => changeEmail(e.target.value)}
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
      <TextInput
          style={styles.input}
          className="password"
          type="password"
          secureTextEntry={true}
          placeholder="confirm password"
          value={confirmPassword}
          onChangeText={changeConfirmation}
          onChange={e=>changeConfirmation(e.target.value)}
      />     
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
                      () => onSubmit(username,password, email, confirmPassword)
                  }>{'SIGN UP'}</Text>
              </View>
              <View style={styles.option}>
                <Text style={styles.text} >{"Do you have an account?  "}</Text>
                {
                  (typeof document === 'undefined')?(
                    <Text style={styles.link} title={' login '} type="submit" 
                    onPress={() =>
                      Actions.Login(true)
                    }>{' login '}</Text>
                  ):(
                    <Link to="/login" style={styles.navItem}>
                      <Text style={styles.text}>{' login '}</Text>
                    </Link>
                  )
                }
                
              </View>
            </View>
          )
        }
      </View>
      </LinearGradient>
    </View>
  );
} 

export default connect(
  state => ({
    isLoading: selectors.getIsRegistrating(state),
    error: selectors.getSignUpError(state),
    isAuthenticated: selectors.isAuthenticated(state),
  }),
  dispatch => ({
    onSubmit(username, password, email, confirmPass) {
      if(username && password){
        if(validateEmail(email)){
          if(password===confirmPass){
            dispatch(actions.startRegistration(username,password,email))
          }
          else{
            dispatch(actions.failRegistration("PASSWORDS DON'T MATCH"))
          }
        }
        else{
          dispatch(actions.failRegistration("WRITE A VALID EMAIL"))
        }
      }
      else if(!username){
        dispatch(actions.failRegistration('WRITE A VALID USERNAME'))
      }
      else if(!password){
        dispatch(actions.failRegistration('WRITE A VALID PASSWORD'))
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
)(SignUp);
