import NextLink from 'next/link';
import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react';

import Logo from './Logo';

const LinkItem = ({ href, _target, children, ...props }: any) => {
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
    <Flex h={20} alignItems={'center'} justifyContent={'space-around'}>
      <HStack spacing={8} alignItems={'center'}>
        <Box>
          <Logo />
        </Box>
      </HStack>

      <HStack as={'nav'} spacing={6} display={{ base: 'flex' }}>
        <LinkItem href='/'>Inicio</LinkItem>
        {/* <LinkItem href='/blog'>Blog</LinkItem> */}
      </HStack>
    </Flex>
  );
};

export default Navigation;
