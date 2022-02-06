import * as React from 'react';
import { Text, useColorModeValue, VStack, Divider } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from '.';

const Footer: React.FC = () => {
  const [t] = useTranslation('global');

  return (
    <VStack pb={8} spacing={8} as='footer' alignItems='flex-start'>
      <Text lineHeight='175%' as='h2' fontSize='md' alignSelf={'center'}>
        {t('footer.text1')}
        <ExternalLink href='https://nextjs.org/'>Next.js</ExternalLink>,{' '}
        <ExternalLink href='https://chakra-ui.com/'>Chakra</ExternalLink>,{' '}
        <ExternalLink href='https://react-icons.github.io/react-icons/'>
          React Icons
        </ExternalLink>
        {t('footer.text2')}
        <ExternalLink href='https://vercel.com/'>Vercel</ExternalLink>.
      </Text>
      <Divider />

      <Text
        color={useColorModeValue('gray.600', 'gray.400')}
        alignSelf={'center'}
      >
        &copy;&nbsp; 2017-
        {`${new Date().getFullYear()} Leandro Favre · ${t('footer.text3')}.`}
      </Text>
    </VStack>
  );
};

export default Footer;
