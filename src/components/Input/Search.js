import React from 'react';
import { Input, Stack } from '@chakra-ui/react';

function Search() {
  return (
    <div className="form-container">
      <Stack spacing={3}>
        <Input p="20px"  placeholder="Enter name" w="100%" />
      </Stack>
    </div>
  );
}

export default Search;
