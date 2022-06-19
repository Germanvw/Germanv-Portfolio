import {
  Divider,
  Heading,
  Stack,
  Text,
  useColorMode,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { projects } from '../../data/projects';
import { ProjectItem } from '../elements/ProjectItem';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FadeInWhenVisible } from '../elements/animation/FadeInWhenVisible';

const variant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export const Projects = () => {
  const [ref, inView] = useInView();
  const control = useAnimation();
  const { colorMode } = useColorMode();

  const [displayMore, setDisplayMore] = useState(false);

  useEffect(() => {
    if (inView) control.start('visible');
  }, [inView]);

  return (
    <Stack width='100%' mb={20}>
      <Stack direction='row' alignItems='center' mb={10}>
        <Heading minW={200} id='Projects'>
          Projects
        </Heading>
        <Divider />
      </Stack>
      <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
        Some projects might take some time to load becouse they are hosted by
        Heroku
      </Text>
      {displayMore
        ? projects?.map((project) => (
            <FadeInWhenVisible key={project?.name}>
              <ProjectItem project={project} />
            </FadeInWhenVisible>
          ))
        : projects?.slice(0, 3).map((project) => (
            <FadeInWhenVisible key={project?.name}>
              <ProjectItem project={project} />
            </FadeInWhenVisible>
          ))}

      {projects?.length > 3 && (
        <Flex justifyContent='center' alignItems='center'>
          <Button
            as={motion.button}
            variant='outline'
            whileHover={{ scale: 1.1 }}
            bg='primary'
            color='white'
            w='200px'
            _active={{ bg: 'primary' }}
            _hover={{ bg: 'secondary' }}
            mb={50}
            onClick={() => setDisplayMore(!displayMore)}
          >
            {displayMore ? 'Hide' : 'Show More'}
          </Button>
        </Flex>
      )}
    </Stack>
  );
};
