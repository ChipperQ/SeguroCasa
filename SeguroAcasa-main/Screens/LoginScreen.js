import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../Styles/styles'; 

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Image source={require('../assets/images/usuario_icon.png')} style={styles.image}></Image>


      <Text style={styles.titulo}>Login</Text>
      <StatusBar style="dark" />

      <TextInput
        placeholder="Correo electrónico"
        style={styles.textInput}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.textInput}
        secureTextEntry
      />

      <Text>No tienes cuenta?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}> Registrarse </Text>

        </TouchableOpacity>
      </Text>

      {/* Botón que navega a la pantalla de Home */}
      <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Main')}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>

    </View>
  );
};

export default Login;
