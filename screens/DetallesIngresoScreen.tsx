import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../config/Config';
import { DataSnapshot, onValue, ref, remove } from 'firebase/database';

export default function DetallesIngreso({navigation}:any) {
interface PeliculaData{
    id:string;
    titulo:string;
    genero:string;
    precio:number;
    descripcion:string;
    anio:string;
}

const [uid, setuid] = useState("");
const [datos, setdatos] = useState<PeliculaData[]>([]);

useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setuid(user.uid);
        }else{
            console.log("No hay un usuario logueado");
            
        }
    })
    
}, []);
useEffect(() => {
    if(uid){
        leer();
        
    }
}, [uid])

function leer(){
    const peliculasRef =ref(db,`usuarios/${uid}/peliculas`);
    onValue(peliculasRef, (snapshot)=>{
        const data=snapshot.val();
        let peliculas:PeliculaData[]=[];
        if(data){
        Object.keys(data).forEach((key)=>{
            peliculas.push({
                id:key,
                titulo:data[key].titulo,
                genero:data[key].genero,
                precio:data[key].precio,
                descripcion:data[key].descripcion,
                anio:data[key].anio,
            });
        });
        }
        setdatos(peliculas);
    });
}
function eliminar(id:string){
    remove(ref(db,`usuarios/${uid}/peliculas/${id}`))
    .then(()=>{
        Alert.alert("Exito","La pelicula ha sido eliminado correctamente");
    })
    .catch((error)=>{
        console.log("No se pueden eliminar paso un Error",error);
        
    })
}
function editar(item:PeliculaData){
    navigation.navigate("Editar",{
        id:item.id,
        titulo:item.titulo,
        genero:item.genero,
        precio:item.precio,
        descripcion:item.descripcion,
        anio:item.anio,
        uid: uid,
    });
}
return (
<View>
    <Text>Lista de Peliculas Agregadas </Text>
    <FlatList
    data={datos}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
    <View>
    <Text>Titulo:{item.titulo}</Text>
    <Text>Genero:{item.genero}</Text>
    <Text>Precio{item.precio}</Text>
    <Text>descripcion:{item.descripcion}</Text>
    <Text>anio:{item.anio}</Text>
    <Button title='Editar' onPress={() => editar(item)} />
    <Button title='Eliminar' onPress={()=>eliminar(item.id)}/>
</View>

    )}/>
    
</View>
)
}

const styles = StyleSheet.create({})