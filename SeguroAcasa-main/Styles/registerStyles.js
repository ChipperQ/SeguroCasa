import { StyleSheet } from 'react-native';

const RegisterStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f8f7ff',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#3B53F7',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#3B53F7',
        marginBottom: 5, 
        alignSelf: 'flex-start', 
        marginLeft: 10, 
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#3B53F7',
        padding: 10,
        width: '100%',
        height: 50,
        marginTop: 10,
        marginBottom: 15, 
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#3B53F7',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RegisterStyle;


