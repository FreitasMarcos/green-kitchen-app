import React from 'react'
import {View,Text} from 'react-native'
import {styles} from './style/styles'
import { ScrollView } from 'react-native-gesture-handler'

export function TermUse(){
    return(
        <ScrollView style={styles.containerScreen}>
            <Text style={styles.title}>Compromisso da Empresa</Text>
            <View style={styles.containerLine}/>
            <Text style={styles.texts}> A sua privacidade é importante para nós. É política do Green Kitchen respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Green Kitchen, e outros sites que possuímos e operamos.</Text>

            <Text style={styles.texts}>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</Text>

            <Text style={styles.texts}>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</Text>

            <Text style={styles.texts}>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</Text>

            <Text style={styles.texts}>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</Text>

            <Text style={styles.texts}>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</Text>

            <Text style={styles.texts}>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</Text>


            <Text style={styles.title}>Compromisso do Usuário</Text>
            <View style={styles.containerLine}/>
            <Text style={styles.texts}>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Green Kitchen oferece no site e com caráter enunciativo, mas não limitativo:</Text>
            <Text style={styles.items}>A- Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;{"\n"}</Text>
            <Text style={styles.items}>B- Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, bet365 brasil ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;{"\n"}</Text>
            <Text style={styles.items}>C- Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Green Kitchen, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</Text>
            <Text style={styles.title}>Mais informações</Text>
            <View style={styles.containerLine}/>
            <Text style={styles.texts}>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</Text>
        </ScrollView>
    )
}