import * as React from 'react';
import { Button, Stack, Link, Box } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { SiPolywork } from 'react-icons/si';

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
    icon: <FaXTwitter />,
  },
  {
    href: GITHUB_PROFILE,
    label: 'GitHub',
    color: '#161B22',
    icon: <AiFillGithub />,
  },
  {
    href: LINKEDIN_PROFILE,
    label: 'LinkedIn',
    color: '#0C65C2',
    icon: <AiFillLinkedin />,
  },
  {
    href: EMAIL,
    label: 'Email',
    color: '#2F944A',
    icon: <AiOutlineMail />,
  },
];

const Contact: React.FC = () => {
  return (
    <Stack spacing={4} direction={{ base: 'column', md: 'row' }}>
      {socialLinks.map(({ href, label, color, icon }) => (
        <Button
          key={href}
          as={Link}
          bgColor={color}
          color='white'
          variant='primary'
          href={href}
          target='_blank'
          px={2}
          leftIcon={icon}
          width={{ base: '250px', md: '125px' }}
          justifyContent={{ base: 'center' }}
        >
          {label}
        </Button>
      ))}
    </Stack>
  );
};

export default Contact;
