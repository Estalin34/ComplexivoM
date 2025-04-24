import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


export default function WelcomeScreen({navigation}:any) {
return (
    <View style={styles.container}>
        <Text style={styles.title}>¡Bienvenidos!</Text>
        <Text style={styles.subtitle}>Gracias por usar nuestra app</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => navigation.navigate('Register')}>
        <Text style={[styles.buttonText, styles.secondaryText]}>Registrarse</Text>
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
    backgroundColor: '#f9f9f9',
    },
    title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    },
    subtitle: {
    fontSize: 18,
    marginBottom: 40,
    color: '#666',
    },
    button: {
    backgroundColor: '#0d6efd',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    },
    buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    },
    secondaryButton: {
    backgroundColor: '#e0e0e0',
    },
    secondaryText: {
    color: '#333',
    },
})