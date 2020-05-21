import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexDirection: 'row',
      height: normalize(165),
      padding: normalize(4),
      width: '100%',
    },
    webcontainer: {
      flex: 1,
      position: 'absolute',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexDirection: 'row',
      height: normalize(95),
      padding: normalize(4),
      width: '100%',
    },
    text: {
        color : colors.white,
        marginRight: normalize(20),
        marginLeft: normalize(20),
        fontSize: normalize(6)
    },
    logo:{
      width:normalize(17),
      height:normalize(24)
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