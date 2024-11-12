import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './Supabase'; // Asegúrate de que el archivo Supabase esté bien configurado

// Crear un contexto para almacenar la sesión y el perfil del usuario
const UserContext = createContext({
  session: null,
  profile: null,
});

export function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    session: null,
    profile: null,
  });

  // Obtener la sesión actual y escuchar cambios
  useEffect(() => {
    const getSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        console.log('Session retrieved:', session); // Verifica si la sesión se obtiene correctamente
        setUserInfo((prevState) => ({
          ...prevState,
          session,
        }));
      } catch (error) {
        console.error('Error getting session:', error);
      }
    };

    // Verificamos la sesión al montar el componente
    getSession();

    // Escuchar los cambios en el estado de autenticación
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('Auth state changed:', session); // Verifica si el evento está siendo disparado
      setUserInfo((prevState) => ({
        ...prevState,
        session,
        profile: null, // Limpiamos el perfil cuando cambia la sesión
      }));
    });

    // Limpiar el listener al desmontar el componente
    return () => {
      listener?.unsubscribe();
    };
  }, []);

  // Obtener el perfil del usuario
  const getProfile = async () => {
    if (!userInfo.session) return;

    try {
      // Usamos el correo electrónico del usuario autenticado para buscar el perfil
      const { data, error } = await supabase
        .from('usuarios') // Usamos la tabla 'usuarios' en lugar de 'profiles'
        .select('*') // Seleccionamos todos los campos del perfil
        .eq('correo_usuario', userInfo.session.user.email); // Filtramos por el correo electrónico del usuario

      if (error) {
        console.error('Error fetching profile:', error);
      } else if (data && data.length > 0) {
        // Si encontramos un perfil, lo almacenamos
        setUserInfo((prevState) => ({
          ...prevState,
          profile: data[0], // Guardamos el primer perfil encontrado
        }));
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  // Llamar a getProfile cuando la sesión cambie
  useEffect(() => {
    if (userInfo.session) {
      getProfile();
    }
  }, [userInfo.session]);

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}

// Hook reutilizable para acceder al contexto
export function useUserInfo() {
  return useContext(UserContext);
}
