import React, {useState} from "react";
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native'
import {  Entypo, Ionicons  } from '@expo/vector-icons';
import {styles} from './style/styles'
import { api } from "../../api/greenKitchen";
import { useNavigation } from '@react-navigation/native';


export function SignUp(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const navigation = useNavigation();

    async function signUpApi() {

        await api.post('auth/signup',{
            email: email,
            password: password,
            name: name,
            roleId: 1,
            userStatusId: 1
        },{
            headers:{
                "Content-Type": "application/json"
            }
        }).then(()=>{
            Alert.alert(
                `Bem vindo a nossa comunidade ${name}`,
                'Seu usuário foi criado com sucesso!!',
                [
                    {
                        text: 'Confirmar',
                        onPress: () =>  navigation.navigate("Tabs" as never),
                    }
                ]
            )
        }).catch((e)=>{
            console.log(e.response);
        })
    }

/*     useEffect(()=>{
        signUpApi();
    },[]) */

    return(
        <View style={styles.containerScreem}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Registrar</Text>
            </View>
            <View style={styles.containerTeste}>
                <View style={styles.containerForm}>
                    <View style={styles.input}>
                        <Ionicons name="person" size={30} color="#007500" style={styles.icon}/>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Nome'
                            onChangeText={setName}
                            value={name}
                        />
                    </View>
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
                    <TouchableOpacity style={styles.signUpButton} onPress={()=> signUpApi()}>
                        <Text style={styles.signUpText}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}