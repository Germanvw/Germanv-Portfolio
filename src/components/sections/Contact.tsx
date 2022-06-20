import { Divider, Heading, Stack } from '@chakra-ui/react';
import { ContactForm } from '../elements/ContactForm';

export const Contact = () => {
  return (
    <>
      <Stack mb={20}>
        <Stack direction='row' alignItems='center' mb={10} w='100%'>
          <Heading minW={100} width='100%' id='Contact'>
            Contact
          </Heading>
          <Divider />
        </Stack>
        <ContactForm />
      </Stack>
    </>
  );
};
