import Head from 'next/head';
import { Box, Container, VStack } from '@chakra-ui/react';

import Navigation from '../components/Navigation';

const meta = {
  title: 'Leandro Favre – Software Developer',
  author: 'Leandro Favre',
  shortname: '@FavreLeandro',
  description:
    "I'm Leandro Favre (@FavreLeandro). I'm a Software Developer currently working as a React Native Developer.",
  language: 'en-us',
  siteUrl: 'https://www.atiladev.com',
  avatarImage: '/avatar.png',
  github: 'https://github.com/AtilaDev',
  twitter: 'https://twitter.com/FavreLeandro',
  twitterHandle: '@FavreLeandro',
  locale: 'en-US',
};

const MainLayout = ({ children }: any) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta content={meta.description} name='description' />
        <meta name='description' content="Leandro Favre's homepage" />
        <meta name='author' content={meta.author} />
        <meta name='author' content={meta.shortname} />
        <link rel='icon' href='/avatar.png' />
        <meta name='robots' content='follow, index' />
        <meta
          name='robots'
          content='index,follow,max-video-preview:-1,max-snippet:-1,max-image-preview:large, max-video-preview:-1, max-video-preview:-1'
        />
        <meta
          name='googlebot'
          content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />
        <meta
          name='bingbot'
          content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />
        <meta property='og:site_name' content="Leandro Favre's Blog" />
        <meta property='og:type' content='website' />
        <meta property='og:description' content={meta.description} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={meta.twitterHandle} />
        <meta name='twitter:title' content="Leandro Favre's Blog" />
        <meta name='twitter:description' content={meta.description} />
        <title>Leandro Favre - Home</title>
      </Head>
      <Navigation />
      <Container
        maxW='container.md'
        minH={{ base: 'auto', md: '100vh' }}
        px={{ base: 4, lg: 0 }}
      >
        <VStack spacing={16} flex={1} w='full' as='main' mb={16}>
          {children}
        </VStack>
      </Container>
    </Box>
  );
};

export default MainLayout;
