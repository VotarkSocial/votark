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
        marginTop: normalize(5),
        marginBottom: normalize(3),
    },
    item:{
        width:'100%',
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
    error_: {
        marginTop: normalize(2),
        fontSize: normalize(2),
        alignItems: 'center',
        alignSelf: 'center',
        color: colors.white,
        padding:normalize(1),
        borderRadius: normalize(25)
    },
    text_: {
        color : colors.white,
        marginRight: normalize(20),
        marginLeft: normalize(20),
        fontSize: normalize(4)
    },
    subtext: {
        color : colors.primaryB,
        fontSize: normalize(6)
    },
    element: {
        color : colors.black,
        fontSize: normalize(2),
        margin: normalize(0.2),
        width:'90%'
    },
    el_selected: {
        color : colors.white,
        fontSize: normalize(2),
        margin: normalize(0.5),
        width:'100%'
    },
    photo:{
        margin: normalize(3), 
        width:normalize(17),
        height:normalize(17),
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
        margin: normalize(0.5),
    },
    icon_big:{
        width:normalize(15),
        height:normalize(15),
        margin: normalize(2),
    },
    message_text:{
        color : colors.black,
        marginRight: normalize(1),
        marginLeft: normalize(1),
        fontSize: normalize(3),
        alignSelf: 'flex-start'
    },
    username:{
        color : colors.black,
        marginRight: normalize(0.2),
        marginLeft: normalize(0.2),
        fontSize: normalize(1.3),
        marginBottom: normalize(1),
    },
    row:{
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-start'
    },
    their_message:{
        margin: normalize(2),
        alignItems: 'baseline',
        justifyContent: 'flex-start',
        borderRadius: normalize(5),
        backgroundColor: colors.primary,
        padding: normalize(5),
        paddingTop: normalize(2),
        paddingBottom: normalize(2),
        maxWidth: '50%',
    },
    my_message:{
        margin: normalize(2),
        alignItems: 'baseline',
        alignSelf: 'flex-end',
        borderRadius: normalize(5),
        backgroundColor: colors.primary,
        padding: normalize(5),
        paddingTop: normalize(2),
        paddingBottom: normalize(2),
        marginBottom: normalize(10),
        maxWidth: '50%',
    },
    Writer: {
        position: 'absolute',
        bottom: normalize(100),
        flex: 1,
        width:'100%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        backgroundColor:colors.white,
      },
      message_notConfirmed:{
        margin: normalize(2),
        alignItems: 'baseline',
        alignSelf: 'flex-end',
        borderRadius: normalize(5),
        backgroundColor: colors.primary,
        padding: normalize(5),
        paddingTop: normalize(2),
        paddingBottom: normalize(2),
        marginBottom: normalize(10),
        maxWidth: '50%',
      },
    send:{
        marginTop: normalize(5),
        marginLeft: normalize(0.5),
        color: colors.black,
        fontSize: normalize(2),
    },
    sendInput: {
        width: normalize(2000),
        height: normalize(20),
        borderRadius: normalize(30),
        fontSize: normalize(1),
        color: colors.black,
        margin: normalize(0.5),
        padding: 10,
        borderColor: colors.black,
        borderWidth: 1
    },
    row2:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    elements:{
        width:'100%'
    },
    section: {
        flex: 1,
        backgroundColor: colors.primaryc,
        alignSelf: 'center',
        width: '100%',
        margin: normalize(10),
        marginBottom: normalize(330),
        marginTop: normalize(195), 
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
        width: '100%', 
        padding: normalize(1),
      },
    section3: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: normalize(195),
        alignSelf: 'center',
        width: '100%', 
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
        width: normalize(1500),
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