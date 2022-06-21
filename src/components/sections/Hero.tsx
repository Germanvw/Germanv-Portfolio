import { Stack, Text, Heading, Box, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <Stack minHeight='60vh'>
      <motion.div
        initial={{ x: -150 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', duration: 2, stiffness: 100 }}
      >
        <Text fontSize='1.2rem' color='primary'>
          Hi, my name is
        </Text>
      </motion.div>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { delay: 0.4 } },
        }}
      >
        <Heading fontSize='4.1rem' as='h2'>
          German Vazquez
        </Heading>
      </motion.div>

      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { delay: 0.8 } },
        }}
      >
        <Heading fontSize='3.4rem' as='h2' color='secondary'>
          Fullstack Developer
        </Heading>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Text maxWidth='24em' py='10' fontSize='1.3rem'>
          I’m a 23 years old programmer from Argentina obsessed by the world of
          web development, solving problems and developing rich and interactive
          applications.
        </Text>
      </motion.div>
      <motion.div
        initial={{ x: '-40vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', duration: 2, stiffness: 80, delay: 1 }}
      >
        <Box pb={50}>
          <motion.button whileHover={{ scale: 1.1 }}>
            <Button
              variant='outline'
              bg='primary'
              color='white'
              w='200px'
              _active={{ bg: 'primary' }}
              _hover={{ bg: 'secondary' }}
              as='a'
              href='#Projects'
            >
              My Projects
            </Button>
          </motion.button>
        </Box>
      </motion.div>
    </Stack>
  );
};
