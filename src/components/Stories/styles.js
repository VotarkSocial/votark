import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      minHeight: normalize(170),
      maxHeight: normalize(170),
      marginTop: normalize(155), 
      padding: normalize(1),
    },
    story:{
      margin: normalize(1), 
      width:normalize(75),
      height:normalize(75),
      borderRadius: normalize(20),
      backgroundColor: colors.white,
      borderColor: colors.secondary,
      borderWidth: 3
  }

  });
  
export default styles