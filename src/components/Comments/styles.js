import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: normalize(120),
      flex: 1,
      left: 7,
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%'
    },
    comment: {
        color: 'rgba(255,255,255,0.6)',
        marginBottom: normalize(2),
        fontSize: normalize(1),
        marginLeft: normalize(1)
    },
    notConfirmed: {
        color: 'rgba(255,255,255,0.4)',
        marginBottom: normalize(2),
        fontSize: normalize(1),
        marginLeft: normalize(1)
    },
    comment_: {
        color: 'rgba(0,0,0,0.6)',
        marginBottom: normalize(2),
        fontSize: normalize(2.5),
        marginLeft: normalize(7)
    },
    notConfirmed_: {
        color: 'rgba(0,0,0,0.9)',
        marginBottom: normalize(2),
        fontSize: normalize(2.5),
        marginLeft: normalize(7)
    },
    icon: {
        width: normalize(5),
        height: normalize(5),
    },
    iconContainer: {
        right: 20,
        top: 12,
        position: 'absolute',
    },
    text: {
        color: colors.black,
        alignSelf: 'center',
        marginTop: normalize(3),
        marginBottom: normalize(5),
        fontSize: normalize(3),
        fontWeight: 'bold'
    },
    comments:{
        position: 'absolute',
        maxHeight: normalize(700),
        flexDirection: 'column-reverse',
        overflow: 'hidden',
        bottom: normalize(40),
        width: normalize(450),
    },
    comments_banner: {
        height: normalize(4500),
        width: '100%',
        backgroundColor: colors.white,
        position: 'absolute',
        bottom: -normalize(120),
        zIndex: 1
    },
    input: {
        width: normalize(1000),
        maxWidth: 700,
        maxHeight: 50,
        height: normalize(20),
        borderRadius: normalize(30),
        fontSize: normalize(1),
        color: colors.white,
        margin: normalize(0.5),
        padding: 10,
        borderColor: colors.white,
        borderWidth: 1
    },
    send:{
        marginTop: normalize(3.5),
        marginLeft: normalize(0.5),
        color: colors.white,
        fontSize: normalize(2.5),
    },
    comments_container:{
        marginBottom: normalize(120)
    },
    input_: {
        width: normalize(1000),
        maxWidth: 700,
        maxHeight: 50,
        height: normalize(20),
        borderRadius: normalize(30),
        fontSize: normalize(1),
        color: colors.black,
        margin: normalize(0.5),
        padding: 10,
        borderColor: colors.black,
        borderWidth: 1,
        bottom: normalize(100),
        marginLeft: normalize(2.5),
    },
    send_:{
        marginTop: normalize(3.5),
        marginLeft: normalize(0.5),
        color: colors.black,
        fontSize: normalize(2.5),
        bottom: normalize(100),
    },
    row:{
        flexDirection: 'row'
    }
  });
  
export default styles