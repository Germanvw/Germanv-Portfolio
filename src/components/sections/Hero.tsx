import { Stack, Text, Heading, Box } from '@chakra-ui/react';
import { BtnPrimary } from '../elements/BtnPrimary';

export const Hero = () => {
  return (
    <Stack minHeight='75vh' width='100%'>
      <Text fontSize='1.2rem' color='primary'>
        Hi, my name is
      </Text>
      <Heading fontSize='4.5rem'>German Vazquez</Heading>
      <Heading fontSize='4.5rem' color='secondary'>
        Fullstack Developer
      </Heading>
      <Text maxWidth='24em' py='10' fontSize='1.3rem'>
        I’m a 23yo programmer from Argentina obsessed by the world of web
        development and learning the latest technologies.
      </Text>
      <Box pb={50}>
        <BtnPrimary
          title={'My Projects!'}
          maxWidth='200px'
          link={'#projects'}
        />
      </Box>
    </Stack>
  );
};
