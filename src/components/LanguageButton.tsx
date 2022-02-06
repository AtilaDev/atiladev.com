import * as React from 'react';
import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { ATILA_LANGUAGE_SELECTED } from './constants';

let initialValue: string = '';

if (typeof window !== 'undefined') {
  initialValue = localStorage.getItem(ATILA_LANGUAGE_SELECTED) || 'es';
}

const LanguageButton: React.FC = () => {
  const [toggleLanguage, setToggleLanguage] = React.useState(
    initialValue === 'es' ? true : false
  );
  const [_, i18n] = useTranslation('global');

  const onToggleLanguage = () => {
    if (toggleLanguage) {
      setToggleLanguage(false);
      i18n.changeLanguage('en');
      localStorage.setItem(ATILA_LANGUAGE_SELECTED, 'en');
    } else {
      setToggleLanguage(true);
      i18n.changeLanguage('es');
      localStorage.setItem(ATILA_LANGUAGE_SELECTED, 'es');
    }
  };

  return (
    <Button
      aria-label='Toggle language'
      onClick={onToggleLanguage}
      _hover={{
        textDecoration: 'none',
      }}
      _focus={{
        borderColor: 'transparent',
      }}
    >
      {toggleLanguage ? 'EN' : 'ES'}
    </Button>
  );
};

export default LanguageButton;
