import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    post:{
      height:'100%',
      alignItems:'center',
      justifyContent:'flex-start',
      width: '49.9%',
      borderRadius: normalize(1),
      backgroundColor: colors.black,
      paddingTop: normalize(10),
    },
    image:{
      width: normalize(90*9), 
      height: normalize(90*48),
    }
  });
  
export default styles