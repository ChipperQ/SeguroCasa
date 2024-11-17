import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '../lib/userContext'; // Asegúrate de que la ruta a AuthProvider sea correcta

const Ajustes = ({ navigation }) => {
  const { signOut } = useAuth(); // Obtenemos la función signOut del contexto de autenticación

  // Función para manejar el cierre de sesión con confirmación
  const handleSignOut = async () => {
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro de que deseas cerrar sesión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Cerrar sesión',
          style: 'destructive',
          onPress: async () => {
            try {
              await signOut(); // Llamamos la función signOut desde el contexto
              navigation.replace('Login'); // Redirige al usuario a la pantalla de inicio de sesión
            } catch (error) {
              console.error('Error al cerrar sesión:', error);
              Alert.alert('Error', 'No se pudo cerrar sesión. Inténtalo de nuevo.');
            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header con botón de retroceso */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="keyboard-arrow-left" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Ajustes</Text>
      </View>

      {/* Opciones de ajustes */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity 
          style={styles.option} 
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Text style={styles.optionText}>Editar Perfil</Text>
          <View>
            <MaterialIcons name="edit" size={24} color="gray" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => { }}>
          <Text style={styles.optionText}>Agregar/Editar Hijos</Text>
          <View>
            <MaterialIcons name="person" size={24} color="gray" />
          </View>
        </TouchableOpacity>

        {/* Botón para cerrar sesión */}
        <TouchableOpacity style={styles.option} onPress={handleSignOut}>
          <Text style={styles.optionText}>Cerrar sesión</Text>
          <View>
            <MaterialIcons name="logout" size={24} color="gray" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
  },
};

export default Ajustes;
