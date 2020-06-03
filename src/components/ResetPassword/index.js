import { Link } from "react-router-dom";
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';
import { validateEmail } from '../../utils/validate';
import * as selectors from '../../reducers';
import { Text, View, TextInput, Button, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './styles'
import { colors } from '../../../configuration';
import * as actions from '../../actions/auth';
import { reduxForm } from 'redux-form'
import { URL } from '../../../configuration'

const ResetPassword = ({
  onSubmit,
  isLoading,
  error = null,
  hasReset,
  onBack,
}) => {
  const validate = values => {
    const error= {};
    error.email= '';
    error.name= '';
    var ema = values.email;
    var nm = values.name;
    if(values.email === undefined){
      ema = '';
    }
    if(values.name === undefined){
      nm = '';
    }
    if(ema.length < 8 && ema !== ''){
      error.email= 'too short';
    }
    if(!ema.includes('@') && ema !== ''){
      error.email= '@ not included';
    }
    if(nm.length > 8){
      error.name= 'max 8 characters';
    }
    return error;
  };
  const [email, changeEmail] = useState('');
  const renderInput = ({ input, label, type, meta: { touched, error, warning } })=>{
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
  }

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
        className="email"
        type="email"
        placeholder="email"
        value={email}   
        onChangeText={changeEmail}
        onChange={e => changeEmail(e.target.value)}
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
            hasReset ? (
                <View>
                <Text style={styles.error}>{'AN EMAIL WAS SENT WITH YOUR NEW PASSWORD'}</Text>
                    <View style={styles.button}>
                        <Text style={styles.button} type="submit" onPress={
                            () => onBack()
                        }>{' GO BACK '}</Text>
                    </View>
                </View>
            ):(
                <View> 
                    <View style={styles.button}>
                        <Text style={styles.button} type="submit" onPress={
                            () => onSubmit(email)
                        }>{'SEND EMAIL'}</Text>
                    </View>
                <View style={styles.option}>
                    <Text style={styles.text} >{"Did you remember your password? "}</Text>
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
          )
        }
      </View>
      </View>
      </LinearGradient>
    </View>
  );
} 

const myResetPassword = connect(
    state => ({
      isLoading: selectors.isReseting(state),
      error: selectors.resetError(state),
      hasReset: selectors.hasreset(state),
      isAuthenticated: selectors.isAuthenticated(state),
    }),
    dispatch => ({
      onSubmit(email) {
          if(validateEmail(email)){
              dispatch(actions.startPasswordResetProcess(email))
          }
          else{
            dispatch(actions.failReset("WRITE A VALID EMAIL"))
          }
      },
      onBack(){
        dispatch(actions.completeReset())
        if(typeof document !== 'undefined'){
            window.location.href = URL
        }
        else{
            Actions.replace('Login')
        }
      } 
    }),
    (stateToProps,disptachToProps) => {
      if(stateToProps.isAuthenticated){
        if(typeof document !== 'undefined'){
          window.location.href = URL
        }
        else{
          Actions.replace('Home')
        }
      }
      return ({...disptachToProps,...stateToProps})
    }
  )(ResetPassword);
  
  export default reduxForm({
    form: 'myresetpassoword',
  })(myResetPassword)
  