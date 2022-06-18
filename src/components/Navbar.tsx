import {
  Box,
  Container,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navigation } from '../data/links';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { Logo } from './Logo';
import Link from 'next/link';

export const Navbar = ({ bg }: { bg: string }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Stack bg={colorMode === 'dark' ? 'svgDark' : 'svgLight'}>
      <Box backgroundColor='primary.500' paddingY={4}>
        <Container maxW='container.xl' paddingY={0}>
          <Stack direction='row' alignItems='center'>
            <Logo />
            <Spacer></Spacer>
            <Stack direction='row' alignItems='center'>
              <Flex
                display={['none', 'none', 'flex', 'flex', 'flex']}
                alignItems='center'
              >
                {navigation?.map(({ name, url }) => (
                  <Box
                    key={name}
                    px='5'
                    fontSize='20'
                    _hover={{ color: 'primary' }}
                  >
                    <Link href={url}>{name}</Link>
                  </Box>
                ))}
                <Box px='5'>
                  <Menu>
                    <MenuButton
                      as={Button}
                      fontSize='20'
                      borderRadius='md'
                      borderWidth='1px'
                      bg='primary'
                      color='white'
                      transition='all 0.2s'
                      _hover={{ bg: 'white', color: 'secondary' }}
                      _focus={{
                        boxShadow: 'outline',
                      }}
                    >
                      CV
                    </MenuButton>
                    <MenuList>
                      <MenuItem _hover={{ color: 'primary' }}>Español</MenuItem>
                      <MenuItem _hover={{ color: 'primary' }}>English</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Flex>
              <IconButton
                aria-label='hamburger'
                size='lg'
                icon={<GiHamburgerMenu />}
                display={['flex', 'flex', 'none', 'none', 'none']}
                onClick={() => setIsOpen((s) => !s)}
              />
              <IconButton
                icon={
                  colorMode === 'light' ? (
                    <BsSunFill style={{ height: '30px', width: '30px' }} />
                  ) : (
                    <BsMoonFill style={{ height: '20px', width: '20px' }} />
                  )
                }
                aria-label='colorMode'
                variant='ghost'
                _hover={{ color: 'secondary' }}
                onClick={toggleColorMode}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box display={['flex', 'flex', 'none', 'none', 'none']}>
        <Flex
          flexDirection='column'
          align='center'
          display={isOpen ? 'flex' : 'none'}
          zIndex='10'
          width='100vw'
          overflowY={'auto'}
        >
          {navigation.map(({ name, url }) => (
            <Box key={name} py='3' fontSize='20' _hover={{ color: 'primary' }}>
              <Link href={url}>{name}</Link>
            </Box>
          ))}
        </Flex>
      </Box>
      <svg
        id='wave'
        style={{
          marginTop: '-10px',
          backgroundColor: 'transparent',
          zIndex: '10px',
          display: 'block',
        }}
        viewBox='0 0 auto 1'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'>
            <stop stopColor={bg} offset='0%'></stop>
            <stop stopColor={bg} offset='100%'></stop>
          </linearGradient>
        </defs>
        <path
          fill='url(#sw-gradient-0)'
          d='M0,102L30,104.8C60,108,120,113,180,107.7C240,102,300,85,360,76.5C420,68,480,68,540,79.3C600,91,660,113,720,119C780,125,840,113,900,93.5C960,74,1020,45,1080,48.2C1140,51,1200,85,1260,107.7C1320,130,1380,142,1440,144.5C1500,147,1560,142,1620,124.7C1680,108,1740,79,1800,65.2C1860,51,1920,51,1980,65.2C2040,79,2100,108,2160,124.7C2220,142,2280,147,2340,130.3C2400,113,2460,74,2520,51C2580,28,2640,23,2700,42.5C2760,62,2820,108,2880,104.8C2940,102,3000,51,3060,48.2C3120,45,3180,91,3240,99.2C3300,108,3360,79,3420,82.2C3480,85,3540,119,3600,124.7C3660,130,3720,108,3780,102C3840,96,3900,108,3960,116.2C4020,125,4080,130,4140,124.7C4200,119,4260,102,4290,93.5L4320,85L4320,170L4290,170C4260,170,4200,170,4140,170C4080,170,4020,170,3960,170C3900,170,3840,170,3780,170C3720,170,3660,170,3600,170C3540,170,3480,170,3420,170C3360,170,3300,170,3240,170C3180,170,3120,170,3060,170C3000,170,2940,170,2880,170C2820,170,2760,170,2700,170C2640,170,2580,170,2520,170C2460,170,2400,170,2340,170C2280,170,2220,170,2160,170C2100,170,2040,170,1980,170C1920,170,1860,170,1800,170C1740,170,1680,170,1620,170C1560,170,1500,170,1440,170C1380,170,1320,170,1260,170C1200,170,1140,170,1080,170C1020,170,960,170,900,170C840,170,780,170,720,170C660,170,600,170,540,170C480,170,420,170,360,170C300,170,240,170,180,170C120,170,60,170,30,170L0,170Z'
        ></path>
      </svg>
    </Stack>
  );
};
