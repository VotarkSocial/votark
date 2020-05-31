import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';
import { Dimensions } from 'react-native'

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

const styles = StyleSheet.create({
    icon:{
        width:normalize(10),
        height:normalize(10)
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignSelf:'center',
        backgroundColor: 'transparent',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: normalize(10),
        width:'90%',
      },
    iconContainer: {
        flex: 0.1,
        alignSelf: 'flex-end'
      },
      pictureButton1: { 
        borderWidth: 2,
        borderRadius: normalize(20),
        borderColor: 'white',
        height: 50,
        width:50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'},
    pictureButton2: {
        borderWidth: 2,
        borderRadius: normalize(20),
        borderColor: 'white',
        height: 40,
        width:40,
        backgroundColor: 'white'
    },
    camera:{ 
        alignSelf:'center',
        width: width, 
        height: height, 
    },
    mainContainer:{
      backgroundColor: colors.black,
      justifyContent:'flex-end',
      alignItems: 'center',
      height: '100%'
    }
  });
  
export default styles