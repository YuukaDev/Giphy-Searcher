import { ChakraProvider } from '@chakra-ui/react';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <ChakraProvider>
      <Navigation />
    </ChakraProvider>
  );
}

export default App;
