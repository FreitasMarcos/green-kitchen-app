import {StyleSheet, Dimensions} from 'react-native'


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    containerScreen:{
        flex:1,
    },

    texts:{
        margin: 10,
        textAlign: 'justify',
    },
    title:{
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 18,
    },
    items:{
        marginLeft: 15,
        marginRight: 15,
        textAlign: "justify",
        fontWeight: "bold"
    },

    containerLine:{
        marginLeft: 15,
        borderBottomWidth: .5,
        borderBottomColor: '#808080',
        width: width,
        height: 10,
        alignSelf: 'flex-start',
        marginRight: 10
    }
})