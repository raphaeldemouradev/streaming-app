import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Rotas } from './src/rotas';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Rotas />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


/*
setItem.propTypes = {
  
}
*/