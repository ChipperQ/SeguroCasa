import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import mapStyles from '../../Styles/mapsStyles/mapsStyles';
import { supabase } from '../../lib/Supabase';

const Maps = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para obtener usuarios de Supabase
  const fetchUsuarios = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('usuarios')
      .select('rut_usuario, correo_usuario, nombre_usuario, direccion, telefono, foto_usuario');

    if (error) {
      console.error('Error al obtener usuarios:', error.message);
    } else {
      setUsuarios(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  if (loading) {
    return <Text>Cargando usuarios...</Text>;
  }

  return (
    <View style={mapStyles.container}>
      <Text style={styles.title}>Usuarios Existentes</Text>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.rut_usuario}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>RUT: {item.rut_usuario}</Text>
            <Text>Correo: {item.correo_usuario}</Text>
            <Text>Nombre: {item.nombre_usuario}</Text>
            <Text>Dirección: {item.direccion}</Text>
            <Text>Teléfono: {item.telefono}</Text>
            {/* Agrega más campos si los necesitas */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default Maps;
