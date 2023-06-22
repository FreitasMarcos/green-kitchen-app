import {StyleSheet, Dimensions} from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    containerScreem:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerTeste:{
        height: height *.7,
    },


    titleContainer:{
        marginVertical: 30,
        alignItems: 'center',
    },

    title:{
        color: '#007500',
        fontSize: 35,
        fontWeight: '900',
    },

    containerForm:{
        alignItems: 'center',
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

    signUpButton:{
        marginTop: 30,
        backgroundColor: '#007500',
        borderRadius: 6,
        width: width * 0.7,
        height: height * .06,
        justifyContent: 'center',
        alignItems: 'center'

    },

    signUpText:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
})