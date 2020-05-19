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
    },
    comment: {
        color: 'rgba(255,255,255,0.5)',
        marginBottom: normalize(2),
        fontSize: normalize(1),
        opacity: 100,
        marginLeft: normalize(1)
    },
    comments:{
        position: 'absolute',
        maxHeight: normalize(1100),
        overflow: 'hidden',
        bottom: normalize(60),
        width: normalize(450),
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
        marginTop: normalize(5),
        marginLeft: normalize(0.5),
        color: colors.white,
        fontSize: normalize(2.5),
    },
    row:{
        flexDirection: 'row'
    }
  });
  
export default styles