import react from 'react'
import {View, Text, Image, ScrollView} from 'react-native'

import {styles} from '../DetailsScreen/styles/styles'

import { MaterialCommunityIcons  } from '@expo/vector-icons';

export default function(item:any){
    return(
        <View style={styles.containerScreen}>
            <ScrollView>
                <Image style={styles.sliderImage} source={require('../../assets/images/recipes/Doces.jpg')} />
                <View style={styles.containerRecipesName}>
                    <Text style={styles.recipesName}>{item.route.params.item.title}</Text>
                </View>
                <View style={styles.containerLine}/>
                    <View style={styles.containerCopyRight}>
                        <Text style={styles.textCopyRight}>por Green Kitchen</Text>
                    </View>
                <View style={styles.containerLine}/>
                <View style={styles.containerData}>
                    <View style={styles.amount}>
                        <Text style={styles.textData}>SERVE: {item.route.params.item.amount} porções</Text>
                    </View>
                    <View style={styles.verticalLine}/>
                    <View style={styles.time}>
                        <Text style={styles.textData}>PREPARO: {item.route.params.item.preparingTime} MIN</Text>
                    </View>
                </View>
                <View style={styles.containerIngredients}>
                    <View style={styles.lineLeft} />
                        <MaterialCommunityIcons style={styles.icon} name="food-apple" size={40} color="#007500"/>
                    <View style={styles.lineRight} />
                </View>
                <Text style={styles.textIngredients}>MODO DE PREPARO</Text>
                <View style={styles.containerLineAll}/>
                
                <View style={styles.containerInfo}>
                    <View style={styles.card}>
                        <Text style={styles.text}>{item.route.params.item.description}</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}