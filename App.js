import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './configuration';
import MyApp from './src/components/MyApp';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './store';

const { store, persistor } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyApp/>
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
