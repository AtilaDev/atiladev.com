import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label='Toggle theme'
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
      _hover={{
        textDecoration: 'none',
      }}
      _focus={{
        borderColor: 'transparent',
      }}
    >
      {''}
    </IconButton>
  );
};

export default ThemeButton;
