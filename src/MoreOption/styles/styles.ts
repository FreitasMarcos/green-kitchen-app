import {StyleSheet, Dimensions} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const styles = StyleSheet.create({
    containerScreen:{
        flex:1,
    },

    buttonContainer:{
        marginTop: 30,
        width: width,
        height: 60,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },

    containerIconText:{
        flex:1,
        marginLeft: 15,
        flexDirection:'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start'
    },

    text:{
        marginLeft: 30,
        textTransform: 'uppercase',
        fontWeight: '300',
        fontSize: 20,
        color: '#808080',
    },

    containerLine:{
        borderBottomWidth: .5,
        borderBottomColor: '#808080',
        width: width/1.3,
        height: 20,
        alignSelf: 'flex-end',
        marginRight: 10
    },


    //Modalize
    containerScreenModalize:{
        flex:1,
        /* height: height, */
    },
    closeButton:{
        alignItems: 'flex-end',
        margin: 10,
    },

    formGroup:{
        alignItems: 'center',
        marginTop: 40,
    },

    input:{
        flexDirection: 'row',
        margin: 8,
        width: width * 0.9,
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        height: height * .07
    },

    icon:{
        marginRight: 10,
    },

    textInput:{
        flex: 1,
    },

    signInButton:{
        marginTop: 30,
        backgroundColor: '#007500',
        borderRadius: 6,
        width: width * 0.7,
        height: height * .06,
        justifyContent: 'center',
        alignItems: 'center'

    },

    signInText:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },

    signupButton:{
        alignSelf: 'flex-end', 
        marginTop: 15,
        width:width,
    },
    
    signupText:{
        fontWeight: 'bold',
        alignSelf: 'center',
        color: "#808080"
    }
})

