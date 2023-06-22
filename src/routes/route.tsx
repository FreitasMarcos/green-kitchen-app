import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import type, { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tabs } from "./routesTabs";
import DetailsRecipe from "../DetailsScreen/DetailsRecipe";
import { TermUse } from "../MoreOption/TermUse/TermUse";
import { About } from "../MoreOption/About/About";
import { SignUp } from "../SignUP/SignUp";
import { SendRecipes } from "../MoreOption/SendRecipes/SendRecipes";
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";
import { Drink } from "../Categories/Drink/Drink";
import { Candy } from "../Categories/Candy/Candy";
import { Snack } from "../Categories/Snack/Snack";
import { WorkSpace } from "../MoreOption/WorkSpace/WorkSpace";
import { UpdateRecipes } from "../MoreOption/WorkSpace/UpdateRecipes/UpdateRecipes";


const Stack = createNativeStackNavigator();

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

export type RootStackParamsList = {
    DetailsRecipes: undefined,
    TermUse: undefined,
    About: undefined,
    SignUp: undefined,
    Home: undefined,
    Profile: undefined,
    Drink: undefined,
    Snack: undefined,
    Candy: undefined,
    WorkSpace: undefined,
    UpdateRecipes: undefined,
}

export default function Route(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Tabs" component={Tabs}/>
                <Stack.Screen name="DetailsRecipes" component={DetailsRecipe} options={{title: "Detalhes da receita", headerShown: true, headerStyle:{backgroundColor: '#007500'}, headerTitleStyle:{color: 'white'},headerTintColor: 'white'}} />
                <Stack.Screen name="TermUse" component={TermUse} options={{title: "Termo de Uso",headerShown: true, headerStyle:{backgroundColor: '#007500'}, headerTitleStyle:{color: 'white'},headerTintColor: 'white'}} />
                <Stack.Screen name="About" component={About} options={{title: "Quem Somos", headerShown: true, headerStyle:{backgroundColor: '#007500'}, headerTitleStyle:{color: 'white'},headerTintColor: 'white'}} />
                <Stack.Screen name="SignUp" component={SignUp} options={{title: "Cadastrar", headerShown: true, headerStyle:{backgroundColor: '#007500'}, headerTitleStyle:{color: 'white'},headerTintColor: 'white'}} />
                <Stack.Screen name="SendRecipes" component={SendRecipes} options={{title: "Nova Receita", headerShown: true, headerStyle:{backgroundColor: '#007500'}, headerTitleStyle:{color: 'white'},headerTintColor: 'white'}} />
                <Stack.Screen name="Profile" component={Profile} options={{title: "Perfil", headerShown: true, headerStyle:{backgroundColor: '#007500'}, headerTitleStyle:{color: 'white'},headerTintColor: 'white'}} />
                <Stack.Screen name="WorkSpace" component={WorkSpace} options={{title: "Receitas", headerShown: true, headerStyle:{backgroundColor: '#007500'}, headerTitleStyle:{color: 'white'},headerTintColor: 'white'}} />
                <Stack.Screen name="UpdateRecipes" component={UpdateRecipes} options={{title: "Atualizar", headerShown: true, headerStyle:{backgroundColor: '#007500'}, headerTitleStyle:{color: 'white'},headerTintColor: 'white'}} />
                <Stack.Screen name="Drink" component={Drink} options={{title: "Bebidas", headerShown: true, headerStyle:{backgroundColor: '#007500'}, headerTitleStyle:{color: 'white'},headerTintColor: 'white'}} />
                <Stack.Screen name="Snack" component={Snack} options={{title: "Lanches", headerShown: true, headerStyle:{backgroundColor: '#007500'}, headerTitleStyle:{color: 'white'},headerTintColor: 'white'}} />
                <Stack.Screen name="Candy" component={Candy} options={{title: "Doces", headerShown: true, headerStyle:{backgroundColor: '#007500'}, headerTitleStyle:{color: 'white'},headerTintColor: 'white'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}