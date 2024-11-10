import { StyleSheet } from 'react-native';

const RegisterStyles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3366FF',
    textAlign: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#3366FF',
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#3366FF',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#3366FF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RegisterStyles;
