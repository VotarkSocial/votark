import { Right } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      height: '100%',
    },
    posts:{
        marginTop: normalize(5),
        marginBottom: normalize(85),
        alignSelf: 'center',
    },
    posts2:{
      marginBottom: normalize(5),
      alignSelf: 'center',
    },
    posts3:{
      marginTop: normalize(1),
      marginBottom: normalize(700),
      alignSelf: 'center',
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
    post:{
      alignItems:'center',
      justifyContent:'flex-start',
      margin: normalize(0.1),
      borderRadius: normalize(1),
      backgroundColor: colors.black,
      width: normalize(90*9), 
      padding: normalize(5)
    },
    image:{
      width: normalize(60*9), 
      height: normalize(60*48),
      margin: normalize(5)
    },
    text:{
        color: colors.white,
        fontSize: normalize(2),
        margin: normalize(0.1),
    },
    mainText:{
        color: colors.primaryB,
        fontSize: normalize(4),
        margin: normalize(2),
        alignSelf: 'center',
    },
    post_selected: {
      alignItems:'center',
      justifyContent:'flex-start',
      margin: normalize(0.1),
      borderRadius: normalize(1),
      backgroundColor: colors.black,
      padding: normalize(5),
      width: windowWidth,
      height: windowHeight,
      zIndex: 1,
      position: 'absolute'
    },
    image_selected: {
      width: normalize(200*9), 
      height: normalize(200*48),
    }
  });
  
export default styles