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
      alignItems: 'center',
      justifyContent: 'center',
    },
    lastrow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'center',
      position: 'absolute',
      zIndex: 2,
      bottom: 0,
      paddingBottom: normalize(1),
      backgroundColor: colors.black,
      opacity: 0.85,
      width: windowWidth,
    },
    firstrow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: normalize(200*9),
    },
    post:{
      alignItems:'center',
      justifyContent:'flex-start',
      backgroundColor: colors.black,
      width: '100%', 
      height: '100%', 
      padding: normalize(5),
      paddingTop: normalize(100)
    },
    image:{
      width: windowWidth, 
      height: windowHeight,
    },
    options: {
        position: 'absolute',
        top: normalize(15),
        right: 0
    },
    icon3: {
      width: normalize(25),
      height: normalize(5),
    },
    text:{
        color: colors.white,
        fontSize: normalize(3.5),
        margin: normalize(0.1),
        marginTop: normalize(1)
    },
    text2:{
        color: colors.white,
        fontSize: normalize(2.5),
        paddingTop: normalize(1)
    },
    photo:{
      margin: normalize(4), 
      marginBottom: normalize(1),
      width:normalize(33),
      height:normalize(33),
      borderRadius: normalize(20),
      backgroundColor: colors.black,
      borderColor: colors.secondary,
      borderWidth: 2
    },
    icon:{
      margin: normalize(8), 
      marginBottom: normalize(1),
      width:normalize(8),
      height:normalize(8),
    },
    icon2:{
      margin: normalize(8), 
      marginBottom: normalize(1),
      width:normalize(10),
      height:normalize(10),
    },
    return: {
      position: 'absolute',
      top: 3,
      left: 0,
    },
    relative:{
      left: 50,
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: normalize(200*9)
    }
  });
  
export default styles