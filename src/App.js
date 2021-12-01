import { ChakraProvider } from '@chakra-ui/react';

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App() {
  return (
    <ChakraProvider>
      <Navigation />
      <Header />
      <Content />
    </ChakraProvider>
  );
}

export default App;
