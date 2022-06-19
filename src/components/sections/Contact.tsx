import { Divider, Heading, Stack } from '@chakra-ui/react';
import { ContactForm } from '../elements/ContactForm';

export const Contact = () => {
  return (
    <>
      <Stack width='100%' mb={20}>
        <Stack direction='row' alignItems='center' mb={10}>
          <Heading minW={200} id='Contact'>
            Contact
          </Heading>
          <Divider />
        </Stack>
        <Stack>
          <ContactForm />
        </Stack>
      </Stack>
    </>
  );
};
