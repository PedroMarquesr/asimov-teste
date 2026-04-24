import React from 'react';
import { Box, Container, Flex, Heading, HStack, Text, Button } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box
      as="header"
      position="fixed"
      w="full"
      zIndex={50}
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
      bg="rgba(6, 6, 8, 0.8)"
      backdropFilter="blur(10px)"
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          <Heading as="a" href="#" fontFamily="Syne" fontSize="xl" color="white">
            Asimov Academy.
          </Heading>
          
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            <Text as="a" href="#cursos" color="gray.400" _hover={{ color: 'white' }}>Cursos</Text>
            <Text as="a" href="#comunidade" color="gray.400" _hover={{ color: 'white' }}>Comunidade</Text>
            <Button variant="outline" colorScheme="whiteAlpha" size="sm">
              Entrar na plataforma
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
