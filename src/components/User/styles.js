import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      height: normalize(165),
      padding: normalize(4),
      width: '100%',
    },
    webcontainer: {
      flex: 1,
      position: 'absolute',
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection: 'row',
      height: normalize(95),
      padding: normalize(4),
      width: '100%',
    },
    main_container: {
        flex: 1,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      },
    text: {
        color : colors.white,
        marginRight: normalize(20),
        marginLeft: normalize(20),
        fontSize: normalize(6)
    },
    text2: {
        color : colors.black,
        marginRight: normalize(20),
        alignSelf: 'center',
        marginLeft: normalize(20),
        fontSize: normalize(4)
    },
    text3: {
        color : colors.black,
        marginRight: normalize(20),
        alignSelf: 'center',
        marginLeft: normalize(20),
        fontSize: normalize(2)
    },
    text_selected: {
        color : colors.white,
        fontSize: normalize(2),
        margin: normalize(0.5),
        width:'100%'
    },
    button:{
        backgroundColor:colors.gray,
        justifyContent: 'center',
        margin: normalize(0.2),
        marginBottom: normalize(3),
        marginTop: normalize(4),
        padding: normalize(0.2),
        paddingTop: normalize(0.1),
        paddingBottom: normalize(0.8),
        borderRadius: normalize(5),
        height: normalize(20)
    },
    input: {
        width: normalize(1600),
        alignSelf: 'center',
        maxWidth: 700,
        maxHeight: 50,
        height: normalize(300),
        backgroundColor: colors.white,
        borderRadius: 7,
        fontSize: normalize(1.5),
        margin: normalize(0.5),
        padding: 10,
        borderColor: colors.black,
        borderWidth: 1
    },
    done:{
        backgroundColor:colors.secondaryB,
        justifyContent: 'center',
        margin: normalize(0.4),
        marginBottom: normalize(3),
        padding: normalize(1),
        paddingTop: normalize(0.1),
        paddingBottom: normalize(0.8),
        borderRadius: normalize(5),
        height: normalize(20)
    },
    report:{
        marginTop: normalize(5)
    },
    mainText:{
        color: colors.primaryB,
        fontSize: normalize(4),
        margin: normalize(2),
        alignSelf: 'center',
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
        justifyContent: 'center'
    },
    section: {
        flex: 1,
        backgroundColor: colors.white,
        alignSelf: 'center',
        width: '100%',
        margin: normalize(10),
        marginTop: normalize(195), 
        padding: normalize(1),
        padding: normalize(5),
      },
    item:{
        width:'95%',
    },
    photo:{
        margin: normalize(0.25), 
        width:normalize(40),
        height:normalize(40),
        borderRadius: normalize(20),
        backgroundColor: colors.black,
        borderColor: colors.secondary,
        borderWidth: 2,
        alignSelf:'center',
    },
  });
  
export default styles