import { Stack, Text, Heading, Box, Button } from '@chakra-ui/react';

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
        development, solving problems and developing rich and interactive
        applications.
      </Text>
      <Box pb={50}>
        <Button
          variant='outline'
          bg='primary'
          color='white'
          w='200px'
          _active={{ bg: 'primary' }}
          _hover={{ bg: 'secondary' }}
          mb={50}
          as='a'
          href='#Projects'
        >
          My Projects
        </Button>
      </Box>
    </Stack>
  );
};
