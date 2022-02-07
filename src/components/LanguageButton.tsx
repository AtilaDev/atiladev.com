/* eslint-disable @next/next/link-passhref */
import * as React from 'react';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LanguageButton: React.FC = () => {
  const router = useRouter();

  return (
    <Link href='/' locale={router.locale === 'es' ? 'en' : 'es'}>
      <Button
        aria-label='Toggle language'
        _hover={{
          textDecoration: 'none',
        }}
        _focus={{
          borderColor: 'transparent',
        }}
      >
        {router.locale === 'es' ? 'EN' : 'ES'}
      </Button>
    </Link>
  );
};

export default LanguageButton;
