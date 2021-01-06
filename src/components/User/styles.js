import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      height: normalize(80),
      paddingLeft: normalize(0.5),
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
    options: {
        width: normalize(25),
        height: normalize(5),
    },
    main_container: {
        flex: 1,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width:'100%'
      },
    text: {
        color : colors.white,
        marginRight: normalize(2),
        marginLeft: normalize(2),
        fontSize: normalize(6)
    },
    text2: {
        color : colors.black,
        marginTop: normalize(5),
        marginRight: normalize(5),
        alignSelf: 'center',
        marginLeft: normalize(5),
        fontSize: normalize(3)
    },
    bio: {
        color : colors.black,
        marginTop: normalize(10),
        padding: normalize(2),
        marginRight: normalize(5),
        alignSelf: 'center',
        marginLeft: normalize(5),
        fontSize: normalize(1.5),
        maxHeight: normalize(100),
        textAlign: 'center',
    },
    text3: {
        color : colors.black,
        marginRight: normalize(5),
        alignSelf: 'center',
        marginLeft: normalize(5),
        fontSize: normalize(2)
    },
    username: {
        marginTop: normalize(20),
        color : colors.white,
        backgroundColor: colors.terceary,
        padding: normalize(2),
        paddingTop: normalize(1),
        paddingBottom: normalize(1),
        marginRight: normalize(2),
        alignSelf: 'center',
        fontSize: normalize(2),
        borderRadius: 5,
    },
    message: {
        marginTop: normalize(20),
        color : colors.white,
        backgroundColor: colors.primaryc,
        padding: normalize(2),
        paddingTop: normalize(1),
        paddingBottom: normalize(1),
        alignSelf: 'center',
        marginLeft: normalize(2),
        fontSize: normalize(2),
        borderRadius: 5,
    },
    follow: {
        marginTop: normalize(20),
        color : colors.white,
        backgroundColor: colors.terceary,
        padding: normalize(2),
        paddingTop: normalize(1),
        paddingBottom: normalize(1),
        marginRight: normalize(2),
        alignSelf: 'center',
        fontSize: normalize(2),
        borderRadius: 5,
    },
    unfollow: {
        marginTop: normalize(20),
        color : colors.white,
        backgroundColor: colors.secondaryB,
        padding: normalize(2),
        paddingTop: normalize(1),
        paddingBottom: normalize(1),
        marginRight: normalize(2),
        alignSelf: 'center',
        fontSize: normalize(2),
        borderRadius: 5
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
        marginTop: normalize(4),
        padding: normalize(1),
        paddingTop: normalize(1),
        paddingBottom: normalize(2),
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
    column:{
        marginLeft: normalize(5),
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
    row2:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: normalize(0.5)
    },
    section: {
        display: 'flex'
,        flex: 1,
        backgroundColor: colors.white,
        alignSelf: 'center',
        alignItems:'center',
        width: '100%',
        margin: normalize(10),
        marginTop: normalize(80), 
        padding: normalize(1),
        padding: normalize(5),
      },
    item:{
        paddingBottom: normalize(5),
        marginBottom: normalize(5),
        borderBottomWidth: 1,
        textAlign: 'center',
        borderColor: colors.gray,
        width: '100%',
        alignItems:'center',
    },
    userpicture:{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo:{
        width:normalize(100),
        height:normalize(100),
        margin: normalize(10),
        borderRadius: normalize(20),
        backgroundColor: colors.black,
        borderColor: colors.secondary,
        marginBottom: normalize(2),
        borderWidth: 2,
        alignSelf:'center',
    },
  });
  
export default styles