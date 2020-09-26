import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Roupa() {
 const navigation = useNavigation()
 return (
   <ScrollView>
   <View>
        <Image
        style={styles.ImagemCapa}
        source={require('./Rectangle 47-1.png')}
      />

      <View style={styles.Descricao}>
      <Text style={styles.Titulo}> Blusa de manga</Text>
      <Text style={styles.Valor}> R$39,99</Text>
      <Text style={styles.Pagamento}> 2x de R$14,99 sem juros</Text>
      <Text style={styles.Pagamento}> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.</Text>
      <View style={styles.Botoes}> 
<TouchableOpacity style={styles.Tamanho}>P </TouchableOpacity>  
<TouchableOpacity style={styles.Tamanho}>M </TouchableOpacity>      
<TouchableOpacity style={styles.Tamanho}>G </TouchableOpacity>   
<TouchableOpacity style={styles.Comprar}>Comprar </TouchableOpacity>      



</View>



      </View>
   </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  ImagemCapa:{
    width: 320,
    height: 180
  },
  Titulo:{
    fontSize:16,
    margin : 10
  },
  Valor:{
    fontSize:14,
    color: '#C85108',
    fontWeight: 'bold',
    marginLeft: 10
  },
  Pagamento:{
    marginLeft: 10,
    marginTop: 10,
    fontSize: 12,
    color: '#938788'
  },
  Botoes:{
    margin: 5,
    display: 'flex',
    flexDirection: 'row'
  },
  Tamanho:{
    margin: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    padding: 8,
    color: 'white',
    backgroundColor: '#C85108'

  },
  Comprar:{
    margin: 5,
    textAlign: 'center',
    marginLeft: 45,
    width: 100,
    height: 40,
    borderRadius: 5,
    padding: 8,
    color: 'white',
    backgroundColor: '#C85108'
  }
})