import { Button } from '@chakra-ui/react';

interface Props {
  title: string;
  maxWidth?: string;
  link: string;
}

export const BtnPrimary = ({ title, maxWidth }: Props) => {
  return (
    <Button
      variant='outline'
      bg='primary'
      color='white'
      style={{ maxWidth }}
      mb={50}
    >
      {title}
    </Button>
  );
};
