import NextLink from 'next/link';
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react';
import type { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <Box pt={40}>
      <Container>
        <Heading as='h1'>Oh no!</Heading>
        <Box pt={5}>
          <Text>Por alguna razó te has perdido... Te invito a volver </Text>

          <NextLink href='/'>
            <Button colorScheme='black' variant='link'>
              al Inicio.
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
