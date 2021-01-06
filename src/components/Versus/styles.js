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
    },
    photo:{
      margin: normalize(8), 
      marginBottom: normalize(1),
      width:normalize(43),
      height:normalize(43),
      borderRadius: normalize(20),
      backgroundColor: colors.black,
      borderColor: colors.secondary,
      borderWidth: 2
    },
    icon2:{
      backgroundColor: colors.white,
      margin: normalize(2), 
      width:normalize(3),
      height:normalize(3),
    },
    follow: {
      color: colors.terceary,
      fontSize: normalize(2.2),
    },
    set: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    relative:{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: normalize(10)
    }
  });
  
export default styles