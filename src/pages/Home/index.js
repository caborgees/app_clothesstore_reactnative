import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

 return (
   <ScrollView>
   <View>
  <Image
        style={styles.ImagemCapa}
        source={require('./assets/Capa.png')}
      />

      <TouchableOpacity 
      style= {styles.Botao}
      onPress={() => navigation.navigate('Catalogo')} >
      Conheça</TouchableOpacity>

     

      

      
   </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  ImagemCapa:{
    width: 315,
    height:647,
    position: 'absolute'
  },
  Botao:{
    width: 243,
    height: 53,
    color: 'white',
    background: '#C85108',
    borderRadius: 20,
    textAlign: 'center',
    padding: 20,
    top: 540,
    left: 40

  }
})