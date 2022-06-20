import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { socials } from '../data/socials';
import { SocialList } from './elements/SocialList';
import { Logo } from './Logo';
import { motion } from 'framer-motion';

export const Footer = ({ colorMode }: { colorMode: string }) => {
  return (
    <Container
      as={Stack}
      maxW='9xl'
      py={5}
      direction={{ base: 'column', lg: 'row' }}
      spacing={4}
      justify={{ base: 'center', lg: 'space-between' }}
      alignItems='center'
      bg={colorMode === 'dark' ? 'svgDark' : 'svgLight'}
    >
      <Stack
        direction={'column'}
        spacing={6}
        fontSize={40}
        display={['none', 'none', 'flex', 'flex', 'flex']}
        zIndex='10'
        position='fixed'
        bottom='10%'
        left='30px'
      >
        <motion.div
          initial={{ y: '-100vw' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', duration: 2, stiffness: 80, delay: 1 }}
        >
          <SocialList />
        </motion.div>
      </Stack>
      <Logo />
      <Text>
        © {new Date().getFullYear()} German Vazquez. All rights reserved.
      </Text>
      <Stack direction={'row'} spacing={6} fontSize={30}>
        <Box display={['flex', 'flex', 'none', 'none', 'none']}>
          <SocialList />
        </Box>
      </Stack>
    </Container>
  );
};
