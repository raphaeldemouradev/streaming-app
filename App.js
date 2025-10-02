import { SafeAreaView } from 'react-native-safe-area-context';
import { Rotas } from './src/rotas';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView />
      <Rotas />
    </NavigationContainer>
  );
}


/*
setItem.propTypes = {
  
}
*/