import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header/Header';
import Search from './components/Input/Search';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Search />
    </ChakraProvider>
  );
}

export default App;
