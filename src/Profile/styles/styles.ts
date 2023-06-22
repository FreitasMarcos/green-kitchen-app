import {StyleSheet, Dimensions} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const styles = StyleSheet.create({
    containerScreen:{
        flex:1,
    },

    header:{
        height: height/3,
        backgroundColor: "#007500",
        justifyContent:'center'
    },

    containerIcon:{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'white',
        alignSelf:'center',
    },

    icon:{
        alignSelf:'center'
    },

    containerInfo:{
        alignItems:'center'
    },

    card:{
        flexDirection:'row',
        marginTop: 20,
        height: height * 0.1,
        width: width * 0.8,
        borderLeftWidth: 12,
        borderLeftColor: '#4ea34e',
        borderWidth: 1,
        borderRadius: 10,
        borderTopColor: '#9A9A9A',
        borderBottomColor: '#9A9A9A',
        borderRightColor: '#9A9A9A',
        justifyContent: 'flex-start',
        alignItems:'center',
        paddingLeft: 10
    },

    text:{
        marginLeft: 5,
        fontSize: 15,
    }
})

