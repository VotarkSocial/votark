import { StyleSheet } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.primary,
    },
    error: {
        color : colors.secondary,
        fontSize: normalize(0.9),
        margin: normalize(5)
    },
    text: {
        marginTop: normalize(5),
        color : colors.white,
        fontSize: normalize(0.9),
      },
    link: {
        marginTop: normalize(5),
        color : colors.white,
        fontSize: normalize(0.9),
        textDecorationLine: 'underline'
    },
    input: {
        width: normalize(1600),
        maxWidth: 700,
        maxHeight: 50,
        height: normalize(30),
        backgroundColor: colors.white,
        borderRadius: 7,
        fontSize: normalize(1.5),
        margin: normalize(1),
        padding: 10,
        borderColor: colors.white,
        borderWidth: 1
    },
    button:{
        alignItems: 'center',
        borderRadius: 10,
        fontSize: normalize(2),
        color: colors.white,
        backgroundColor: colors.terceary,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingTop: normalize(0.5),
        paddingBottom: normalize(0.5), 
        paddingRight:normalize(2),
        paddingLeft: normalize(2)
    },
    logo: {
        height: normalize(300),
        width: normalize(170),
        margin: normalize(200),
      },
    buttons:{
      alignItems: 'center',
      justifyContent: 'center',
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
  
  