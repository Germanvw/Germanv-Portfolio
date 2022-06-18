import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { socials } from '../data/socials';
import { Logo } from './Logo';

export const Footer = ({ bg }: { bg: string }) => {
  return (
    <Container
      as={Stack}
      maxW='9xl'
      py={4}
      direction={{ base: 'column', lg: 'row' }}
      spacing={4}
      justify={{ base: 'center', lg: 'space-between' }}
      alignItems='center'
      bg={bg}
    >
      <Stack
        direction={'column'}
        spacing={6}
        fontSize={40}
        display={['none', 'none', 'flex', 'flex', 'flex']}
        zIndex='10'
        position='fixed'
        bottom='25%'
        left='30px'
      >
        <ul>
          {socials?.map(({ Component, name, url }) => (
            <Box _hover={{ color: 'primary' }} key={name}>
              <li style={{ listStyle: 'none', margin: '15px 0px' }}>
                <a href={url} rel='noopener noreferrer' target='_blank'>
                  {Component}
                </a>
              </li>
            </Box>
          ))}
        </ul>
      </Stack>

      <Logo />
      <Text>
        © {new Date().getFullYear()} German Vazquez. All rights reserved.
      </Text>
      <Stack direction={'row'} spacing={6} fontSize={30}>
        <Box display={['flex', 'flex', 'none', 'none', 'none']}>
          {socials?.map(({ Component, name, url }) => (
            <Box _hover={{ color: 'primary' }} key={name}>
              <a href={url} rel='noopener noreferrer' target='_blank'>
                {Component}
              </a>
            </Box>
          ))}
        </Box>
      </Stack>
    </Container>
  );
};
