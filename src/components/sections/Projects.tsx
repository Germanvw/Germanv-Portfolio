import { Divider, Heading, Stack } from '@chakra-ui/react';

export const Projects = () => {
  return (
    <Stack width='100%' mb={20}>
      <Stack direction='row' alignItems='center' mb={10}>
        <Heading minW={200}>Projects</Heading>
        <Divider />
      </Stack>
    </Stack>
  );
};
