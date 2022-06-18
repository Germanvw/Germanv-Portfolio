import { Divider, Heading, Stack } from '@chakra-ui/react';
import { projects } from '../../data/projects';
import { ProjectItem } from '../elements/ProjectItem';

export const Projects = () => {
  return (
    <Stack width='100%' mb={20}>
      <Stack direction='row' alignItems='center' mb={10}>
        <Heading minW={200}>Projects</Heading>
        <Divider />
      </Stack>
      {projects?.map((project) => (
        <div key={project?.name}>
          <ProjectItem project={project} />
        </div>
      ))}
    </Stack>
  );
};
