import React from "react";
import {View,Text, ScrollView} from 'react-native'
import {styles} from './style/styles'

export function About(){
    return(
        <ScrollView>
            <Text style={styles.title}>
                GreenKitchen: Delícias Veganas e Vegetarianas
            </Text>
            <View style={styles.containerLine}/>
            <Text style={styles.text}>
                <Text style={{fontWeight:"bold", fontSize:16,}}>Bem-vindo</Text> ao maravilhoso mundo da GreenKitchen, o aplicativo revolucionário que reúne uma comunidade de entusiastas da culinária vegana e vegetariana. Aqui, a magia acontece quando pessoas apaixonadas por alimentação saudável se unem para compartilhar receitas deliciosas, criativas.
            </Text>
            <Text style={styles.text}>
                Na GreenKitchen, acreditamos que a comida pode ser uma expressão de amor, respeito e cuidado, tanto para nós mesmos quanto para o planeta. Nossa plataforma é o ponto de encontro perfeito para todos aqueles que desejam explorar novas opções culinárias, experimentar sabores autênticos e contribuir para um estilo de vida mais sustentável.
            </Text>
            <Text style={styles.text}>
                O conceito por trás da GreenKitchen é simples, mas poderoso: todos os usuários têm a oportunidade de compartilhar suas receitas exclusivas e descobrir uma variedade infinita de pratos incríveis. É um espaço onde a criatividade culinária floresce e onde cada um tem a chance de ser um chef talentoso.
            </Text>
            <Text style={styles.text}>
                Ao navegar pelo aplicativo, você encontrará uma coleção diversificada de receitas, desde pratos principais até sobremesas irresistíveis. Temos opções para todos os gostos e preferências alimentares, seja você vegano, vegetariano, flexitariano ou apenas curioso em experimentar algo novo.
            </Text>    
            <Text style={styles.text}>
                Além de oferecer uma biblioteca inspiradora de receitas, a GreenKitchen também permite que você interaja com outros membros da comunidade. Você pode avaliar e comentar as receitas, trocar dicas e truques culinários, e até mesmo seguir os chefs favoritos para ficar por dentro de suas criações mais recentes.
            </Text>
            <Text style={styles.text}>
                A usabilidade do aplicativo é uma de nossas principais preocupações. Com uma interface intuitiva e amigável, você pode pesquisar receitas por categoria, ingredientes ou até mesmo pelo tempo de preparo. E se você estiver com pressa ou não souber o que cozinhar, não se preocupe! O recurso "Sugestão do Dia" oferece uma opção surpresa para te inspirar a cada dia.
            </Text>
            <Text style={styles.text}>
                Na GreenKitchen, acreditamos que uma dieta baseada em plantas é uma escolha saudável, ética e ecologicamente responsável. Estamos comprometidos em fornecer recursos valiosos para ajudar nossos usuários a embarcar nessa jornada e desfrutar de uma alimentação nutritiva e saborosa.
            </Text>
            <Text style={styles.text}>
                Então, se você está pronto para explorar novos sabores, compartilhar suas receitas favoritas e se conectar com uma comunidade apaixonada por culinária vegana e vegetariana, junte-se a nós na GreenKitchen. Baixe o aplicativo hoje mesmo e embarque em uma jornada gastronômica emocionante e cheia de descobertas. <Text style={{fontWeight:"bold"}}>A aventura começa agora!</Text>
            </Text>
        </ScrollView>
    )
}