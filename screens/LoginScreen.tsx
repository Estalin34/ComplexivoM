import { Alert, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';

export default function LoginScreen({navigation}:any) {
    const [email, setemail] = useState("");
    const [contrasenia, setcontrasenia] = useState("");

    function login(){
        signInWithEmailAndPassword(auth, email, contrasenia)
        .then((userCredential)=>{
            const user=userCredential.user;
            navigation.navigate("Drawer");
        })
        .catch((error)=>{
            Alert.alert("Error","Correo o contrasena incorrecta")
            console.log(error);
            
        })
    }
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Iniciar Sesión</Text>

    <TextInput
      placeholder='Correo Electrónico'
      onChangeText={(texto) => setemail(texto)}
      value={email}
      keyboardType='email-address'
      autoCapitalize='none'
      style={styles.input}
      placeholderTextColor="#888"
    />

    <TextInput
      placeholder='Contraseña'
      onChangeText={(texto) => setcontrasenia(texto)}
      value={contrasenia}
      secureTextEntry={true}
      style={styles.input}
      placeholderTextColor="#888"
    />

    <TouchableOpacity style={styles.button} onPress={login}>
      <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  backgroundColor: '#f5f7fa',
},
title: {
  fontSize: 28,
  fontWeight: '600',
  marginBottom: 30,
  color: '#333',
},
input: {
  width: '100%',
  padding: 15,
  marginBottom: 20,
  backgroundColor: '#fff',
  borderRadius: 8,
  borderColor: '#ccc',
  borderWidth: 1,
  fontSize: 16,
},
button: {
  backgroundColor: '#0d6efd',
  paddingVertical: 15,
  paddingHorizontal: 40,
  borderRadius: 8,
  width: '100%',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 5,
},
buttonText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},
});