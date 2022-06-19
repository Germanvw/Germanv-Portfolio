import { Divider, Heading, Stack, Text, useColorMode } from '@chakra-ui/react';
import { projects } from '../../data/projects';
import { ProjectItem } from '../elements/ProjectItem';

export const Projects = () => {
  const { colorMode } = useColorMode();
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
      {projects?.map((project) => (
        <div key={project?.name}>
          <ProjectItem project={project} />
        </div>
      ))}
    </Stack>
  );
};
