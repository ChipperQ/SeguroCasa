import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Login from '../Screens/LoginScreen'; 
import Maps from '../Screens/maps/MapsScreen'; 
import Register from '../Screens/RegisterScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const [isAuth, setIsAuth] = useState(false); // Cambia a true o false para simular el estado de autenticación

  return (
    <NavigationContainer>
      {isAuth ? (
        // Pila de navegación principal si el usuario está autenticado
        <Stack.Navigator>
          <Stack.Screen 
            name="Main" 
            component={TabNavigator} 
            options={{ headerShown: false }} // Ocultamos el header para TabNavigator
          />
          {/* Puedes agregar otras pantallas que quieras mostrar aparte de TabNavigator */}
          <Stack.Screen 
            name="Maps" 
            component={Maps} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      ) : (
        // Pila de autenticación si el usuario NO está autenticado
        <Stack.Navigator>
          <Stack.Screen 
            name="Login" 
            component={Login} 
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
              headerTitle: '',
              headerShadowVisible: false,
              headerStyle: { backgroundColor: '#f8f7ff' },
            })} 
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainNavigator;