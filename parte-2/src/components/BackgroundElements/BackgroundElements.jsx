import React from 'react';
import { Box } from '@chakra-ui/react';

export const BackgroundElements = () => {
  return (
    <>
      <Box
        position="absolute"
        top="-10%"
        right="-10%"
        boxSize={{ base: '300px', md: '500px' }}
        bg="brand.500"
        filter="blur(150px)"
        opacity="0.15"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-10%"
        boxSize={{ base: '300px', md: '500px' }}
        bg="blue.500"
        filter="blur(150px)"
        opacity="0.1"
        zIndex={0}
      />
    </>
  );
};
