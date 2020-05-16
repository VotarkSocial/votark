import { StyleSheet } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.primary,
      borderWidth: normalize(1)
    },
    error: {
        color : colors.secondary,
        fontSize: 9,
    },
    text: {
        marginTop: normalize(5),
        color : colors.black,
        fontSize: 9,
    },
    input: {
        width: normalize(1800),
        height: normalize(12),
        backgroundColor: colors.white,
        borderRadius: 7,
        fontSize: normalize(2.5),
        marginTop: normalize(1),
        padding: 10,
        borderColor: colors.black,
        borderWidth: 1
    },
    button:{
        borderRadius: 20,
        width: normalize(200),
        margin: normalize(3),
    },
    logo: {
        height: normalize(100),
        width: normalize(100),
        marginBottom: normalize(35)
      },
    buttons:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: normalize(5)
    },
    errors:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: normalize(15)
    },
    option:{
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
    }
  });
  
export default styles
  
  