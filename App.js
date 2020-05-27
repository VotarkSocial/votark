import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import { colors } from './configuration';
import { createStore, applyMiddleware } from 'redux';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Stack, Scene } from "react-native-router-flux";
import { StyleSheet, Text, View } from 'react-native';
import {loadState,saveState} from './store'
import createSagaMiddleware from 'redux-saga';
import Home from './src/components/Home';
import Login from './src/components/Login';
import mainSaga from './src/sagas';
import React from 'react';
import reducer from './src/reducers';
import ResetPassword from './src/components/ResetPassword';
import Search from './src/components/Search'
import SignUp from './src/components/SignUp';
import throttle from 'lodash/throttle'
import User from './src/components/User'

//localStorage.clear();
let persistedState = undefined
if(loadState()!==undefined){
  persistedState = {
    auth: loadState().auth,
    user: {
      user: loadState().user.user
    }
  }
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,persistedState,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mainSaga);
store.subscribe(throttle(()=>{
  saveState(store.getState());
}),5000)

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});


export default function App() {
  return (
    <Provider store={store}>
        {(typeof document === 'undefined')?(
          <Router>
          <Stack key="root" style={styles.container}>
            <Scene key="Home" component={Home}  hideNavBar={true} />
            <Scene key="Search" component={Search}  hideNavBar={true} />
            <Scene key="User" component={User}  hideNavBar={true} />
            <Scene key="Login"  component={Login} hideNavBar={true} />
            <Scene key="SignUp" component={SignUp}  hideNavBar={true} />
            <Scene key="ResetPassword" component={ResetPassword}  hideNavBar={true} />
          </Stack>
        </Router>
        ):(
          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/user" component={User}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/reset-password" component={ResetPassword}/>
          </Switch>
        </BrowserRouter>
        )
        }
        
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

global.XMLHttpRequest = global.originalXMLHttpRequest ? global.originalXMLHttpRequest : global.XMLHttpRequest;

global.FormData = global.originalFormData ? global.originalFormData : global.FormData; fetch;

// Ensure to get the lazy property

if (window.__FETCH_SUPPORT__) { // it's RNDebugger only to have window.__FETCH_SUPPORT__.blob = false; 
}
else{ /* * Set __FETCH_SUPPORT__ to false is just work for `fetch`. * If you're using another way you can just use the native Blob and remove the `else` statement */

         global.Blob = global.originalBlob ? global.originalBlob : global.Blob;

         global.FileReader = global.originalFileReader ? global.originalFileReader : global.FileReader; }
