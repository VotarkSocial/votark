import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    row1: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      flexDirection: 'row',
      height: '100%',
    },
    post:{
      height:'100%',
      alignItems:'center',
      justifyContent:'flex-start',
      width: '49.9%',
      borderRadius: normalize(1),
      backgroundColor: colors.black,
    },
    image:{
      width: normalize(90*9), 
      height: normalize(90*48),
    }
  });
  
export default styles