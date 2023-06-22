import React,{useContext, useEffect, useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import {styles} from './styles/styles'
import {Picker} from '@react-native-picker/picker';

import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../../Contexts/UserContext';
import { api } from '../../../../api/greenKitchen';

export function UpdateRecipes(item:any){

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [categories, setCategories] = useState()
    const [preparingTime, setPreparingTime] = useState('')

    const { userInfo } = useContext(UserContext)

    const navigate = useNavigation()

    async function update(id:any) {


        await api.patch(`recipes/update/${id}`,{
            title: title ,
            preparingTime: Number(preparingTime),
            description: description,
            amount: Number(amount),
            categories: [Number(categories)],
            recipeStateId: 1,
        },{
            headers:{
                "Content-Type": "application/json", 
                "Authorization": userInfo?.token
            }
        }).then((r)=>{
            Alert.alert(
                `Receita ${title}`,
                'Receita atualizada com sucesso.',
                [
                    {
                        text: 'Confirmar',
                        onPress: () =>  navigate.navigate("Tabs" as never),
                    }
                ]
            )
        }).catch((e)=>{
            console.log(e);
        })
       
    }

    return(
        <View style={styles.containerScreen}>
           <View style={styles.formGroup}>
                <View style={styles.input}>
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor={"black"}
                        placeholder={item.route.params.item.title}
                        onChangeText={setTitle}
                        value={title}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor={"black"}
                        placeholder={String(item.route.params.item.preparingTime + " Minutos")}
                        onChangeText={setPreparingTime}
                        value={preparingTime}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor={"black"}
                        placeholder={String(item.route.params.item.amount + " Porções")}
                        onChangeText={setAmount}
                        value={amount}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        multiline
                        numberOfLines={10}
                        style={styles.textInput}
                        placeholderTextColor={"black"}
                        placeholder={item.route.params.item.description}
                        onChangeText={setDescription}
                        value={description}
                    />
                </View>
                <View style={styles.containerPicker}>
                    <Picker
                        mode="dropdown"
                        itemStyle={{ height: 50 }}
                        selectedValue={categories}
                        onValueChange={(itemValue, itemIndex) =>
                            setCategories(itemValue)
                        }>
                        <Picker.Item key={1} label="Categorias" value="0" />
                        <Picker.Item key={1} label="Bebidas" value="1" />
                        <Picker.Item key={2} label="Comidas" value="2" />
                        <Picker.Item key={3} label="Doces" value="3" />
                    </Picker>
                </View>
                <TouchableOpacity style={styles.sendRecipeButton} onPress={()=> update(item.route.params.item.id)}>
                    <Text style={styles.sendRecipeText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}