import React, { useEffect } from 'react';
import { View, Text, Image, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../lib/userContext'; // Asegúrate de importar correctamente el nuevo contexto
import { Ionicons } from '@expo/vector-icons'; // Para los íconos de los campos

const Profile = () => {
  const { profile, loading } = useAuth(); 

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="white" />
        <Text>Cargando perfil...</Text>
      </SafeAreaView>
    );
  }

  if (!profile) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="white" />
        <Text>No se ha encontrado el perfil.</Text>
      </SafeAreaView>
    );
  }

  const defaultProfileImage = require('../assets/images/usuario_icon.png');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />
      
      {/* Fondo superior usando la imagen existente */}
      <View style={styles.backgroundContainer}>
        <Image 
          source={require('../assets/images/Fondo.jpg')} 
          style={styles.backgroundImage} 
        />
      </View>

      {/* Imagen de perfil con icono de cámara */}
      <View style={styles.profileContainer}>
        <Image 
          source={profile.foto_usuario ? { uri: profile.foto_usuario } : defaultProfileImage}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraIconContainer}>
          <Ionicons name="camera" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Información del usuario */}
      <View style={styles.infoContainer}>
        
        {/* Campo de usuario */}
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#8A2BE2" />
          <TextInput style={styles.input} placeholder="Username" value={profile.nombre_usuario} />
        </View>

        {/* Fecha de nacimiento */}
        <View style={styles.inputContainer}>
          <Ionicons name="calendar-outline" size={20} color="#8A2BE2" />
          <TextInput style={styles.input} placeholder="Date of Birth" value={profile.fecha_nacimiento} />
        </View>

        {/* Género */}
        <View style={styles.inputContainer}>
          <Ionicons name="male-female-outline" size={20} color="#8A2BE2" />
          <TextInput style={styles.input} placeholder="Gender" value={profile.genero} />
        </View>

        {/* Correo o teléfono */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#8A2BE2" />
          <TextInput style={styles.input} placeholder="Email or Phone number" value={profile.correo_usuario} />
        </View>

        {/* Contraseña */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#8A2BE2" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        </View>
      </View>

      {/* Redes sociales */}
      <View style={styles.socialMediaContainer}>
        <Ionicons name="logo-google" size={24} color="#8A2BE2" />
        <Ionicons name="logo-facebook" size={24} color="#8A2BE2" />
        <Ionicons name="logo-twitter" size={24} color="#8A2BE2" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  backgroundContainer: {
    width: '100%',
    height: 200,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  profileContainer: {
    position: 'absolute',
    top: 100,
    width: '100%',
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#8A2BE2',
    borderRadius: 20,
    padding: 5,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 160, // Separación para que los campos se ubiquen debajo de la foto de perfil
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#8A2BE2',
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 60,
    paddingVertical: 20,
  },
});

export default Profile;
