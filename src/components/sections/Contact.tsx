import {
  Box,
  Button,
  Divider,
  Heading,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { title } from 'process';
import { useState } from 'react';
import { BtnPrimary } from '../elements/BtnPrimary';

const initForm = {
  email: '',
  title: '',
  message: '',
};

export const Contact = () => {
  const [form, setForm] = useState(initForm);
  const [errors, setErrors] = useState(initForm);

  const handleValidation = (form: any) => {
    let newErrors = {
      email: '',
      title: '',
      message: '',
    };
    Object.entries(form).forEach(([key, value]: any) => {
      if (key === 'email') {
        if (value.length < 1) {
          newErrors.email = 'Email is required';
        }
      }
      if (key === 'title')
        if (value.trim().length <= 2)
          newErrors.title = 'Title must be at least 3 characters';
      if (key === 'message')
        if (value.trim().length <= 3)
          newErrors.message = 'Message must be at least 3 characters';
    });
    setErrors({ ...errors, ...newErrors });
  };

  const handleInputs = ({ target }: any) => {
    setForm({ ...form, [target.name]: target.value });
    setErrors({ ...errors, [target.name]: '' });
  };

  const handleSubmit = () => {
    handleValidation(form);
    if (Object.values(errors).every((v) => v === '')) {
      console.log('submit');
    } else {
      console.log('error');
    }
  };

  return (
    <Stack width='100%' mb={20}>
      <Stack direction='row' alignItems='center' mb={10}>
        <Heading minW={200}>Contact</Heading>
        <Divider />
      </Stack>
      <Stack>
        <Heading as='h6' size='sm' pb={6}>
          Get in Touch! Complete the contact form or check Socials.
        </Heading>
        <Stack spacing={3}>
          <Input
            isInvalid={errors?.email !== ''}
            type='email'
            errorBorderColor='red.600'
            placeholder='Email'
            name='email'
            value={form.email}
            onChange={(e) => handleInputs(e)}
          />
          <Input
            isInvalid={errors?.title !== ''}
            type='text'
            errorBorderColor='red.600'
            placeholder='Title'
            name='title'
            value={form.title}
            onChange={(e) => handleInputs(e)}
          />
          <Textarea
            isInvalid={errors?.message !== ''}
            errorBorderColor='red.600'
            placeholder='Message'
            name='message'
            value={form.message}
            onChange={(e) => handleInputs(e)}
          />
          <Button
            variant='outline'
            bg='primary'
            color='white'
            maxW='200px'
            mb={50}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
