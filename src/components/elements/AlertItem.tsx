import { Alert, AlertIcon } from '@chakra-ui/react';

export const AlertItem = ({ type, text }: { type: any; text: string }) => {
  return (
    <Alert status={type}>
      <AlertIcon />
      {text}
    </Alert>
  );
};
