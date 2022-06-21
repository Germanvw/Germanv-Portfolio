import {
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { ContentSkill } from './ContentSkill';

interface Props {
  featured?: boolean;
  name: string;
  description: string[];
  img: string;
  technologies: string[];
  demo: string;
  github: string;
}

export const ProjectItem = ({ project }: { project: Props }) => {
  const { colorMode } = useColorMode();
  const { name, description, img, technologies, demo, github } = project;
  return (
    <Center py={6}>
      <Stack
        borderWidth='1px'
        borderRadius='lg'
        direction={{ base: 'column', lg: 'row' }}
        boxShadow={'2xl'}
        padding={4}
      >
        <Image
          objectFit='cover'
          objectPosition='left'
          boxSize='100%'
          borderWidth='1px'
          borderRadius={8}
          minH={380}
          minW={200}
          maxW={475}
          src={img}
          alt={name}
        />
        <Stack
          flex={1}
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          maxWidth={475}
          p={1}
          pt={2}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          {description?.map((i) => (
            <Text
              fontWeight={600}
              color={colorMode === 'dark' ? 'gray.500' : 'gray.600'}
              as='i'
              textAlign='center'
              size='sm'
              mb={4}
              key={i}
            >
              {i}
            </Text>
          ))}
          <ContentSkill skills={technologies} />
          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={{ base: 'column', md: 'row' }}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Button
              fontSize={'sm'}
              rounded={'full'}
              w='100%'
              as='a'
              href={demo}
              cursor='pointer'
              target='_blank'
              rel='noopener noreferrer'
            >
              Live Demo
            </Button>
            <Button
              w='100%'
              fontSize={'sm'}
              rounded={'full'}
              bg={'primary'}
              color={'white'}
              boxShadow={'0px 1px 25px -5px black, 0 10px 10px -5px #C62E46'}
              _hover={{
                bg: 'secondary',
              }}
              _active={{ bg: 'primary' }}
              as='a'
              href={github}
              cursor='pointer'
              target='_blank'
              rel='noopener noreferrer'
            >
              Repository
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};
