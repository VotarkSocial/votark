import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      width: '100%',
      height: '100%',
    },
    text: {
        position: 'absolute',
        top: normalize(40),
        color : colors.white,
        alignSelf: 'center',
        fontSize: normalize(2),
        backgroundColor: colors.primary,
        padding:normalize(1),
        borderRadius: normalize(25)
    },
    text2: {
      position: 'absolute',
      top: '40%',
      color : colors.white,
      alignSelf: 'center',
      fontSize: normalize(2),
      backgroundColor: colors.primary,
      padding:normalize(1),
      borderRadius: normalize(25)
  },
  });

export const styles2 = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      width: '100%',
      height: '100%',
    },
    text: {
        position: 'absolute',
        top: '40%',
        color : colors.white,
        alignSelf: 'center',
        fontSize: normalize(2),
        backgroundColor: colors.primary,
        padding:normalize(1),
        borderRadius: normalize(25)
    },
  });
  