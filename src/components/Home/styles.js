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
        marginRight: '15px',
        marginLeft: '15px',
    },
    logo:{
      width:'50px',
      height:'70px'
    }
  });
  
export default styles