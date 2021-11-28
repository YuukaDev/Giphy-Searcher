import { ChakraProvider, theme } from "@chakra-ui/react";

// Components
import Header from "./components/Header/Header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
  </ChakraProvider>
);
