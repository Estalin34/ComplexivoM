import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Pelicula(props:any) {
  function detalles(id:string,titulo:string,genero:string,lanzamiento:string,anio:string){
    Alert.alert(id, `titulo: ${titulo} genero: ${genero} lanzamiento: ${lanzamiento} año: ${anio}`);

      }
  return (

    <TouchableOpacity
    onPress={()=>detalles(props.id, props.titulo, props.genero, props.lanzamiento, props.anio)}>
    <View>
      <Image
      source={{uri:props.peliculas.imagen}}/>
      <Text>{props.peliculas.id}</Text>
      <Text>{props.peliculas.titulo}</Text>
      <Text>{props.peliculas.genero}</Text>
      <Text>{props.peliculas.lanzamiento}</Text>
      <Text>{props.peliculas.anio}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})