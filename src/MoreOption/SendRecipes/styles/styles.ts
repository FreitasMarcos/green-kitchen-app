import {StyleSheet, Dimensions} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const styles = StyleSheet.create({
    containerScreen:{
        flex:1,
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
        
    },

    textInput:{
        flex: 1,
    },

    containerPicker:{
        width: width - 35,
        maxWidth: width - 15,
        borderRadius: 8, 
        borderWidth: 1,
        marginRight: 10,
        marginLeft: 10,
        
    },

    sendRecipeButton:{
        marginTop: 30,
        backgroundColor: '#007500',
        borderRadius: 6,
        width: width * 0.5,
        height: height * .06,
        justifyContent: 'center',
        alignItems: 'center'
    },

    sendRecipeText:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },    
})

