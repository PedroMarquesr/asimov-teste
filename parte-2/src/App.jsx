import React from 'react';
import { Box } from '@chakra-ui/react';
import { BackgroundElements } from './components/BackgroundElements/BackgroundElements';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';

export default function App() {
  return (
    <Box position="relative" minH="100vh" overflow="hidden" bg="bg.base">
      <BackgroundElements />
      <Header />
      <Hero />
    </Box>
  );
}
