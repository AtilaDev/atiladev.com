import * as React from 'react';
import { Link, LinkProps, useColorModeValue as mode } from '@chakra-ui/react';

const ExternalLink: React.FC<LinkProps> = ({ children, ...linkProps }) => {
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
