import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import RegisterStyle from "../Styles/registerStyles";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleRegister = () => {
        // Aquí va la lógica de registro
    };

    return (
        <View style={RegisterStyle.container}>
            <Text style={RegisterStyle.title}>Registro</Text>

            <Text style={RegisterStyle.label}>Ingrese su Nombre</Text>
            <TextInput
                style={RegisterStyle.textInput}
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
            />

            <Text style={RegisterStyle.label}>Ingrese su Email</Text>
            <TextInput
                style={RegisterStyle.textInput}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <Text style={RegisterStyle.label}>Ingrese su Número de Teléfono</Text>
            <TextInput
                style={RegisterStyle.textInput}
                placeholder="Número de Teléfono"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
            />

            <Text style={RegisterStyle.label}>Ingrese su Contraseña</Text>
            <TextInput
                style={RegisterStyle.textInput}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Text style={RegisterStyle.label}>Confirme su Contraseña</Text>
            <TextInput
                style={RegisterStyle.textInput}
                placeholder="Confirmar Contraseña"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />

            <TouchableOpacity style={RegisterStyle.button} onPress={handleRegister}>
                <Text style={RegisterStyle.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Register;



