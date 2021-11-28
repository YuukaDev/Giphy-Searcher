import { Heading, Container } from "@chakra-ui/react";

function Header() {
  return (
    <div className="header-wrapper">
      <Container display="flex" alignContent="center" justifyContent="center" mt="5%">
        <Heading as="h1" size="xl">
          Giphy Searcher
        </Heading>
      </Container>
    </div>
  );
}

export default Header;
