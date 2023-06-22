import {StyleSheet, Dimensions} from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

 export const styles = StyleSheet.create({
    containerScreen:{
        flex:1,
    },

    sliderImage:{
        width: width,
        height: height / 2,
    },

    containerRecipesName:{
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    recipesName:{
        textTransform: 'uppercase',
        fontSize: 30,
        color:'#808080', 
        maxWidth: width/ 1.3,
        fontWeight: '300',
    },

    containerCopyRight:{
      justifyContent: 'center',
      alignItems: 'center', 
      margin: 10, 
    },

    textCopyRight:{
        fontWeight: 'bold',
    },

    containerLine:{
        borderBottomWidth: .5,
        borderColor: '#808080',
        width: width/1.3,
        alignSelf: 'center',
    },

    containerData:{
        marginTop:20,
        height: height/10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#b0b0b0'
    },

    amount:{
        margin:8,
    },

    verticalLine:{
        borderRightWidth: 1,
        borderColor: '#6e6e6e',
        height: 50
    },

    time:{
        marginRight: 8
    },

    textData:{
        fontSize: 18,
        color: '#6e6e6e'
    },

    containerIngredients:{
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon:{
        marginLeft: 16,
        marginRight: 16,
    },

    lineLeft:{
        flex:1,
        borderWidth: .5,
        borderColor: '#808080',  
    },

    lineRight:{
        flex:1,
        borderWidth: .5,
        borderColor: '#808080',
    },

    textIngredients:{
        fontWeight: 'bold',
        fontSize: 17,
        alignItems: 'center',
        alignSelf: 'center',
        color: '#007500',
        letterSpacing: 2
    },

    containerLineAll:{
        borderWidth: .5,
        borderColor: '#808080',
        width: width,
        alignSelf: 'center',
        marginVertical: 10
    },


    containerInfo:{
        alignItems:'center'
    },

    card:{
        flexDirection:'row',
        marginTop: 20,
        width: width * 0.95,
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
        padding: 6,
        fontSize: 15,
        textAlign: "justify"
    }

})
