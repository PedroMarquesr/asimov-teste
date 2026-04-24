import React from 'react';
import {
  Container,
  SimpleGrid,
  VStack,
  Badge,
  Heading,
  Text,
  Flex,
  Button
} from '@chakra-ui/react';
import { FiClock, FiTerminal, FiUsers, FiAward } from 'react-icons/fi';
import { FeatureCard } from '../FeatureCard/FeatureCard';

export const Hero = () => {
  return (
    <Container maxW="container.xl" pt={{ base: '120px', md: '180px' }} pb="80px" position="relative" zIndex={10}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
        
        <VStack align="flex-start" spacing={6}>
          <Badge
            colorScheme="orange"
            variant="subtle"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="sm"
          >
            Novo Curso
          </Badge>

          <Heading
            as="h1"
            fontFamily="Syne"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="800"
            lineHeight="1.1"
            color="white"
          >
            Aprenda Python do zero e construa projetos reais com{' '}
            <Text as="span" color="brand.500">IA</Text>
          </Heading>

          <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.400" maxW="lg">
            O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação
          </Text>

          <Flex direction={{ base: 'column', sm: 'row' }} gap={4} w="full" pt={4}>
            <Button
              size="lg"
              bg="brand.500"
              color="white"
              _hover={{ bg: 'brand.600', transform: 'translateY(-2px)' }}
              w={{ base: 'full', sm: 'auto' }}
            >
              Quero começar agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              colorScheme="whiteAlpha"
              color="white"
              _hover={{ bg: 'whiteAlpha.100', transform: 'translateY(-2px)' }}
              w={{ base: 'full', sm: 'auto' }}
            >
              Ver o que vou aprender
            </Button>
          </Flex>
        </VStack>

        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6}>
          <FeatureCard icon={FiClock} text="+40 horas de conteúdo direto ao ponto" />
          <FeatureCard icon={FiTerminal} text="Projetos com Python + IA desde o módulo 1" />
          <FeatureCard icon={FiUsers} text="Suporte da comunidade com +20.000 alunos" />
          <FeatureCard icon={FiAward} text="Certificado reconhecido pelo mercado" />
        </SimpleGrid>

      </SimpleGrid>
    </Container>
  );
};
