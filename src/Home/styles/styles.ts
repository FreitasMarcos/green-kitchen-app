import {StyleSheet, Dimensions} from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    containerScree:{
        flex: 1,
    },

    containerCard:{
        marginTop:12,
        backgroundColor: "white",
        marginBottom: 8,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: width * 0.06,
        borderColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
    
        elevation: 24,
    },

    image:{
        width: '100%',
        height: 250,
        borderTopLeftRadius: width * 0.06,
        borderTopRightRadius: width * 0.06,
    },

    lineLeft:{
        flex:1,
        marginLeft: 60,
        borderWidth: .1,
        backgroundColor: '#808080',  
        marginVertical: 50
    },
    lineRight:{
        flex:1,
        marginRight: 60,
        borderWidth: .1,
        backgroundColor: '#808080',  
        marginVertical: 50
    },

    categorie:{
        margin:5,
        textTransform: 'uppercase',
        fontWeight: '300',
        fontSize: 20,
        color: '#808080',
        textAlign: 'center',
    },

    containerRecipe:{
        marginVertical: 20
    },

    recipe:{
        textTransform: 'uppercase',
        fontWeight: '300',
        fontSize: 25,
        color: '#808080',
        textAlign: 'center',
        maxWidth: width
    }
})

export default styles