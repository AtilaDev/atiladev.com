import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { MainLayout } from '../src/components';
import theme from '../src/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
