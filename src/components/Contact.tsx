import { Button, Stack, Link, useMediaQuery } from '@chakra-ui/react';
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';
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
    icon: <AiOutlineTwitter />,
  },
  {
    href: GITHUB_PROFILE,
    label: 'GitHub',
    color: '#161B22',
    icon: <AiFillGithub />,
  },
  {
    href: POLYWORK_PROFILE,
    label: 'Polywork',
    color: '#BC82CD',
    icon: <SiPolywork />,
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

const Contact = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {isMobile ? (
        <Stack spacing={4} direction={{ base: 'column' }}>
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
              width={'250px'}
              size='lg'
              justifyContent={{ base: 'center' }}
            >
              {label}
            </Button>
          ))}
        </Stack>
      ) : (
        <Stack spacing={3} direction={{ base: 'row', md: 'row' }}>
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
              justifyContent={{ base: 'flex-start', md: 'center' }}
            >
              {label}
            </Button>
          ))}
        </Stack>
      )}
    </>
  );
};

export default Contact;
