import * as React from 'react';
import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import ThemeButton from './ThemeButton';
import Logo from './Logo';
import LinkItem from './LinkItem';
import LanguageButton from './LanguageButton';
import { useTranslation } from 'next-i18next';

export default function Navigation() {
  const { t } = useTranslation();

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
          <LinkItem href='/'>{t('navigation.home')}</LinkItem>
          <LinkItem href='/tools'>{t('navigation.tools')}</LinkItem>
          <ThemeButton />
          <LanguageButton />
        </HStack>
      </Flex>
    </Box>
  );
}
