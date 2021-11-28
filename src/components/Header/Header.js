import { Heading, Container, Box } from '@chakra-ui/react';
import './Header.css';
function Header() {
  return (
    <div className="wrapper">
      <Box display="block">
        <Heading as="h1" size="xl">
          Giphy Searcher
        </Heading>
        <Heading size="10px">GitHub</Heading>
      </Box>
    </div>
  );
}

export default Header;
