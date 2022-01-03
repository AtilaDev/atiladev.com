import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

const blueRing = {
  _focus: {
    ring: 2,
    ringColor: 'transparent',
  },
};

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        primary: (props: Dict<any>) => ({
          rounded: '5px',
          ...blueRing,
          color: mode('white', 'gray.800')(props),
          backgroundColor: mode('gray.500', 'gray.200')(props),

          _hover: {
            backgroundColor: mode('gray.600', 'gray.600')(props),
          },
          _active: {
            backgroundColor: mode('gray.700', 'gray.400')(props),
          },
        }),
      },
    },
  },
});

export default theme;
