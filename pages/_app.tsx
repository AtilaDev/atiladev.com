import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { MainLayout } from '../src/components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
