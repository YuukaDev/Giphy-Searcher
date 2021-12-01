import { Heading, Text, Box } from '@chakra-ui/react';
import './Header.css';
function Header() {
  return (
    <div className="wrapper">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
      >
        <Heading as="h3" className="header" size="xl">
          GIPHY
        </Heading>
        <Text fontSize="2xl">
          <a className="spacing" href="https://github.com/YuukaDev">
            GitHub
          </a>
        </Text>
        <Text fontSize="2xl">
          <a className="spacing" href="https://twitter.com/yuukasuoh">
            Twitter
          </a>
        </Text>
      </Box>
    </div>
  );
}

export default Header;
