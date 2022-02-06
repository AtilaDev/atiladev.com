import * as React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { MainLayout } from '../src/components';
import theme from '../src/theme';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { ATILA_LANGUAGE_SELECTED } from '../src/components/constants';

import global_es from '../src/translataions/es/global.json';
import global_en from '../src/translataions/en/global.json';

if (typeof window !== 'undefined') {
  const initialValue = localStorage.getItem(ATILA_LANGUAGE_SELECTED) || 'es';

  i18next.init({
    interpolation: { escapeValue: false },
    lng: initialValue,
    resources: {
      es: {
        global: global_es,
      },
      en: {
        global: global_en,
      },
    },
  });
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <I18nextProvider i18n={i18next}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </I18nextProvider>
    </ChakraProvider>
  );
};

export default MyApp;
