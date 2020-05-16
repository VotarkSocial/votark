import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primaryB,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color : colors.white,
        fontSize: '50px'
    }
  });
  
export default styles