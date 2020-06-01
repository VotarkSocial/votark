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
    icon2:{
      backgroundColor: colors.black,
      width:normalize(10),
      height:normalize(10)
  },
  bar:{
    backgroundColor:'gray',
    width:'100%',
    height: 1,
    marginTop: normalize(1),
    marginBottom: normalize(3),
  },
  row3:{
    marginTop:normalize(2),
    padding: normalize(5)
  },
  button:{
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingTop: normalize(0.5),
    paddingBottom: normalize(0.5), 
    paddingRight:normalize(2),
    paddingLeft: normalize(2)
  },
  input: {
    width: normalize(1600),
    maxWidth: 700,
    maxHeight: '70%',
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor: colors.white,
    borderRadius: 7,
    fontSize: normalize(1.5),
    margin: normalize(0.5),
    padding: 10,
    borderColor: colors.white,
    borderWidth: 1
  },
  text: {
      fontSize: normalize(6),
      alignSelf: 'center',
      marginBottom: normalize(2),
  },
  container: {
      flex: 1,
      position: 'absolute',
      flexDirection: 'row',
      alignSelf:'center',
      backgroundColor: 'transparent',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      bottom: normalize(5),
      width:'90%',
    },
  row:{
    marginTop: normalize(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: normalize(1),
  },
  row2:{
    marginTop: normalize(1),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: normalize(1),
  },
    section: {
      flex: 1,
      backgroundColor: colors.white,
      alignSelf: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      margin: normalize(10),
      marginTop: normalize(195), 
      padding: normalize(15),
    },
    image:{
      width: normalize(30*9), 
      height: normalize(30*48),
      alignSelf: 'center',
    },
    header: {
      flex: 1,
      position: 'absolute',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexDirection: 'row',
      height: normalize(165),
      padding: normalize(4),
      width: '100%',
    },
    webHeader: {
      flex: 1,
      position: 'absolute',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexDirection: 'row',
      height: normalize(95),
      padding: normalize(4),
      width: '100%',
    },
    iconContainer: {
        flex: 0.1,
        alignSelf: 'flex-end',
        padding: normalize(1),
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
        height: width*128/72, 
    },
    mainContainer:{
      backgroundColor: colors.black,
      justifyContent:'center',
      alignItems: 'center',
      height: '100%'
    }
  });
  
export default styles