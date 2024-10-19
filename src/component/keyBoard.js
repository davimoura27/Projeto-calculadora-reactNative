import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function KeyBoard() {
  const [resultado, setResultado] = useState('0');
  const [operador, setOperador] = useState(null);
  const [valorAnterior, setValorAnterior] = useState(null);

const result = (valor) =>{
  if (typeof valor === 'number' || valor === '.') {
  
 if (resultado === '0' ) {
   setResultado(String(valor)) 
 } else{
  setResultado(resultado + String(valor))
 }
}
}
const Operacao = (operar) => {
  setOperador(operar);
  setValorAnterior(parseFloat(resultado));
  setResultado('0')


}

  const calcularResultado = () => {
    if (operador && valorAnterior !== null) {
      const valorAtual = parseFloat(resultado);
      let res = 0
      switch (operador) {
        case '+':
          res = valorAnterior + valorAtual;
          break;
        case '-':
          res = valorAnterior - valorAtual;
          break;
        case 'x':
          res = valorAnterior * valorAtual;
          break;
        case '/':
          res = valorAnterior / valorAtual;    

    
      }
      setResultado(String(res));
      setOperador(null);
      setValorAnterior(null)
    }
  }
  const limparResultado = () => {
    setResultado('0');
    setOperador(null);
    setValorAnterior(null);
  }


  return (
    <View style={styles.container1}>
      <View style={styles.containerContador}>
        <Text style={styles.contador}>{resultado}</Text>
      </View>

      <View style={styles.teclado}>
        <View style={styles.container}>
          <Tecla text={1} onPress = {() => result(1)} />
          <Tecla text={2} onPress = {() => result(2)}/>
          <Tecla text={3} onPress = {() =>result(3)} />
          <Tecla text={'+'} onPress = {() => Operacao('+')} style={styles.buttonAmarelo} />
        </View>

        <View style={styles.container}>
          <Tecla text={4} onPress = {() => result(4)} />
          <Tecla text={5} onPress = {() => result(5)} />
          <Tecla text={6} onPress = {() => result(6)} />
          <Tecla text={'-'} onPress = {() => Operacao('-')} style={styles.buttonAmarelo} />
        </View>

        <View style={styles.container}>
          <Tecla text={7} onPress ={() =>result(7)} />
          <Tecla text={8} onPress = {()=>result(8)}/>
          <Tecla text={9} onPress = {() => result(9)}/>
          <Tecla text={'x'} onPress = {() => Operacao('x')} style={styles.buttonAmarelo} />
        </View>

        <View style={styles.container}>
          <Tecla text={'c'} onPress ={limparResultado} style={styles.buttonCinza} />
          <Tecla text={0} onPress = {() => result(0)}/>
          <Tecla text={'.'} onPress = {() => result('.') }/>
          <Tecla text={'='} onPress = {calcularResultado} style={styles.buttonAmarelo} />
        </View>
      </View>

    </View>

  )
}

export function Tecla({ text,onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonNumerico, style]}>
      <Text style={styles.numero}> {text} </Text>
    </TouchableOpacity>
  )
}

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