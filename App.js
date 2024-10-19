
import { View } from 'react-native';
import styles from './src/styles/stylesApp';

import KeyBoard from './src/component/keyBoard';

export default function App() {
  return (
    <View style={styles.container}>
      <KeyBoard />
   
    </View>
  );
}

