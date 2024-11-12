import React, { useEffect } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useUserInfo } from '../lib/userContext'; // Asegúrate de que la ruta sea correcta

const Profile = () => {
  // Obtenemos los datos del usuario desde el UserContext
  const { profile } = useUserInfo();

  // Si el perfil no está disponible, podemos mostrar un texto indicando que se está cargando
  if (!profile) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="white" />
        <Text>Cargando perfil...</Text>
      </SafeAreaView>
    );
  }

  // Imagen predeterminada si el usuario no tiene foto
  const defaultProfileImage = require('../assets/images/usuario_icon.png'); // Usa tu imagen predeterminada aquí

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />
      
      {/* Fondo superior */}
      <View style={styles.backgroundContainer}>
        <Image 
          source={require('../assets/images/Fondo.jpg')} 
          style={styles.backgroundImage} 
        />
      </View>

      {/* Imagen de perfil */}
      <View style={styles.profileContainer}>
        <Image 
          source={profile.foto_usuario ? { uri: profile.foto_usuario } : defaultProfileImage} // Comprobamos si hay foto de perfil
          style={styles.profileImage}
        />
        <Text style={styles.profileText}>Perfil</Text>
      </View>

      {/* Información del usuario */}
      <View style={styles.infoContainer}>
        
        {/* Nombre del usuario */}
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{profile.nombre_usuario}</Text>
          <Text style={styles.usernameText}>@{profile.nombre_usuario}</Text>
        </View>

        {/* Información de contacto */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactHeader}>Información de contacto</Text>
          
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>Correo:</Text>
            <Text style={styles.contactInfo}>{profile.correo_usuario}</Text>
          </View>
          
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>Teléfono:</Text>
            <Text style={styles.contactInfo}>{profile.telefono}</Text>
          </View>
          
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>Dirección:</Text>
            <Text style={styles.contactInfo}>{profile.direccion}</Text>
          </View>
        </View>

        {/* Pie de página */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Miembro desde 2020</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundContainer: {
    width: '100%',
    height: 228,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -75,
  },
  profileImage: {
    height: 155,
    width: 155,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: 'black',
  },
  profileText: {
    marginTop: 10,
    fontSize: 20,
  },
  infoContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  nameContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  usernameText: {
    fontSize: 16,
    color: 'gray',
  },
  contactContainer: {
    paddingHorizontal: 10,
  },
  contactHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactLabel: {
    fontSize: 16,
    color: 'gray',
  },
  contactInfo: {
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    textAlign: 'center',
    color: 'gray',
  },
});

export default Profile;
