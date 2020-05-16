import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';

const SignUp = () => (
  <View style={styles.container}>
      <Text>your app!</Text> 
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


export default SignUp;
