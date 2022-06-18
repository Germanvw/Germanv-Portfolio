import { Heading } from '@chakra-ui/react';

export const Logo = ({ mr }: { mr?: string }) => {
  return (
    <Heading mr={mr} color='primary'>
      Germanv
    </Heading>
  );
};
