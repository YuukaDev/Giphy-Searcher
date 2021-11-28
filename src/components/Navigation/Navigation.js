import React from 'react';
import './Navigation.css';
import { Box } from '@chakra-ui/react';

import Header from '../Header/Header';
import Search from '../Input/Search';

function Navigation() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p="30px 10%"
        bg="#24252a"
      >
        <Header />
        <Search />
        <button className="cta" type="submit">
          Submit
        </button>
      </Box>
    </>
  );
}

export default Navigation;
