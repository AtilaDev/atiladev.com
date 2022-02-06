import * as React from 'react';
import {
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { ExternalLink } from '.';

const Footer: React.FC = () => {
  return (
    <VStack pb={8} spacing={8} as='footer' alignItems='flex-start'>
      <Text
        lineHeight='175%'
        as='h2'
        fontSize='md'
        // pt={10}
        alignSelf={'center'}
      >
        Éste sitio fue desarrollado con{' '}
        <ExternalLink href='https://nextjs.org/'>Next.js</ExternalLink>,{' '}
        <ExternalLink href='https://chakra-ui.com/'>Chakra</ExternalLink>,{' '}
        <ExternalLink href='https://react-icons.github.io/react-icons/'>
          React Icons
        </ExternalLink>{' '}
        y desplegado en{' '}
        <ExternalLink href='https://vercel.com/'>Vercel</ExternalLink>.
      </Text>
      <Divider />

      <Text
        color={useColorModeValue('gray.600', 'gray.400')}
        alignSelf={'center'}
      >
        &copy;&nbsp; 2017-
        {`${new Date().getFullYear()} Leandro Favre · Todos los derechos reservados.`}
      </Text>
    </VStack>
  );
};

export default Footer;
