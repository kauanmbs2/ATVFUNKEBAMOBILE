import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Table, Row, Rows } from 'react-native-table-component';
import {Image} from 'react-native';

const PilhaTelas = createNativeStackNavigator()

function TelaInicial( {route, navigation} ){
return(
    <View style={styles.container}>
        
        <Image
                    style={styles.inicial}
                    source={require('./imagens/teste.jpg')}
                />  
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
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.titulo}>CAMPUS   </Text>
            <Image
                    style={styles.campus}
                    source={require('./imagens/ifc.png')}
                />  
            <Text style={styles.descricao}>O Campus Ibirama foi inaugurado em 1º de fevereiro de 2010 na antiga Escola Hamônia e iniciou suas atividades com o ensino no segundo semestre desse mesmo ano. Esteve vinculado ao Campus Rio do Sul até 3 de fevereiro de 2011 e em 4 de fevereiro de 2011, através de uma solenidade, deu início ao seu funcionamento regular e uma mudança na vinculação, passando a ser gerido pela Reitoria do IFC, instalada em Blumenau.

A partir do primeiro semestre de 2011 foram ofertados os primeiros cursos técnicos integrados ao ensino médio. A integralização entre ensino médio e técnico facilita o acesso de jovens à educação profissionalizante e permite impulsionar o desenvolvimento local.

Entre os anos de 2012 e 2013 o Campus foi contemplado com uma grande reforma estrutural e adequação de espaços físicos. Alterações importantes para o Campus Ibirama receber oficialmente sua autonomia em 23 de abril de 2013 com a Portaria 330/MEC. Foi também em 2013 que o Campus desenvolveu os projetos do curso técnico integrado em Administração e o curso superior de Tecnologia em Design de Moda, que entraram em funcionamento já em fevereiro de 2014.

Em 2016 dá-se início a uma nova fase, com a abertura dos Cursos de PROEJA com Qualificação em Administração Comercial (Educação de Jovens e Adultos) e a Pós-graduação em Educação e Interdisciplinaridade. E, em 2017, foi inaugurada a biblioteca do IFC Ibirama e a Pós-graduação em Moda.

Atualmente o Campus Ibirama conta com 60 servidores e aproximadamente 500 alunos, oferecendo os cursos técnicos integrados ao ensino médio em Administração, Informática e Vestuário; PROEJA com Qualificação em Administração Comercial; Curso Superior de Tecnologia em Design de Moda; Especialização em Educação e Interdisciplinaridade e Especialização em Moda.</Text>
<Image
                    style={styles.logo}
                    source={require('./imagens/logo2.png')}
                />  
             
             <Button
                    title='Voltar para a tela'
                    color="black"
                    onPress={function(){ 
                    navigation.goBack() 
                 }}/>
        </View>
       </ScrollView>
    )}
    function TelaEscolherPessoa( {route, navigation} ){
        return(
            <View style={styles.container}>
                  <Image
                    style={styles.campus}
                    source={require('./imagens/escola.jpg')}
                />  
                <Text style={styles.titulo}>Selecione Uma Curso</Text>
                <Button
                        title='ADMINTRAÇÂO '
                        color="red"
                        onPress={function(){ 
                        navigation.navigate("ADM",{
                            nome:"Informaçõe De Curso" ,
                            descricao:"ADM"

                        })
                        }}
                    />
                <Button
                        title='    VESTUARIO    '
                        color="green"
                        onPress={function(){ 
                        navigation.navigate("VEST",{
                            nome:"Informaçõe De Curso",
                            descricao:"VEST"
                        })
                        }}
                    />
                
                <Button
                        title=' INFORMATICA  '
                        color="purple"
                        onPress={function(){ 
                        navigation.navigate("INFO",{
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
        function ADM( {route, navigation} ){
            
            
            var tabela = {
                tableHeadPrimeiroAno: ['Materias 1º ano', 'Horas'],
                tableHeadSegundoAno: ['Materias 2º ano', 'Horas'],
                tableHeadterceiroAno: ['Materias 3º ano', 'Horas'],
                tableHeadprofessor: ['Professor' , 'Email'],
                tableDataprimeiroano: [
                  ['Economia', '60'],
                  ['Fundamentos da Administração', '60'],
                  ['Gestão de Pessoas', '60'],
                  [' Gestão de Serviços', '60'],
                  [' Projeto Integrador I', '60'],
                  ['TOTAL NO 1º ANO', '300'],
                ],
                tableDatasegundoano: [
                    ['Estatística e Matemática financeira', '60'],
                    ['Gestão da produção e Logística', '90'],
                    ['Marketing', '60'],
                    [' Planejamento Estratégico', '60'],
                    [' Projeto Integrador II', '60'],
                    [' TOTAL NO 2º ANO', '330'],
                  ],
                  tableDataterceiroano: [
                    ['Administração da Tecnologia da Informação', '60'],
                    ['Administração financeira', '90'],
                    ['Projeto Integrador III', '60'],
                    ['  Responsabilidade Social Empresarial', '60'],
                    [' TOTAL DO 3º ANO', '270'],
                    [' TOTAL DA ÁREA TÉCNICA', '900'],
                  ],
                  tableDataprofessor: [
                    ['André Luiz Kopelke', 'andre.kopelke@ifc.edu.br'],
                    ['Jeter Lang', 'jeter.lang@ifc.edu.br'],
                    ['Paulo Roberto Silveira Machado', 'paulo.machado@ifc.edu.br'],
                    ['  Thiago Souza Araújo', 'thiago.araujo@ifc.edu.br'],
                    
                  ]

              }
            return(
                <ScrollView >
                <View style={styles.container}>
                    <Text style={styles.titulo}>Administração</Text>
                    <Image
                    style={styles.adm}
                    source={require('./imagens/adm.jpg')}
                />  
                    <Text style={styles.descricao}>
                        O Curso Técnico em Administração tem por objetivo proporcionar aos estudantes o desenvolvimento de sua autonomia enquanto cidadãos críticos e participativos, visando ao domínio dos conhecimentos científicos e tecnológicos da administração, para atuarem de maneira consciente e responsável diante das necessidades atuais no mundo do trabalho.
Assim, o profissional Técnico em Administração pode atuar nas instituições públicas, privadas e do terceiro setor que demandem atividades de gestão, trabalhando especialmente no suporte e apoio nos mais diversos setores.</Text>
                    <Text style={styles.cursos}>
                    Disciplinas Tecnicas
                    </Text>
                    <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
                        <Row data={tabela.tableHeadPrimeiroAno} style={styles.head} />
                        <Rows data={tabela.tableDataprimeiroano} />
                        <Row data={tabela.tableHeadSegundoAno} style={styles.head} />
                        <Rows data={tabela.tableDatasegundoano} />
                        <Row data={tabela.tableHeadterceiroAno} style={styles.head} />
                        <Rows data={tabela.tableDataterceiroano} />
                    </Table>
                    <Text style={styles.cursos}>
                    Professores Das Disciplinas Tecnicas
                    </Text>
                    <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
                        <Row data={tabela.tableHeadprofessor} style={styles.head} />
                        <Rows data={tabela.tableDataprofessor} />
                    </Table>
                    <Image
                    style={styles.logo}
                    source={require('./imagens/logo2.png')}
                />  
                    
                    <Button
                            title='Voltar'
                            color="red"
                            onPress={function(){ 
                            navigation.goBack()
                         }}/>
                        
                </View>
                </ScrollView>
            )}
            function VEST( {route, navigation} ){
                var tabela = {
                    tableHeadPrimeiroAno: ['Materias 1º ano', 'Horas'],
                    tableHeadSegundoAno: ['Materias 2º ano', 'Horas'],
                    tableHeadterceiroAno: ['Materias 3º ano', 'Horas'],
                    tableHeadprofessor: ['Professor' , 'Email'],
                    tableDataprimeiroano: [
                      [' Desenho de Moda e Ilustração	', '60'],
                      [' História do Vestuário	', '60'],
                      [' Projeto Integrador I	', '60'],
                      ['  Tecnologia da Costura I	', '60'],
                      [' Tecnologia Têxtil', '60'],
                      ['TOTAL NO 1º ANO', '300'],
                    ],
                    tableDatasegundoano: [
                        [' Desenho Técnico de Vestuário e Têxtil', '60'],
                        ['Modelagem Plana e Tecnologia', '120'],
                        ['Projeto Integrador II', '60'],
                        [' Tecnologia e Métodos no Processo Produtivo', '60'],
                        [' Tecnologia da Costura II', '60'],
                        [' TOTAL NO 2º ANO', '360'],
                      ],
                      tableDataterceiroano: [
                        ['Administração e Empreendedorismo', '60'],
                        ['Beneficiamento Têxtil', '120'],
                        ['Desenvolvimento de Produto Sustentável', '60'],
                        ['Higiene e Segurança do Trabalho', '60'],
                        ['Laboratório de Moulage e Confecção', '60'],
                        ['Projeto Integrador III', '60'],
                        [' TOTAL DO 3º ANO', '420'],
                        [' TOTAL DA ÁREA TÉCNICA', '1080'],
                      ],
                      tableDataprofessor: [
                        ['Ana Silvia De Lima Vielmo', 'ana.vielmo@ifc.edu.br'],
                        ['Francisleth Pereira Battisti', 'francisleth.battisti@ifc.edu.br'],
                        ['Isabela Dal-Bó Falchetti', 'isabela.dalbo@ifc.edu.br'],
                        ['Jonathan Gurgel de Lima', '	jonathan.lima@ifc.edu.br'],
                        ['Lariane Davila Borges de Oliveira', 'lariane.oliveira@ifc.edu.br'],
                        ['Márcio Monticelli Albani', '	marcio.albani@ifc.edu.br'],
                      ]
    
                  }
                return(
                    <ScrollView >
                    <View style={styles.container}>                   
                        <Text style={styles.titulo}>VESTUARIO</Text>
                        <Image
                    style={styles.vest}
                    source={require('./imagens/vest.jpg')}
                />  
                        <Text style={styles.descricao}>O curso Técnico em Vestuário Integrado ao Ensino Médio objetiva proporcionar aos discentes o desenvolvimento de sua autonomia enquanto cidadãos críticos e participativos, visando o domínio dos conhecimentos científicos e tecnológicos, para atuarem de maneira consciente e responsável diante das necessidades atuais no mundo do trabalho, com foco na formação e a qualificação de profissionais com visão técnica para atuarem na área de confecção do vestuário, aptos a gerenciar e operacionalizar as diversas etapas do processo de produção do vestuário, em empresas da área industrial e de prestação de serviços. 
                        Disciplinas Tecnicas
                        </Text>
                        <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
                            <Row data={tabela.tableHeadPrimeiroAno} style={styles.head} />
                            <Rows data={tabela.tableDataprimeiroano} />
                            <Row data={tabela.tableHeadSegundoAno} style={styles.head} />
                            <Rows data={tabela.tableDatasegundoano} />
                            <Row data={tabela.tableHeadterceiroAno} style={styles.head} />
                            <Rows data={tabela.tableDataterceiroano} />
                        </Table>
                        <Text style={styles.cursos}>
                        Professores Das Disciplinas Tecnicas
                        </Text>
                        <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
                            <Row data={tabela.tableHeadprofessor} style={styles.head} />
                            <Rows data={tabela.tableDataprofessor} />
                        </Table>
                        
                        <Image
                    style={styles.logo}
                    source={require('./imagens/logo2.png')}
                />  
                        
                        <Button
                                title='Voltar'
                                color="red"
                                onPress={function(){ 
                                navigation.goBack()
                             }}/>
                    </View>
                    </ScrollView>
                )}
                function INFO( {route, navigation} ){
                    var tabela = {
                        tableHeadPrimeiroAno: ['Materias 1º ano', 'Horas'],
                        tableHeadSegundoAno: ['Materias 2º ano', 'Horas'],
                        tableHeadterceiroAno: ['Materias 3º ano', 'Horas'],
                        tableHeadprofessor: ['Professor' , 'Email'],
                        tableDataprimeiroano: [
                          ['Fundamentos da Informática', '60'],
                          ['Hardware e Sistemas Operacionais', '120'],
                          ['Lógica de Programação', '120'],
                          ['Projeto Integrador I', '30'],
                          ['Desenvolvimento Web', '60'],
                          ['TOTAL NO 1º ANO', '390'],
                        ],
                        tableDatasegundoano: [
                            ['Banco de Dados', '90'],
                            ['Engenharia de Software I', '60'],
                            ['Programação I', '120'],
                            ['Projeto Integrador II', '30'],
                            ['Redes', '60'],
                            [' TOTAL NO 2º ANO', '360'],
                          ],
                          tableDataterceiroano: [
                            ['Empreendedorismo', '60'],
                            ['Programação II', '120'],
                            ['Projeto Integrador III', '60'],
                            ['Administração de Redes', '60'],
                            [' TOTAL DO 3º ANO', '300'],
                            [' TOTAL DA ÁREA TÉCNICA', '1050'],
                          ],
                          tableDataprofessor: [
                            ['Bruno Anselmo Guilhen', 'bruno.guilhen@ifc.edu.br'],
                            ['Eduardo Stahnke', 'eduardo.stahnke@ifc.edu.br'],
                            ['Juliane Martinez Galiano', 'juliane.galiano@ifc.edu.br'],
                            ['Rodrigo Ramos Nogueira', 'rodrigo.nogueira@ifc.edu.br'],
                            ['Tiago Funk', '	tiago.funk@ifc.edu.br'],
                            
                          ]
        
                      }
                    return(
                        <ScrollView >
                        <View style={styles.container}>                   
                            <Text style={styles.titulo}>Informática</Text>
                            <Image
                    style={styles.info}
                    source={require('./imagens/info.jpg')}
                />  
                            <Text style={styles.descricao}>Das 3400 horas de curso, 1050 horas destinam-se a unidades curriculares da área técnica. No entanto, o curso visa à interseção entre as áreas técnica e comum, com ênfase na prática profissional e com possibilidade de realização de estágios não obrigatórios.
                            </Text>
                            <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
                                <Row data={tabela.tableHeadPrimeiroAno} style={styles.head} />
                                <Rows data={tabela.tableDataprimeiroano} />
                                <Row data={tabela.tableHeadSegundoAno} style={styles.head} />
                                <Rows data={tabela.tableDatasegundoano} />
                                <Row data={tabela.tableHeadterceiroAno} style={styles.head} />
                                <Rows data={tabela.tableDataterceiroano} />
                            </Table>
                            <Text style={styles.cursos}>
                            Professores Das Disciplinas Tecnicas
                            </Text>
                            <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
                                <Row data={tabela.tableHeadprofessor} style={styles.head} />
                                <Rows data={tabela.tableDataprofessor} />
                            </Table>
                            
                            <Image
                    style={styles.logo}
                    source={require('./imagens/logo2.png')}
                />  
                            
                            <Button
                                    title='Voltar'
                                    color="red"
                                    onPress={function(){ 
                                    navigation.goBack()
                                 }}/>
                        </View>
                        </ScrollView>
                    )}

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
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
                    name="ADM"
                    component={ADM}
                    options={{title:"Informações Do Curso"}}
                    ></PilhaTelas.Screen>
                    <PilhaTelas.Screen
                    name="VEST"
                    component={VEST}
                    options={{title:"Informações Do Curso"}}
                    ></PilhaTelas.Screen>
                    <PilhaTelas.Screen
                    name="INFO"
                    component={INFO}
                    options={{title:"Informações Do Curso"}}
                    ></PilhaTelas.Screen>
            </PilhaTelas.Navigator>
       </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#green' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
titulo:{
    
    fontSize: 30,
    
},
descricao:{
    fontSize: 16,
    marginLeft: 10,
    marginRight: 75,
    alignItems: "center",
},
cursos:{
    fontSize: 16,
    alignItems:"center",
    marginLeft: 10,
    marginRight: 10,
},
stretch: {
    width: 275,
    height: 200,
    resizeMode: 'stretch',
    alignContent: 'top',
    
    marginRight: '10%'
  },
  campus    : {
    width: 370,
    height: 200,
    resizeMode: 'stretch',
    alignContent: 'center',
    marginRight: '15%'
  },
  inicial    : {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    alignContent: 'center',
    marginRight: '15%'
  },
  vest    : {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    alignContent: 'center',
    marginRight: '15%'
  },

  adm    : {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    alignContent: 'center',
    marginRight: '15%'
  },

  info    : {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    alignContent: 'center',
    marginRight: '15%'
  },

  logo    : {
    width: '100%',
    height: 100,
    resizeMode: 'stretch',
    alignContent: 'center',
    marginRight: '15%'
  },
});
