import React from "react";
import {StyleSheet, Dimensions} from 'react-native'


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    containerScreen:{
        flex: 1,
    },

    text:{
        margin: 10,
        textAlign: 'justify',
    },

    title:{
        textAlign: "center",
        marginTop: 20,
        fontSize: 18,
        fontWeight: "bold",
    },

    items:{
        marginLeft: 20,
        marginRight: 20,
        textAlign: "justify",
        fontWeight: "bold"
    }, 

    containerLine:{
        borderBottomWidth: .5,
        borderBottomColor: '#808080',
        width: width,
        height: 10,
        alignSelf: 'flex-start',
        marginRight: 10
    }
})