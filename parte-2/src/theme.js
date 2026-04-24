import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Syne', sans-serif`,
    body: `'Outfit', sans-serif`,
    mono: `'Fira Code', monospace`,
  },
  colors: {
    brand: {
      50: '#fff4eb',
      100: '#ffdcc2',
      200: '#ffc399',
      300: '#ffaa70',
      400: '#ff9147',
      500: '#ff781e',
      600: '#FF5A00',
      700: '#cc4800',
      800: '#993600',
      900: '#662400',
    },
    bg: {
      base: '#060608',
      card: 'rgba(18, 18, 24, 0.6)',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'bg.base',
        color: 'white',
        lineHeight: '1.5',
      },
    },
  },
});
