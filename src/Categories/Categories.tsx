import {View, Text, TouchableOpacity, FlatList} from 'react-native'

import {styles} from './styles/styles'

import { itemCategory } from '../Components/Category';

import { useNavigation } from '@react-navigation/native';

export function Categories(){

    const navigate = useNavigation()

    return(
        <View style={styles.containerScreen}>
            <FlatList
                data={itemCategory}
                keyExtractor={(item)=> item.id}
                renderItem={({item})=>{
                    return(
                        <>
                            <TouchableOpacity style={styles.categoriesContainer} onPress={()=> navigate.navigate(item.route as never)}>
                                <View style={styles.categoriesIcon}>
                                {item.icon}
                                </View>
                                <Text style={styles.categoriesText}>{item.name}</Text>
                            </TouchableOpacity>
                            <View style={styles.containerLine}/>
                        </>  
                    )
                }}
            />
        </View>
    )
}