// LoadingScreen.js
import React from 'react';
import { Box, Spinner, Text } from '@chakra-ui/react';

export const Loader = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Spinner size="xl" color="blue.500" thickness="4px" />
      <Text mt={4} fontSize="lg" color="gray.600">
        Loading...
      </Text>
    </Box>
  );
};

export default Loader;
