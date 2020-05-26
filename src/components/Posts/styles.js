import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      height: '100%',
    },
    posts:{
        marginTop: normalize(5),
        marginBottom: normalize(85)
    },
    post:{
      alignItems:'center',
      justifyContent:'flex-start',
      margin: normalize(0.1),
      borderRadius: normalize(1),
      backgroundColor: colors.black,
      width: normalize(105*9), 
      padding: normalize(5)
    },
    image:{
      width: normalize(60*9), 
      height: normalize(60*48),
      margin: normalize(5)
    },
    text:{
        color: colors.white,
        fontSize: normalize(2),
        margin: normalize(0.1),
    }
  });
  
export default styles