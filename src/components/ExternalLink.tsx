import { Link, LinkProps, useColorModeValue as mode } from '@chakra-ui/react';

const ExternalLink = ({ children, ...linkProps }: LinkProps) => {
  return (
    <span>
      <Link
        {...linkProps}
        color={mode('blue.500', 'blue.300')}
        display='inline-flex'
        alignItems='center'
        isExternal
        target='_blank'
        _hover={{
          textDecoration: 'none',
        }}
        _focus={{
          borderColor: 'transparent',
        }}
      >
        {children}
      </Link>
    </span>
  );
};

export default ExternalLink;
