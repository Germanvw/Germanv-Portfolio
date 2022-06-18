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

export const About = () => {
  return (
    <Stack width='100%'>
      <Stack direction='row' alignItems='center'>
        <Heading minW={200} as='kbd'>
          About Me
        </Heading>
        <Divider />
      </Stack>
      <Stack direction={{ base: 'column', lg: 'row' }} alignItems='center'>
        <Stack direction='column'>
          <Text fontSize='1.15rem' fontWeight='400' lineHeight='200%'>
            Hi! My name is German and im a 23yo FullStack Developer who is
            passionate about learning the latest technologies and pushing my
            skills every day.
          </Text>
          <Text fontSize='1.15rem' fontWeight='400' lineHeight='200%'>
            My first contact with programming was a subject called Introduction
            to Programming that i took while going the university to become a
            Civil Engineer.
          </Text>
          <Text fontSize='1.15rem' fontWeight='400' lineHeight='200%'>
            Since then i become in love with coding, changed careers and
            graduated from the UTN as a Technician in Programming/Computer
            Systems in Dec 2021. At the beggining of that year i also began a
            self-learning journey to become a fullstack developer while
            finishing the university. Since a few months ago im working as a
            React Developer at Cedeira Software Factory.
          </Text>
          <Text
            fontSize='1.15rem'
            fontWeight='400'
            lineHeight='200%'
            color='primary'
          >
            Few technologies that i use in my daily life are:
          </Text>
        </Stack>
        <List spacing={3}>
          {/* <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={MdSettings} color='green.500' />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem> */}
        </List>

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
