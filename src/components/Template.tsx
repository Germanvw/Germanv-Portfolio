import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useColorMode, Box, Stack } from '@chakra-ui/react';

export const Template = ({ component }: any) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: '#ffffff', dark: '#212121' };
  const color = { light: '#404040', dark: '#EDEEEE' };

  return (
    <>
      <Navbar bg={bgColor[colorMode]} />
      <Box bg={bgColor[colorMode]} color={color[colorMode]}>
        <Stack
          justifyContent='center'
          alignItems='center'
          maxWidth='1600px'
          px={{ base: 30, md: 100 }}
        >
          <div style={{ maxWidth: '1000px' }}>{component}</div>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};
