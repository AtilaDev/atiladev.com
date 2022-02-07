import NextLink from 'next/link';
import { Box, Heading, Text, Container, Button } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const NotFound: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Box pt={40}>
      <Container>
        <Heading as='h1'>Oh no!</Heading>
        <Box pt={5}>
          <Text>{t('404.text1')}</Text>

          <NextLink href='/'>
            <Button colorScheme='black' variant='link'>
              {t('404.text2')}
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
