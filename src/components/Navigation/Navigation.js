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
        justifyContent="right"
        alignItems="center"
        p="30px 10%"
        bg="#24252a"
      >
        <p className="logo">
          <Header />
        </p>
        <nav>
          <ul class="nav__links">
            <li>
              <Search />
            </li>
            <li>
              <button className="cta" type="submit">
                Submit
              </button>
            </li>
          </ul>
        </nav>
      </Box>
    </>
  );
}

export default Navigation;
