import * as React from 'react';
import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import ThemeButton from './ThemeButton';
import Logo from './Logo';
import LinkItem from './LinkItem';

const Navigation = () => {
  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      zIndex={1}
      bg={useColorModeValue('#fff', '#1A202C')}
    >
      <Flex h={20} alignItems={'center'} justifyContent={'space-around'}>
        <HStack spacing={8} alignItems={'center'}>
          <Box>
            <Logo />
          </Box>
        </HStack>

        <HStack as={'nav'} spacing={3} display={{ base: 'flex' }}>
          <LinkItem href='/'>Inicio</LinkItem>
          <LinkItem href='/tools'>Herramientas</LinkItem>
          <ThemeButton />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navigation;
