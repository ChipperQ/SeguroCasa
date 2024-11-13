import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './Supabase'; // Asegúrate de que el archivo Supabase esté bien configurado

// Crear un contexto para almacenar la sesión y el perfil del usuario
const AuthContext = createContext({
  session: null,
  profile: null,
  loading: true,
  isAdmin: false,
});

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Obtener la sesión actual y escuchar cambios
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);

        if (session) {
          // Si hay sesión, obtener el perfil del usuario
          const { data, error } = await supabase
            .from('usuarios')  // Cambiar a la tabla correcta
            .select('*')
            .eq('correo_usuario', session.user.email)
            .single();

          if (error) {
            console.error('Error fetching profile:', error);
          } else {
            setProfile(data);
          }
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching session:', error);
        setLoading(false);
      }
    };

    fetchSession();

    // Escuchar los cambios en el estado de autenticación
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setProfile(null); // Limpiar perfil cuando cambia la sesión
      setLoading(true);  // Reiniciar estado de carga
      if (session) {
        fetchSession();  // Reobtenemos el perfil si hay sesión
      } else {
        setLoading(false);
      }
    });

    // Limpiar el listener al desmontar el componente
    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, profile, loading, isAdmin: profile?.group === 'ADMIN' }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook reutilizable para acceder al contexto
export const useAuth = () => useContext(AuthContext);
