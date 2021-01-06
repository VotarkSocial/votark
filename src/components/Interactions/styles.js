import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      right: 0,
      bottom: 0,
      alignItems: 'flex-end',
      marginBottom: normalize(150),
      justifyContent: 'space-between',
      padding: normalize(4),
      paddingRight: normalize(12),
      paddingLeft: normalize(12),
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color : colors.white,
        marginRight: normalize(20),
        marginLeft: normalize(20),
        fontSize: normalize(6)
    },
    icon:{
        marginTop: normalize(35), 
        marginRight: normalize(0.4),
        width:normalize(18),
        height:normalize(18),
    },
    icon2:{
        position: 'absolute',
        margin: normalize(2), 
        width:normalize(3),
        height:normalize(3)
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
  });
  
export default styles