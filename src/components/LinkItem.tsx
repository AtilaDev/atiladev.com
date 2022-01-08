import * as React from 'react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

import { LinkItemProps } from '../interfaces';

const LinkItem: React.FC<LinkItemProps> = ({
  href,
  _target,
  children,
  ...props
}) => {
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        _target={_target}
        {...props}
        _hover={{
          textDecoration: 'none',
        }}
        _focus={{
          borderColor: 'transparent',
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
