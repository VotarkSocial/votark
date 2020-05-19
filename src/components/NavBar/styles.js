import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      bottom: 0,
      backgroundColor: colors.black,
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: normalize(4),
      paddingRight: normalize(12),
      paddingLeft: normalize(12),
      width: '100%',
    },
    text: {
        color : colors.white,
        marginRight: normalize(20),
        marginLeft: normalize(20),
        fontSize: normalize(6)
    },
    logo:{
      width:normalize(20),
      height:normalize(27)
    },
    icon:{
        width:normalize(10),
        height:normalize(10)
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
  });
  
export default styles