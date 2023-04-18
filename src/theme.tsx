import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  colors: {
    custom: {
      blue: '#142B6F',
      lightblue: '#6db5ca',
      gray: '#E1DEE6',
      yellow: '#FFD601',
    },
  },
  components: {
    Button: {
      variants: {
        transparent: {
          _hover: { background: 'initial' },
          _focus: { background: 'initial' },
        },
      },
    },
    Container: {
      variants: {
        base: {
          maxW: 1000,
        },
        content: {
          maxW: 1000,
          h: '100vh',
          bg: 'white',
        },
      },
    },
  },
});

export default theme;
