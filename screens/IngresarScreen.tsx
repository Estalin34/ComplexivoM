import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../config/Config';
import { ref, set } from 'firebase/database';

export default function IngresarScreen({navigation}:any) {
const [id, setid] = useState("");
const [titulo, settitulo] = useState("");
const [genero, setgenero] = useState("");
const [precio, setprecio] = useState("");
const [lazamiento, setlazamiento] = useState("");
const [anio, setanio] = useState("");

useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
        if(user){
            const uid=user.uid;
            setid(uid);

        }
    })
    
}, [])

function guardar(){
if(id && titulo && genero && precio &&lazamiento && anio)
    set(ref(db,'usuarios/'+id+'/peliculas/'+Date.now()),{
titulo:titulo,
genero:genero,
precio:parseInt(precio),
lazamiento:lazamiento,
anio:anio
})
.then(()=>{
    Alert.alert("Exito","Datos se guardaron correctamente");
    settitulo('');
    setgenero('');
    setprecio('');
    setlazamiento('');
    setanio('');
})
.catch((error)=>{
    Alert.alert("Error","No se pudo guardar");
    console.log(error);
        });
}
return (
<View style={styles.container}>
    <Text style={styles.titulo}>Ingresar Películas</Text>
    <TextInput
    style={styles.input}
    placeholder='Título'
    value={titulo}
    onChangeText={settitulo}
    />
    <TextInput
    style={styles.input}
    placeholder='Género'
    value={genero}
    onChangeText={setgenero}
    />
    <TextInput
    style={styles.input}
    placeholder='Precio'
    value={precio}
    onChangeText={setprecio}
    keyboardType='numeric'
    />
    <TextInput
    style={styles.input}
    placeholder='Lanzamiento'
    value={lazamiento}
    onChangeText={setlazamiento}
    />
    <TextInput
    style={styles.input}
    placeholder='Año'
    value={anio}
    onChangeText={setanio}
    />
    <TouchableOpacity style={styles.boton} onPress={guardar}>
    <Text style={styles.textoBoton}>Guardar</Text>
    </TouchableOpacity>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
justifyContent: 'center',
backgroundColor: '#f2f2f2',
},
titulo: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
textAlign: 'center',
},
input: {
backgroundColor: 'white',
padding: 12,
borderRadius: 8,
marginBottom: 10,
borderColor: '#ccc',
borderWidth: 1,
},
boton: {
backgroundColor: '#007bff',
padding: 15,
borderRadius: 8,
alignItems: 'center',
marginTop: 10,
},
textoBoton: {
color: 'white',
fontSize: 16,
fontWeight: 'bold',
}
});