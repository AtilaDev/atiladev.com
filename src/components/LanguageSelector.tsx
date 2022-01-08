import * as React from 'react';
import { Button } from '@chakra-ui/react';

const LanguageSelector: React.FC = () => {
  const [toggle, setToggle] = React.useState(false);

  const toggleLanguage = () => {
    setToggle(!toggle);
  };

  return (
    <Button
      aria-label='Toggle language'
      onClick={toggleLanguage}
      _hover={{
        textDecoration: 'none',
      }}
      _focus={{
        borderColor: 'transparent',
      }}
    >
      {toggle ? 'Es' : 'En'}
    </Button>
  );
};

export default LanguageSelector;
