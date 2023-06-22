import React,{useContext} from 'react'
import {View, Text} from 'react-native'

import {styles} from './styles/styles'
import {Ionicons } from '@expo/vector-icons';

import { UserContext } from '../Contexts/UserContext';

export function Profile(){

    const { userInfo } = useContext(UserContext)

    return(
        <View style={styles.containerScreen}>
            <View style={styles.header}>
                <View style={styles.containerIcon}>
                <Ionicons name="person"  size={80} color="#007500" style={styles.icon}/>
                </View>
            </View>
            <View style={styles.containerInfo}>
                <View style={styles.card}>
                    <Ionicons name="md-person-circle-outline" size={28} color="#007500" />
                    <Text style={styles.text}>{userInfo?.name}</Text>
                </View>
            </View>
            <View style={styles.containerInfo}>
                <View style={styles.card}>
                    <Ionicons name="mail" size={28}color="#007500" />
                    <Text style={styles.text}>{userInfo?.email}</Text>
                </View>
            </View>
        </View>
    )
}