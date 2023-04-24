import {
  Box,
  Divider,
  Heading,
  Img,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { AiFillCaretRight } from 'react-icons/ai';
import { skills } from '../../data/skills';
import { BtnCV } from '../elements/BtnCV';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { aboutText } from '../../data/about.text';

const variant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export const About = () => {
  const { ref, inView } = useInView();
  const control = useAnimation();

  useEffect(() => {
    if (inView) control.start('visible');
  }, [inView]);

  return (
    <Stack
      width='auto'
      mb={20}
      as={motion.div}
      initial='hidden'
      animate={control}
      className='box'
      variants={variant}
      ref={ref}
    >
      <Stack direction='row' alignItems='center' mb={10}>
        <Heading minW={200} as='kbd' id='About'>
          About Me
        </Heading>
        <Divider />
      </Stack>
      <Stack direction={{ base: 'column', lg: 'row' }} alignItems='center'>
        <Stack direction='column'>
          <Box>
            {aboutText.map((text, index) => (
            <Text key={index} fontSize='1.1rem' fontWeight='400' lineHeight='200%'>
             {text}
            </Text>
            ))}
          </Box>
          <Box py={6}>
            <Text fontSize='1.15rem' fontWeight='400' lineHeight='200%'>
              Few technologies that i use in my daily life are:
            </Text>
          </Box>
          <Box>
            <Stack direction={{ base: 'column', sm: 'row' }}>
              {skills.map((col, i) => (
                <Stack key={i} w='100%'>
                  <List spacing={3}>
                    {col?.map((skill) => (
                      <ListItem key={skill} width='auto'>
                        <ListIcon as={AiFillCaretRight} color='primary' />
                        {skill}
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              ))}
            </Stack>
          </Box>
          <Box py={6}>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              alignItems='center'
            >
              <Heading as='h4' size='sm'>
                For a full list of technologies that i know check:
              </Heading>
              <Box width='100px'>
                <BtnCV />
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Box
          width='auto'
          maxWidth={{ base: 240, lg: 384 }}
          maxHeight={{ base: 240, lg: 384 }}
        >
          <Img
            src='/images/portrait.jpg'
            borderRadius='full'
            borderWidth='1px'
          />
        </Box>
      </Stack>
    </Stack>
  );
};
