import * as React from 'react';
import { Text, Box, Stack, VStack, Heading } from '@chakra-ui/react';
import { ExternalLink } from '.';
import { useTranslation } from 'next-i18next';

const Iam: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box pt={40}>
      <Stack
        alignItems='center'
        spacing={12}
        w='full'
        direction={{ base: 'column-reverse', md: 'row' }}
        as='section'
      >
        <VStack spacing={3} alignItems='flex-start' w='full'>
          <Stack
            spacing={3}
            w='full'
            direction={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            alignItems='center'
          >
            <Heading size='lg' as='h1'>
              {t('iam.hello')}
            </Heading>
          </Stack>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            {t('iam.text1')}
            <ExternalLink href='https://intive.com/'>intive</ExternalLink>{' '}
            {t('iam.text3')} <strong>{t('iam.text4')}</strong>.
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            {t('iam.text5')}
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            <ExternalLink href='https://atiladev.com/'>- AtilaDev</ExternalLink>
            {t('iam.text6')}
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            <ExternalLink href='https://pabloheinig.com/'>
              - Pablo Heinig
            </ExternalLink>
            {t('iam.text7')}
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            <ExternalLink href='https://www.tecnofarma.cl/'>
              - TECNOFARMA
            </ExternalLink>
            {t('iam.text8')}
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            <ExternalLink href='https://simtlix.com/'>- SimTLiX</ExternalLink>
            {t('iam.text9')}
            <ExternalLink href='https://www.avaya.com/en/'>
              Avaya
            </ExternalLink>{' '}
            Spaces{t('iam.text10')}
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            <ExternalLink href='https://www.naranjax.com/'>
              - NaranjaX
            </ExternalLink>
            {t('iam.text11')}
            <ExternalLink href='https://developer.apple.com/xcode/swiftui/'>
              SwiftUI
            </ExternalLink>
            {t('iam.text12')}
            <ExternalLink href='https://youtu.be/3X1e1DZ7LB4?t=852'>
              Declarative UI Framework: Swift UI
            </ExternalLink>
            .
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            <ExternalLink href='https://atos.net/en/'>- Atos</ExternalLink>:
            {t('iam.text13')}
            <ExternalLink href='https://www.red-bus.com.ar/'>
              RedBus
            </ExternalLink>
            {t('iam.text14')}
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            <ExternalLink href='https://www.siemens.com/global/en.html'>
              - Siemens IT Solutions and Services
            </ExternalLink>
            {t('iam.text15')}
            <ExternalLink href='https://www.red-bus.com.ar/'>
              RedBus
            </ExternalLink>
            {t('iam.text16')}
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            {t('iam.text17')}
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            <ExternalLink href='https://icons.expo.fyi/'>- Icons</ExternalLink>:
            {t('iam.text18')}
            <ExternalLink href='https://expo.dev/'>Expo</ExternalLink>
            {t('iam.text19')}
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            <ExternalLink href='https://directory.now.sh/'>
              - Directory
            </ExternalLink>
            {t('iam.text20')}
            <ExternalLink href='https://github.com/expo/google-fonts'>
              @expo-google-fonts
            </ExternalLink>
            {t('iam.text21')}
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            {t('iam.text22')}
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Iam;
