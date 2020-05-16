import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';

const Login = () => (
  <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text> 
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryB,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Login;
