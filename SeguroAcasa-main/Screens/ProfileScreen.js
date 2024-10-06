import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Profile = () => {
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
          source={require('../assets/images/usuario_icon.png')} 
          style={styles.profileImage}
        />
        <Text style={styles.profileText}>Perfil</Text>
      </View>

      {/* Información del usuario */}
      <View style={styles.infoContainer}>
        
        {/* Nombre del usuario */}
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Juan Pérez</Text>
          <Text style={styles.usernameText}>@juanperez</Text>
        </View>

        {/* Información de contacto */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactHeader}>Información de contacto</Text>
          
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>Correo:</Text>
            <Text style={styles.contactInfo}>juan.perez@example.com</Text>
          </View>
          
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>Teléfono:</Text>
            <Text style={styles.contactInfo}>+56 123 456 789</Text>
          </View>
          
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>Dirección:</Text>
            <Text style={styles.contactInfo}>Calle Falsa 123, Ciudad, País</Text>
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
