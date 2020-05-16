import { connect } from 'react-redux';
import { Text, View, TextInput, Button, Image } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';
import React, { useState } from 'react';
import styles from './styles'
import { colors } from '../../../configuration';
import Spinner from '../Spinner'
import { Link } from "react-router-dom";

const Login = ({
  onSubmit,
  isLoading,
  error = null,
}) => {
  const [username, changeUsername] = useState('');
  const [password, changePassword] = useState('');
  return (
    <View style={styles.container}>
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
        <Link to="/reset-password" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.text}>{' reset password '}</Text>
        </Link>
      </View>
      <View style={styles.errors}>
        {
        error && (
            <Text style={styles.error}>{ error }</Text>
        )
      }
        {
          isLoading ? (
            <Spinner/>
          ) : (
            <View style={styles.buttons}>
              <View style={styles.button}>
                  <Button className="login_button" color={colors.primary} title={'LOGIN'} type="submit" onPress={
                      () => onSubmit(username,password)
                  }/>
              </View>
              <View style={styles.option}>
                <Text style={styles.text} >{"Do you have an account?  "}</Text>
                <Link to="/signup" underlayColor="#f0f4f7" style={styles.navItem}>
                  <Text style={styles.text}>{' register now'}</Text>
                </Link>
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
  }),
  dispatch => ({
    onSubmit(username, password) {
      dispatch(actions.startLogin(username, password));
    },
  }),
)(Login);
