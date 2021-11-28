import { Heading, Container } from '@chakra-ui/react';
import './Header.css';
function Header() {
  return (
    <div className="wrapper">
      <Container
        display="flex"
        alignContent="center"
        justifyContent="center"
      >
        <Heading mt="50px" as="h1" size="xl">
          Giphy Searcher
        </Heading>
      </Container>
    </div>
  );
}

export default Header;
