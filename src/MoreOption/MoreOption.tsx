import React, { useRef, useState,useContext} from 'react'
import {View, Text, TouchableOpacity, TextInput, FlatList, Alert} from 'react-native'
import { styles } from './styles/styles'

import { MaterialIcons, AntDesign, Entypo,Ionicons, Feather, MaterialCommunityIcons  } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from '../routes/route';
import { Option } from '../Components/Option';
import { api } from '../../api/greenKitchen';
import { UserContext } from '../Contexts/UserContext';

type SignUp = NativeStackNavigationProp<RootStackParamsList, 'SignUp'>

export function MoreOption(){

    const navSignUp = useNavigation<SignUp>() 
    const navigate = useNavigation()

    const modalizeRef = useRef<Modalize>();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { userInfo, setUser } = useContext(UserContext)

    async function login() {
        await api.post('auth/signin',{
            email: email,
            password: password,
        },{
            headers:{
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            setUser(response.data)
            modalizeRef?.current?.close()
        }).catch((e)=>{
            Alert.alert(
                'Atenção',
                'E-mail ou senha inválida, por favor tentar novamente.',
                [
                    {
                        text: 'Confirmar',
                    }
                ]
            )
        })
    }

    return(
        <>
            <View style={styles.containerScreen}>
                {
                   userInfo &&(
                        <>
                            <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigate.navigate("Profile" as never)}>
                                <View style={styles.containerIconText}>
                                    <Ionicons name="person"  size={40} color="#007500" />
                                    <Text style={styles.text}>Perfil</Text>
                                </View>
                                <MaterialIcons style={{marginRight: 12}} name="arrow-forward-ios" size={30} color="#808080"/>
                            </TouchableOpacity>
                            <View style={styles.containerLine}/>
                            <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigate.navigate("WorkSpace" as never)}>
                                <View style={styles.containerIconText}>
                                    <MaterialCommunityIcons name="food-takeout-box" size={40} color="#007500" />
                                    <Text style={styles.text}>Minhas Receitas</Text>
                                </View>
                                <MaterialIcons style={{marginRight: 12}} name="arrow-forward-ios" size={30} color="#808080"/>
                            </TouchableOpacity>
                            <View style={styles.containerLine}/>
                            <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigate.navigate("SendRecipes" as never)}>
                                <View style={styles.containerIconText}>
                                    <Feather name="edit" size={40} color="#007500" />
                                    <Text style={styles.text}>Enviar Receita</Text>
                                </View>
                                <MaterialIcons style={{marginRight: 12}} name="arrow-forward-ios" size={30} color="#808080"/>
                            </TouchableOpacity>
                            <View style={styles.containerLine}/>
                        </>
                    )
                }
                <FlatList
                    data={Option}
                    keyExtractor={(item)=> item.id}
                    renderItem={({item})=>{
                        return(
                            <>
                                <TouchableOpacity style={styles.buttonContainer} onPress={()=> item.name !== "Entrar" ? navigate.navigate(item.route as never) : modalizeRef.current?.open()}>
                                    <View style={styles.containerIconText}>
                                        {item.icon}
                                        <Text style={styles.text}>{item.name}</Text>
                                    </View>
                                    <MaterialIcons style={{marginRight: 12}} name="arrow-forward-ios" size={30} color="#808080" />
                                </TouchableOpacity>
                                <View style={styles.containerLine}/>
                            </>
                        )
                    }}
                />
            </View> 
            
            <Modalize 
                ref={modalizeRef}
                adjustToContentHeight
                childrenStyle={{ height: "100%" }}
            >
                <View style={styles.containerScreenModalize}>
                    <View>
                        <TouchableOpacity style={styles.closeButton} onPress={()=> modalizeRef?.current?.close()}>
                            <AntDesign name="close" size={30} color="red" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formGroup}>
                        <View style={styles.input}>
                            <Entypo name="mail" size={30} color="#007500" style={styles.icon}/>
                            <TextInput
                                style={styles.textInput}
                                placeholder='E-mail'
                                onChangeText={setEmail}
                                value={email}
                            />
                        </View>
                        <View style={styles.input}>
                            <Entypo name="lock" size={30} color="#007500" style={styles.icon}/>
                            <TextInput
                                secureTextEntry
                                style={styles.textInput}
                                placeholder='Senha'
                                onChangeText={setPassword}
                                value={password}
                            />
                        </View>
                        <TouchableOpacity style={styles.signInButton} onPress={()=> login()}>
                            <Text style={styles.signInText}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.signupButton} onPress={()=> navSignUp.navigate('SignUp')}>
                            <Text style={styles.signupText}>Criar uma nova conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modalize>
        </>
    )
}