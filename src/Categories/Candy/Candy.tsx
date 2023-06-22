import React,{useState,useEffect} from 'react'
import {View,Text, FlatList,TouchableOpacity, Image} from 'react-native'
import {styles} from './styles/styles'
import { api } from '../../../api/greenKitchen'


import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from '../../routes/route';

type DetailsRecipes = NativeStackNavigationProp<RootStackParamsList, 'DetailsRecipes'>

export function Candy(){

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

    const [recipes, setRecipes] = useState<Recipes[]>([]);
    const navigation = useNavigation<DetailsRecipes>();

    async function getCandy() {
        await api.get('recipes/get')
        .then((r)=>{
           const data = r.data
           const filter = data.filter((item)=> item.categories[0].name === 'Doces')
            setRecipes(filter)
        })
        .catch((e)=>{
            console.log(e.response)
        })
    }

    useEffect(() => {
        getCandy()
        const interval = setInterval(() => {
           getCandy()
        }, 500);
        return () => clearInterval(interval)
    }, [])

    return(
        <View style={styles.containerScree}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={recipes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return <TouchableOpacity style={styles.containerCard} onPress={()=> navigation.navigate('DetailsRecipes' as never, { item } as never)}>
                                <Image source={require('../../../assets/images/recipes/Doces.jpg')} style={styles.image}/>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={styles.lineLeft} />
                                    <Text style={styles.categorie}>{item.categories[0].name}</Text>
                                    <View style={styles.lineRight} />
                                </View>
                                <View style={styles.containerRecipe}>
                                    <Text style={styles.recipe}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
            }}
            />
        </View>
    )
}