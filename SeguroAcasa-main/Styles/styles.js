import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center', // Cambiado a 'flex-start' para que comience desde la parte superior
    alignItems: 'center',
    padding: 16,
    paddingTop: 100,
    backgroundColor: '#f8f7ff',
},

titulo: {
    fontSize: 36, // Un tamaño grande
    fontWeight: 'bold',
    color: '#3B53F7', // Color atractivo
    textAlign: 'center',
    marginBottom: 20,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
},


subtitulo: {
    fontSize: 16,
    color: '#3B53F7',
    marginBottom: 20,
},

textInput: {
    borderWidth: 1,
    borderColor: '#3B53F7',
    padding: 10,
    paddingStart: 20,
    width: '100%',
    height: 60,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
},

image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    marginTop: -150,

},

button: {
    backgroundColor: '#3B53F7',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
},

buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
},

registerText: {
    fontSize: 16,
    color: '#000',
},

linkText: {
    color: '#3B53F7',
    fontWeight: 'bold',
    marginTop: 10,
},
});

export default styles;


