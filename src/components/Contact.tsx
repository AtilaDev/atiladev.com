import { Button, Stack, Link } from '@chakra-ui/react';

import {
  TWITTER_PROFILE,
  GITHUB_PROFILE,
  POLYWORK_PROFILE,
  LINKEDIN_PROFILE,
  EMAIL,
} from './constants';

const socialLinks = [
  {
    href: TWITTER_PROFILE,
    label: 'Twitter',
    color: '#1D9CF0',
  },
  {
    href: GITHUB_PROFILE,
    label: 'GitHub',
    color: '#161B22',
  },
  {
    href: POLYWORK_PROFILE,
    label: 'Polywork',
    color: '#BC82CD',
  },
  {
    href: LINKEDIN_PROFILE,
    label: 'LinkedIn',
    color: '#0C65C2',
  },
  {
    href: EMAIL,
    label: 'Email',
    color: '#2F944A',
  },
];

const Contact = () => {
  return (
    <Stack spacing={3} direction={{ base: 'row', md: 'row' }}>
      {socialLinks.map(({ href, label, color }) => (
        <Button
          key={href}
          as={Link}
          bgColor={color}
          color='white'
          variant='outline'
          href={href}
          target='_blank'
          px={2}
          justifyContent={{ base: 'flex-start', md: 'center' }}
        >
          {label}
        </Button>
      ))}
    </Stack>
  );
};

export default Contact;
