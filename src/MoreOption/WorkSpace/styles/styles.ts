import {StyleSheet, Dimensions} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const styles = StyleSheet.create({
    containerScreen:{
        flex:1,
    },

    containerListRecipes:{
        borderWidth: .5,
        marginVertical: 5,
        height: height/9,
    },

    containerItens:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    containerText:{
        width: width/2,
    },

    text:{
        padding: 5,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },

    containerButton:{
        flexDirection:'row',
        height: height/9, 
    },

    button:{
        alignItems: 'center', 
        justifyContent: 'center',
        width: 100,
        height: height/9
    },
})

