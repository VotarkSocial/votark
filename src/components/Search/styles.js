import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexDirection: 'row',
      height: normalize(165),
      padding: normalize(4),
      width: '100%',
    },
    main_container: {
        flex: 1,
        backgroundColor: colors.black,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        height: '100%',
      },
    webcontainer: {
      flex: 1,
      position: 'absolute',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexDirection: 'row',
      height: normalize(95),
      padding: normalize(4),
      width: '100%',
    },
    text: {
        color : colors.white,
        marginRight: normalize(20),
        marginLeft: normalize(20),
        fontSize: normalize(6)
    },
    subtext: {
        color : colors.primaryB,
        fontSize: normalize(6)
    },
    element: {
        color : colors.black,
        fontSize: normalize(2),
        margin: normalize(0.5),
    },
    logo:{
      width:normalize(24),
      height:normalize(24)
    },
    icon:{
        width:normalize(10),
        height:normalize(10)
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    elements:{
        margin: normalize(10),
        alignItems: 'flex-start',
        justifyContent:'center',
    },
    section: {
        flex: 1,
        backgroundColor: colors.white,
        alignSelf: 'center',
        width: '100%',
        margin: normalize(10),
        marginTop: normalize(95), 
        padding: normalize(1),
        padding: normalize(5),
      },
    input: {
        width: normalize(1600),
        alignSelf: 'center',
        maxWidth: 700,
        maxHeight: 50,
        height: normalize(20),
        backgroundColor: colors.primary,
        borderRadius: 7,
        fontSize: normalize(1.5),
        fontColor:colors.white,
        padding: 10,
        borderColor: colors.primaryB,
        borderWidth: 1
    },
  });
  
export default styles