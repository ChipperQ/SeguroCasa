import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Modal } from "react-native";
import homeStyles from "../Styles/homeStyles"; // Asegúrate de que la ruta sea correcta

const Home = () => {
  // Datos de ejemplo para la lista
  const [data, setData] = useState([
    { id: "1", name: "Furgón 1", patente: "ABC123", activo: true },
    { id: "2", name: "Furgón 2", patente: "DEF456", activo: false },
    { id: "3", name: "Furgón 3", patente: "GHI789", activo: true },
    { id: "4", name: "Furgón 4", patente: "JKL012", activo: false },
    { id: "5", name: "Furgón 5", patente: "MNO345", activo: true },
  ]);

  const [mostrarNotificacion, setMostrarNotificacion] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMostrarNotificacion(false);
    }, 3000);
  }, []);

  // Función para renderizar cada elemento
  const renderItem = ({ item }) => (
    <View style={homeStyles.container}>
      <View style={homeStyles.item}>
        <Text style={homeStyles.itemText}>{item.name}</Text>
        <Text style={homeStyles.patente}>{item.patente}</Text>
        <View
          style={[
            homeStyles.estado,
            item.activo ? homeStyles.activo : homeStyles.inactivo,
          ]}
        />
      </View>
    </View>
  );

  return (
    <View style={homeStyles.container}>
      <Modal
        visible={mostrarNotificacion}
        transparent={true}
        animationType="fade"
      >
        <View style={homeStyles.notificacion}>
          <Text style={homeStyles.titulo}>Bienvenido </Text>
          <Text style={homeStyles.titulo}>a </Text>
          <Text style={homeStyles.titulo}>Seguro a casa </Text>
        </View>
      </Modal>
      <Text style={homeStyles.title}>Lista de Furgones</Text>
      <View style={homeStyles.subtitulo}>
        <Text style={homeStyles.activoTexto}>Activo: </Text>
        <View style={[homeStyles.estado, homeStyles.activo]} />
        <Text style={homeStyles.inactivoTexto}> | Inactivo: </Text>
        <View style={[homeStyles.estado, homeStyles.inactivo]} />
      </View>
      <FlatList
        data={data} // Lista de datos
        keyExtractor={(item) => item.id} // Clave única por cada item
        renderItem={renderItem} // Renderizar cada item
      />
    </View>
  );
};

export default Home;
