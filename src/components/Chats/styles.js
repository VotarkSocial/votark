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
    height: normalize(195),
    padding: normalize(4),
    width: '100%',
    },
    bar:{
        backgroundColor:'gray',
        width:'100%',
        height: 1,
        marginTop: normalize(0.5),
        marginBottom: normalize(1),
    },
    item:{
        width:'95%',
    },
    main_container: {
        flex: 1,
        width:'100%',
        backgroundColor: colors.black,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        maxHeight: '100%',
        minHeight: '100%',
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
    text_: {
        color : colors.white,
        marginRight: normalize(20),
        marginLeft: normalize(20),
        fontSize: normalize(3)
    },
    subtext: {
        color : colors.primaryB,
        fontSize: normalize(6)
    },
    element: {
        color : colors.black,
        fontSize: normalize(2),
        margin: normalize(0.5),
        marginLeft: normalize(2),
        width:'100%'
    },
    el_selected: {
        color : colors.white,
        fontSize: normalize(2),
        margin: normalize(0.5),
        width:'100%'
    },
    photo:{
        margin: normalize(0.25), 
        width:normalize(10),
        height:normalize(10),
        borderRadius: normalize(20),
        backgroundColor: colors.black,
        borderColor: colors.secondary,
        borderWidth: 2
    },
    logo:{
      width:normalize(24),
      height:normalize(24)
    },
    icon:{
        width:normalize(8),
        height:normalize(8),
        margin: normalize(1),
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    row2:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    elements:{
        margin: normalize(10),
        width:'80%'
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
      hash:{
        margin: normalize(1),
        height: normalize(5),
        fontSize: normalize(2)
      },
    section2: {
        flex: 1,
        backgroundColor: colors.white,
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: normalize(195), 
        padding: normalize(1),
      },
    topic:{
        backgroundColor:colors.gray,
        margin: normalize(0.2),
        marginBottom: normalize(3),
        padding: normalize(0.3),
        paddingTop: normalize(0.1),
        paddingBottom: normalize(0.8),
        borderRadius: normalize(5),
        height: normalize(20)
    },
    selected:{
        backgroundColor:colors.secondaryB,
        margin: normalize(0.4),
        marginBottom: normalize(3),
        padding: normalize(0.3),
        paddingTop: normalize(0.1),
        paddingBottom: normalize(0.8),
        borderRadius: normalize(5),
        height: normalize(20)
    },
    websection: {
        flex: 1,
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        margin: normalize(10),
        marginTop: normalize(105), 
        padding: normalize(1),
        padding: normalize(5),
      },
    input: {
        width: normalize(2500),
        alignSelf: 'center',
        maxWidth: 700,
        maxHeight: 50,
        height: normalize(20),
        backgroundColor: colors.primary,
        borderRadius: 7,
        fontSize: normalize(1.5),
        padding: 10,
        borderColor: colors.primaryB,
        borderWidth: 1,
        marginRight: normalize(4)
    },
  });
  
export default styles