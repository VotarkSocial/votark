import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './configuration';
import Login from './src/components/Login';
import { Platform } from 'react-native';
import Home from './src/components/Home';
import { Provider } from 'react-redux';
import { Router, Stack, Scene } from "react-native-router-flux";
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import { PersistGate } from 'redux-persist/integration/react';
import {loadState,saveState} from './store'
import throttle from 'lodash/throttle'
import createSagaMiddleware from 'redux-saga';
import mainSaga from './src/sagas';
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/reducers';
import SignUp from './src/components/SignUp';

//localStorage.clear();
const persistedState = loadState()
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,persistedState,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mainSaga);
store.subscribe(throttle(()=>{
  saveState(store.getState());
}),1000)

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
            <Scene key="Login"  component={Login} hideNavBar={true} />
            <Scene key="Home" component={Home}  hideNavBar={true} />
            <Scene key="SignUp" component={Home}  hideNavBar={true} />
          </Stack>
        </Router>
        ):(
          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
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
