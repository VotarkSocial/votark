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
      marginBottom: normalize(80),
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
        marginTop: normalize(10), 
        marginRight: normalize(5),
        width:normalize(15),
        height:normalize(15)
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
    photo:{
        margin: normalize(2), 
        width:normalize(40),
        height:normalize(40),
        borderRadius: normalize(20),
        backgroundColor: colors.black,
        borderColor: colors.secondary,
        borderWidth: 2
    }

  });
  
export default styles