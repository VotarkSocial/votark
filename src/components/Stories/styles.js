import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primaryB,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      minHeight: normalize(150),
      maxHeight: normalize(150),
      marginTop: normalize(145),
      
    },
  });
  
export default styles