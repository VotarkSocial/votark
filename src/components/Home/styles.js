import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    text: {
        color : colors.white,
        marginRight: 15,
        marginLeft: 15,
    },
    logo:{
      width:50,
      height:50
    },
    body:{
      width:'100%',
      height: '100%'
    },
  });
  
export default styles