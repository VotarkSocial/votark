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
      width: '49.4%',
      borderRadius: normalize(55),
      backgroundColor: colors.black
    },
    image:{
      width: normalize(70*9), 
      height: normalize(70*48),
      resizeMode : 'stretch' ,
    }
  });
  
export default styles