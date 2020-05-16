import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './configuration';
import Login from './src/components/Login';
import Home from './src/components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './store';

const { store, persistor } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryB,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
