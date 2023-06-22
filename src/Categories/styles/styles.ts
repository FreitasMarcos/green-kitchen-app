import {StyleSheet, Dimensions} from 'react-native'

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    containerScreen:{
        flex: 1,
        backgroundColor: 'white'
    },

    categoriesContainer:{
        marginTop: 30,
        marginLeft: 30,
        width: width,
        height: 60,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },

    categoriesIcon:{
        padding:15,
        marginRight: 40,
        backgroundColor: "white",
        borderRadius: 30,
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

    containerLine:{
        borderBottomWidth: .5,
        borderBottomColor: '#808080',
        width: width/1.5,
        height: 20,
        alignSelf: 'flex-end',
        marginRight: 10
    },

    categoriesText:{
        textTransform: 'uppercase',
        fontWeight: '300',
        fontSize: 20,
        color: '#808080',
    }
})
