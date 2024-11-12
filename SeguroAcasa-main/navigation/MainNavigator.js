import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Login from '../Screens/LoginScreen'; 
import Maps from '../Screens/maps/MapsScreen'; 
import Register from '../Screens/RegisterScreen';
import TabNavigator from './TabNavigator';
import { useUserInfo } from '../lib/userContext'; // Asegúrate de importar el hook para acceder al contexto

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const { session } = useUserInfo(); // Obtén la sesión desde el contexto
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Alerta si el estado de la sesión cambia
  useEffect(() => {
    if (session) {
      setIsAuthenticated(true); // Usuario autenticado
    } else {
      setIsAuthenticated(false); // Usuario no autenticado
    }
  }, [session]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "Main" : "Login"}>
        {/* Si no está autenticado, muestra la pantalla de Login */}
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        {/* Si está autenticado, muestra el TabNavigator */}
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
