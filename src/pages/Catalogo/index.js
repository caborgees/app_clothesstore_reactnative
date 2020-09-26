import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


export default function Catalogo() {
    const navigation = useNavigation();

 return (
   <ScrollView>
   <View style={{background:  'white'}}>
   <View style={styles.Cabeçalho}>
     <Text>Feminino</Text>
     <Ionicons name="md-list" size={22} color="#C85108" />
</View>
     <View> 
     <Text> T-shirts (06)</Text>
     <Image
        style={styles.Linha}
        source={require('./assets/linha.png')}
      />
  </ View>

  <View style={styles.Catalogo}>

    <View style={styles.Produto}>
  <Image
        style={styles.ImagemProduto}
        source={require('./assets/r1.png')}
      />
      <Text style={styles.Titulo}> Blusa Marrom</Text>
      <Text style={styles.Valor}> R$29,99</Text>

    </View>

    <View style={styles.Produto}>
  <Image
        style={styles.ImagemProduto}
        source={require('./assets/r2.png')}
      />
      <Text style={styles.Titulo}> Blusa Vinho</Text>
      <Text style={styles.Valor}> R$39,99</Text>

    </View>
  </View>

  <View style={styles.Catalogo}>

    <View style={styles.Produto}>
  <Image
        style={styles.ImagemProduto}
        source={require('./assets/r3.png')}
      />
      <Text style={styles.Titulo}> Blusa Preta</Text>
      <Text style={styles.Valor}> R$39,99</Text>

    </View>

    <View style={styles.Produto}>
    <TouchableOpacity
    onPress={() => navigation.navigate('Roupa')}>
  <Image
        style={styles.ImagemProduto}
        source={require('./assets/r4.png')}
      />
      
      </TouchableOpacity>
      <Text style={styles.Titulo}> Blusa de Manga</Text>
      <Text style={styles.Valor}> R$49,99</Text>

    </View>
  </View>


     
   </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  Cabeçalho:{
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Linha:{
    width: 370,
    height:1,
    margin: 5
  },
  Catalogo:{
    display: 'flex',
    flexDirection: 'row',
    margin: 10
  },
  Produto:{
    textAlign: 'center'
  },
  ImagemProduto:{
    width: 146,
    height: 156
  },
  Titulo:{
    color: '#4A0F17',
    fontSize:14
  },
  Valor:{
    color: '#938788',
    fontSize:12
  }
})