import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, ActivityIndicator, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Login from '../Screens/LoginScreen'; 
import Maps from '../Screens/maps/MapsScreen'; 
import Register from '../Screens/RegisterScreen';
import TabNavigator from './TabNavigator';
import { useAuth } from '../lib/userContext'; 

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const { session, loading } = useAuth(); 

  // Si la sesión está cargando, muestra un indicador de carga
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#3B53F7" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={session ? "Main" : "Login"}>
        {!session ? (
          <>
            {/* Pantallas de autenticación */}
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
          </>
        ) : (
          <>
            {/* Pantallas después de autenticarse */}
            <Stack.Screen 
              name="Main" 
              component={TabNavigator} 
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
            <Stack.Screen 
              name="Maps" 
              component={Maps} 
              options={{ headerShown: false }} 
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
