import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import KeyBoard from './src/component/keyBoard';

export default function App() {
  return (
    <View style={styles.container}>
      <KeyBoard />
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNumerico: {

    backgroundColor: 'blue',
    padding: 10,
    width: 90,
    height: 40,
    textAlign: 'center'
  },
  numero: {
    color: "red",
    flex: 1,
    textAlign: 'center'
  }
});
