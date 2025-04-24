import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Pelicula from '../components/Pelicula';
export default function ApiScreen() {

  const [data, setdata] = useState<any[]>([]);

  useEffect(() => {
    getData();
      }, []);

      const getData =async ()=>{
        try {
          const resp=await fetch("https://jritsqmet.github.io/web-api/peliculas3.json")
          const json =await resp.json();
          setdata(json.peliculas);
        }catch(error){
          console.log("Error al iniciar data",error);
            }
      };
  
  return (
    <View>
      <Text>Vizualizacion del contenido de la Api</Text>
      <FlatList
      data={data}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>
      <Pelicula peliculas={item}/>}
      
      />
    </View>
  )
}

const styles = StyleSheet.create({})