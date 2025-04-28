import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Pelicula from '../components/Pelicula';

export default function ApiScreen() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getData();
      }, []);

      const getData = async ()=>{
        try {
          const resp = await fetch('https://jritsqmet.github.io/web-api/peliculas3.json')
          const json = await resp.json();
          setData(json.peliculas);
        }catch(error){
          console.log("Error al iniciar data", error);
            }
      };
  
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Visualización de la API</Text>
    
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Pelicula peliculas={item} />}
          />
        </View>
      )
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1, 
        paddingTop: 40,
      },
      title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
      }
    })