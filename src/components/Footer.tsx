import {
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Divider,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <VStack pb={8} spacing={8} as='footer' alignItems='flex-start'>
      <Divider />
      <Stack
        w='full'
        direction={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent={{ base: 'center', md: 'space-between' }}
        spacing={0}
        gridRowGap={4}
      >
        <Text color={useColorModeValue('gray.600', 'white')}>
          &copy;&nbsp; 2019-
          {`${new Date().getFullYear()} Leandro Favre · Todos los derechos reservados.`}
        </Text>
      </Stack>
    </VStack>
  );
};

export default Footer;