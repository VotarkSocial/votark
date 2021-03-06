import { StyleSheet } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.primary,
    },
    error: {
        color : colors.red,
        fontSize: normalize(1.2),
        margin: normalize(5)
    },
    text: {
        marginTop: normalize(5),
        color : colors.black,
        fontSize: normalize(1.7),
      },
    link: {
        marginTop: normalize(5),
        color: colors.black,
        fontSize: normalize(1.7),
        textDecorationLine: 'underline',
    },
    input: {
        width: normalize(1600),
        alignSelf: 'center',
        maxWidth: 700,
        maxHeight: 50,
        height: normalize(30),
        backgroundColor: colors.white,
        borderRadius: 7,
        fontSize: normalize(1.5),
        margin: normalize(0.5),
        padding: 10,
        borderColor: colors.black,
        borderWidth: 1
    },
    button:{
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.terceary,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingTop: normalize(0.2),
        paddingBottom: normalize(0.2), 
        paddingRight:normalize(1),
        paddingLeft: normalize(1),
    },
    logo: {
        alignSelf: 'center',
        height: normalize(250),
        width: normalize(330),
        margin: normalize(90),
      },
    buttons:{
      padding: normalize(2),
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: normalize(1),
      paddingBottom: normalize(1), 
      paddingRight:normalize(5),
      paddingLeft: normalize(5),
      fontSize: normalize(3.4),
      color: colors.white,
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
  
  