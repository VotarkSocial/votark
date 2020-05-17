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
        marginRight: 15,
        marginLeft: 15,
    },
    logo:{
      width:50,
      height:50
    }
  });
  
export default styles