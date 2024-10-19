import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#000'

  },
  teclado: {
    justifyContent: 'space-around',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    gap: 10

  },
  buttonNumerico: {

    backgroundColor: '#333',

    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',


  },
  numero: {
    color: "#fff",

    fontSize: 30,
    textAlign: 'center',
  },
  buttonAmarelo: {
    backgroundColor: '#f1c40f'
  },
  buttonCinza: {
    backgroundColor: '#a5a5a5'
  },
  containerContador: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: 20,
    marginBottom: 20,
  },
  contador: {

    color: '#fff',
    fontSize: 80,


  }

});

export default styles