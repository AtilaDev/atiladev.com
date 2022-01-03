import * as React from 'react';
import NextLink from 'next/link';
import { Box, Flex, HStack, Link, useColorModeValue } from '@chakra-ui/react';
import ThemeButton from './ThemeButton';
import Logo from './Logo';
import { LinkItemProps } from '../interfaces';

const LinkItem: React.FC<LinkItemProps> = ({
  href,
  _target,
  children,
  ...props
}) => {
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        _target={_target}
        {...props}
        _hover={{
          textDecoration: 'none',
        }}
        _focus={{
          borderColor: 'transparent',
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

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

        <HStack as={'nav'} spacing={6} display={{ base: 'flex' }}>
          <LinkItem href='/'>Inicio</LinkItem>
          <ThemeButton />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navigation;
