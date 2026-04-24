import React from 'react';
import { Box, VStack, Flex, Text, Icon } from '@chakra-ui/react';

export const FeatureCard = ({ icon, text }) => {
  return (
    <Box
      bg="whiteAlpha.50"
      border="1px solid"
      borderColor="whiteAlpha.100"
      borderRadius="xl"
      p={6}
      transition="all 0.3s ease"
      _hover={{
        bg: 'whiteAlpha.100',
        borderColor: 'whiteAlpha.300',
        transform: 'translateY(-5px)',
      }}
    >
      <VStack align="start" spacing={4}>
        <Flex
          w="12"
          h="12"
          borderRadius="lg"
          bg="brand.900"
          color="brand.500"
          align="center"
          justify="center"
        >
          <Icon as={icon} boxSize={6} />
        </Flex>
        <Text fontSize="md" color="white" fontWeight="medium">
          {text}
        </Text>
      </VStack>
    </Box>
  );
};
