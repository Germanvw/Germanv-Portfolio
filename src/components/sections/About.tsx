import {
  Box,
  Divider,
  Heading,
  Img,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';

import { AiFillCaretRight } from 'react-icons/ai';
import { skills } from '../../data/skills';

export const About = () => {
  return (
    <Stack width='100%'>
      <Stack direction='row' alignItems='center' mb={10}>
        <Heading minW={200} as='kbd'>
          About Me
        </Heading>
        <Divider />
      </Stack>
      <Stack direction={{ base: 'column', lg: 'row' }} alignItems='center'>
        <Stack direction='column'>
          <Box>
            <Text fontSize='1.1rem' fontWeight='400' lineHeight='200%'>
              Hi! My name is German and im a 23yo FullStack Developer who is
              passionate about learning the latest technologies and pushing my
              skills every day.
            </Text>
            <Text fontSize='1.1rem' fontWeight='400' lineHeight='200%'>
              My first contact with programming was a subject called
              Introduction to Programming that i took while going the university
              to become a Civil Engineer in 2019.
            </Text>
            <Text fontSize='1.1rem' fontWeight='400' lineHeight='200%'>
              Since then i become in love with coding, changed careers and
              graduated from the UTN as a Technician in Programming/Computer
              Systems in Dec 2021. At the beggining of that year i also began a
              self-learning journey to become a fullstack developer while
              finishing the university.
            </Text>
            <Text fontSize='1.1rem' fontWeight='400' lineHeight='200%'>
              Right now im working as a React Developer at Cedeira Software
              Factory.
            </Text>
          </Box>
          <Box py={6}>
            <Text fontSize='1.15rem' fontWeight='400' lineHeight='200%'>
              Few technologies that i use in my daily life are:
            </Text>
          </Box>
          <Box>
            <Stack direction='row' justifyContent='between'>
              {skills?.map((col, i) => (
                <>
                  <Stack key={i}>
                    <List spacing={3}>
                      {col?.map((skill) => (
                        <ListItem key={skill}>
                          <ListIcon as={AiFillCaretRight} color='primary' />
                          {skill}
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                  {i === 0 && <Spacer></Spacer>}
                </>
              ))}
            </Stack>
          </Box>
        </Stack>
        <Img
          src='/images/portrait.jpg'
          borderRadius='full'
          borderWidth='1px'
          maxWidth={{ base: 240, lg: 384 }}
          maxHeight={{ base: 240, lg: 384 }}
          // minHeight={384}
        />
      </Stack>
    </Stack>
  );
};
