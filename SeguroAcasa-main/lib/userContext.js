import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supabase";

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

  useEffect(() => {
    // Obtener la sesión actual
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserInfo({ ...userInfo, session });
    });

    // Escuchar cambios en el estado de autenticación
    supabase.auth.onAuthStateChange((_event, session) => {
      setUserInfo({ session, profile: null });
    });
  }, []);

  const getProfile = async () => {
    if (!userInfo.session) return;
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userInfo.session.user.id);

    if (error) {
      console.log(error);
    } else {
      setUserInfo({ ...userInfo, profile: data[0] });
    }
  };

  useEffect(() => {
    getProfile();
  }, [userInfo.session]);

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}

// Hook reutilizable para acceder al contexto
export function useUserInfo() {
  return useContext(UserContext);
}
