import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ref, update } from 'firebase/database';
import { db } from '../config/Config';

export default function EditarScreen({ route, navigation }: any) {
  const { id, titulo, genero, precio, descripcion, anio,uid  } = route.params;
  const [tituloEditar, setTituloEditar] = useState(titulo);
  const [generoEditar, setGeneroEditar] = useState(genero);
  const [descripcionEditar, setDescripcionEditar] = useState(descripcion);
  const [anioEditar, setAnioEditar] = useState(anio);

  const actualizar = () => {
    const peliculaRef = ref(db, `usuarios/${uid}/peliculas/${id}`);
    update(peliculaRef, {
      titulo: tituloEditar,
      genero: generoEditar,
      descripcion: descripcionEditar,
      anio: anioEditar,
    })
      .then(() => {
        Alert.alert("Éxito", "Película actualizada correctamente");
        navigation.navigate("DetallesIngreso");
      })
      .catch((error) => {
        console.log("Error al editar", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar Películas</Text>

      <TextInput
        value={tituloEditar}
        onChangeText={setTituloEditar}
        placeholder='Título'
        style={styles.input}
      />
      <TextInput
        value={generoEditar}
        onChangeText={setGeneroEditar}
        placeholder='Género'
        style={styles.input}
      />
      <TextInput
        value={descripcionEditar}
        onChangeText={setDescripcionEditar}
        placeholder='Lanzamiento'
        style={styles.input}
      />
      <TextInput
        value={anioEditar}
        onChangeText={setAnioEditar}
        placeholder='Año'
        style={styles.input}
      />

      <TouchableOpacity style={styles.boton} onPress={actualizar}>
        <Text style={styles.textoBoton}>Actualizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  boton: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
