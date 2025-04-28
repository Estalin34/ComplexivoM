import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Pelicula(props:any) {
  function detalles(id:string,titulo:string,genero:string,descripcion:string,anio:string){
    Alert.alert(id, "titulo:" +titulo+ "genero:" +genero+ "|descripcion:" +descripcion+ "año:" +anio);

      }
    
  return (

    <TouchableOpacity
    onPress={()=>detalles(props.peliculas.id, props.peliculas.titulo, props.peliculas.genero, props.peliculas.descripcion, props.peliculas.anio)}>
    <View>
      <Image
      
      source={{uri:props.peliculas.imagen}}
      style={{ width: 200, height: 300 }}
      />
      <Text>{props.peliculas.id}</Text>
      <Text>{props.peliculas.titulo}</Text>
      <Text>{props.peliculas.genero}</Text>
      <Text>{props.peliculas.descripcion}</Text>
      <Text>{props.peliculas.anio}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})