import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';

export default function RegisterScreem({navigation}:any) { 
const [email, setemail] = useState("");
const [constrasenia, setconstrasenia] = useState("");
const [nombre, setnombre] = useState("");
const [apellido, setapellido] = useState("");



function register(){
if(!nombre ||!apellido ||!email ||!constrasenia){
    return Alert.alert("Campos debe esatr completos ")
}
createUserWithEmailAndPassword(auth, email, constrasenia)
.then((userCredential)=>{
const user =userCredential.user;
navigation.navigate("Login");
})
.catch((error)=>{
Alert.alert("Error",error.message);
console.log(error);

});

}






return (
<View style={styles.container}>
<Text style={styles.title}>Registrarte</Text>

<TextInput
    placeholder='Nombre'
    onChangeText={setnombre}
    value={nombre}
    style={styles.input}
    placeholderTextColor="#888"
/>

<TextInput
    placeholder='Apellido'
    onChangeText={setapellido}
    value={apellido}
    style={styles.input}
    placeholderTextColor="#888"
/>

<TextInput
    placeholder='Correo Electrónico'
    onChangeText={setemail}
    value={email}
    keyboardType='email-address'
    autoCapitalize='none'
    style={styles.input}
    placeholderTextColor="#888"
/>

<TextInput
    placeholder='Contraseña'
    onChangeText={setconstrasenia}
    value={constrasenia}
    secureTextEntry={true}
    style={styles.input}
    placeholderTextColor="#888"
/>

<TouchableOpacity style={styles.button} onPress={register}>
    <Text style={styles.buttonText}>Registrarte</Text>
</TouchableOpacity>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f7f7f7',
justifyContent: 'center',
alignItems: 'center',
padding: 20,
},
title: {
fontSize: 28,
fontWeight: 'bold',
marginBottom: 30,
color: '#333',
},
input: {
width: '100%',
padding: 15,
marginBottom: 15,
backgroundColor: '#fff',
borderRadius: 8,
borderColor: '#ccc',
borderWidth: 1,
fontSize: 16,
},
button: {
backgroundColor: '#198754', // estilo tipo Bootstrap btn-success
paddingVertical: 15,
paddingHorizontal: 40,
borderRadius: 8,
width: '100%',
alignItems: 'center',
marginTop: 10,
},
buttonText: {
color: '#fff',
fontSize: 18,
fontWeight: '600',
},
});