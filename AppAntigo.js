import { Text, View, Button, StyleSheet, ScrollView } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const PilhaTelas = createNativeStackNavigator()

function TelaInicial( {route, navigation} ){
return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Tela Inicial</Text>
        
        <Button
                title='Detalhes Do Campus'
                color="red"
                onPress={function(){ navigation.navigate('OutraTela') }}
            />
         <Button
                title='Pagina De Curso'
                color="green"
                onPress={function(){ navigation.navigate('PessoaEscolher') }}
            />
            
    </View>
   
)}

function OutraTela( {route, navigation} ){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Campus: </Text> 
             <Button
                    title='Voltar para a tela'
                    color="black"
                    onPress={function(){ 
                    navigation.goBack() 
                 }}/>
        </View>
       
    )}
    function TelaEscolherPessoa( {route, navigation} ){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Selecione Uma Curso</Text>
                <Button
                        title='ADMINTRAÇÂO '
                        color="red"
                        onPress={function(){ 
                        navigation.navigate("TelaPessoa",{
                            nome:"Informaçõe De Curso" ,
                            descricao:"ADM"

                        })
                        }}
                    />
                <Button
                        title='    VESTUARIO    '
                        color="green"
                        onPress={function(){ 
                        navigation.navigate("TelaPessoa",{
                            nome:"Informaçõe De Curso",
                            descricao:"VEST"
                        })
                        }}
                    />
                
                <Button
                        title=' INFORMATICA  '
                        color="purple"
                        onPress={function(){ 
                        navigation.navigate("TelaPessoa",{
                            nome:"Informaçõe De Curso",
                            descricao:"INFO"
                        })
                        }}
                    />
                    
                    <Button
                        title='        Voltar       '
                        color="black"
                        onPress={function(){ 
                        navigation.goBack() 

                        }
                        }
                    />
            </View>
           
        )}
        function TelaPessoa( {route, navigation} ){
            return(
                <View style={styles.container}>                   
                    <Text style={styles.titulo}>Administração</Text>
                    <ScrollView >
                    <Text style={styles.descricao}>O Curso Técnico em Administração tem por objetivo proporcionar aos estudantes o desenvolvimento de sua autonomia enquanto cidadãos críticos e participativos, visando ao domínio dos conhecimentos científicos e tecnológicos da administração, para atuarem de maneira consciente e responsável diante das necessidades atuais no mundo do trabalho.

Assim, o profissional Técnico em Administração pode atuar nas instituições públicas, privadas e do terceiro setor que demandem atividades de gestão, trabalhando especialmente no suporte e apoio nos mais diversos setores.</Text>
                    <Text style={styles.cursos}>
                    
Componentes curriculares do 1º ano
                    </Text>
                    
                    </ScrollView>
                    
                    <Button
                            title='Voltar'
                            color="red"
                            onPress={function(){ 
                            navigation.goBack()
                         }}/>
                </View>
               
            )}

            
    

export default function App(){
    return(
       <NavigationContainer>
            <PilhaTelas.Navigator>
                    <PilhaTelas.Screen
                    name="TelaInicial"
                    component={TelaInicial}
                    options={{title:"          Instituto Federal Catarinense"}}
                    ></PilhaTelas.Screen> 
                    <PilhaTelas.Screen
                    name="OutraTela"
                    component={OutraTela}
                    options={{title:"Campus Ibirama"}}
                    ></PilhaTelas.Screen> 
                    <PilhaTelas.Screen
                    name="PessoaEscolher"
                    component={TelaEscolherPessoa}
                    options={{title:"Pagina De Cursos"}}
                    ></PilhaTelas.Screen> 
                    <PilhaTelas.Screen
                    name="TelaPessoa"
                    component={TelaPessoa}
                    options={{title:"Informações Do Curso"}}
                    ></PilhaTelas.Screen>
            </PilhaTelas.Navigator>
       </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgrounColor: "#fff",
        alignItems: "center",
        justifyContent: "top",
        width: "100%",
        marginTop: '5%',
    },
    titulo:{
        
        fontSize: 20,
        
    },
    descricao:{
        fontSize: 16,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
    },
    cursos:{
        fontSize: 16,
        alignItems:"center",
        marginLeft: 10,
        marginRight: 10,
    }
    

})