import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Login from '../Screens/LoginScreen'; 
import Maps from '../Screens/maps/MapsScreen'; 
import Register from '../Screens/RegisterScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

// Aquí se van agregando las screens que vayan creando, o cualquier cosa me dicen
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Main" 
          component={TabNavigator} 
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#3B53F7" />
              </TouchableOpacity>
            ),
            headerTitle: '', // No mostrar título
            headerShadowVisible: false, // Esconde el header por cada pantalla
            headerStyle: { backgroundColor: '#f8f7ff' }, 
          })} 
        />
                <Stack.Screen 
          name="Settings" 
          component={TabNavigator} 
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#3B53F7" />
              </TouchableOpacity>
            ),
            headerTitle: '', // No mostrar título
            headerShadowVisible: false, // Esconde el header por cada pantalla
            headerStyle: { backgroundColor: '#f8f7ff' }, 
          })} 
        />
        <Stack.Screen 
          name="Maps" 
          component={Maps} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#3B53F7" />
              </TouchableOpacity>
            ),
            headerTitle: '', // No mostrar título
            headerShadowVisible: false, // Esconde el header por cada pantalla
            headerStyle: { backgroundColor: '#f8f7ff' }, 
          })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

