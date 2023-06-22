import React, {useState, useEffect, useContext} from 'react'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import {styles} from './styles/styles'
import { api } from '../../../api/greenKitchen'
import { UserContext } from '../../Contexts/UserContext'

import { useNavigation } from '@react-navigation/native';

import { Fontisto, AntDesign } from '@expo/vector-icons';


export function WorkSpace(){

    interface Recipes {
        title: string, 
        stateId: number, 
        amount: number, 
        categories: string, 
        UserId: number, 
        description: string, 
        time: Date, 
        id: number
    }

    const { userInfo } = useContext(UserContext)
    const [listRecipes, setListRecipes] = useState<Recipes[]>([])
    const navigation = useNavigation();

    async function myRecipes() {
        await api.get('recipes/get')
        .then((r)=>{
            const data = r.data
            const filter = data.filter((r:any)=>r.UserId === userInfo?.id)
            setListRecipes(filter)
        })
        .catch((e)=>{
            console.log(e.response)
        })
    }


    async function deleteRecipe(id:any) {
        await api.delete(`recipes/delete/${id}`,{
            headers:{
                "Content-Type": "application/json", 
                "Authorization": userInfo?.token
            }
        }).then(()=>{
        })
    }

    useEffect(() => {
        myRecipes()
        const interval = setInterval(() => {
           myRecipes()
        }, 500);
        return () => clearInterval(interval)
    }, [])


    return(
        <View style={styles.containerScreen}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={listRecipes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return <View style={styles.containerListRecipes}>
                                <View style={styles.containerItens}>
                                    <View style={styles.containerText}>
                                        <Text style={styles.text}>{item.title}</Text>
                                    </View>
                                    <View style={styles.containerButton}>
                                       <View style={{ backgroundColor: '#ffff00',}}>
                                            <TouchableOpacity style={styles.button}  onPress={()=> navigation.navigate('UpdateRecipes' as never, { item } as never)}>
                                                    <AntDesign  name="edit" size={24} color="white" />
                                                </TouchableOpacity>
                                        </View>
                                       <View  style={{ backgroundColor: '#b20000', width: 100,}}>
                                        <TouchableOpacity style={styles.button}  onPress={()=> deleteRecipe(item.id)}>
                                                <Fontisto name="trash" size={24} color="white" />
                                            </TouchableOpacity>
                                       </View>
                                    </View>
                                </View>
                            </View>
                }}
            />
        </View>
    )
}