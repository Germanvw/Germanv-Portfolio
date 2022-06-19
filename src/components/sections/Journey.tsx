import { Divider, Heading, Stack } from '@chakra-ui/react';
export const Journey = () => {
  return (
    <Stack width='100%' mb={20}>
      <Stack direction='row' alignItems='center' mb={10}>
        <Heading minW={200} id='Journey'>
          Journey
        </Heading>
        <Divider />
      </Stack>
    </Stack>
  );
};
