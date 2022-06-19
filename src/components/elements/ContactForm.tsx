import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
  Tooltip,
  useClipboard,
  VStack,
} from '@chakra-ui/react';
import { MdTitle } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { useColorMode } from '@chakra-ui/react';
import { contact } from '../../data/contact-data';
import { socials } from '../../data/socials';
import Link from 'next/link';
import { useState } from 'react';

const initForm = {
  email: '',
  title: '',
  message: '',
};

export const ContactForm = () => {
  const { colorMode } = useColorMode();

  const [form, setForm] = useState(initForm);
  const [errors, setErrors] = useState(initForm);

  const { hasCopied: hasCopiedEmail, onCopy: onCopyEmail } = useClipboard(
    'germanvazquezw99@gmail.com'
  );
  const { hasCopied: hasCopiedPhone, onCopy: onCopyPhone } =
    useClipboard('+54 11 5692-0619');

  const { hasCopied: hasCopiedLocation, onCopy: onCopyLocation } = useClipboard(
    'Buenos Aires, Argentina'
  );

  const handleValidation = (form: any) => {
    let newErrors = {
      email: '',
      title: '',
      message: '',
    };
    Object.entries(form).forEach(([key, value]: any) => {
      if (key === 'email') {
        if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
          value.trim() < 5
        )
          newErrors.email = 'Invalid Email';
      }

      if (key === 'title')
        if (value.trim().length <= 2)
          newErrors.title = 'Must be at least 3 characters';
      if (key === 'message')
        if (value.trim().length <= 3)
          newErrors.message = 'Must be at least 4 characters';
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
      setForm(initForm);
    } else {
      console.log('error');
    }
  };

  return (
    <Container maxW='full' overflow='hidden'>
      <Stack direction={{ base: 'column', lg: 'row' }}>
        <Box
          bg={colorMode === 'dark' ? 'svgDark' : 'svgLight'}
          borderRadius='lg'
          p={8}
          px={{ base: 10, lg: 20 }}
          mx={{ base: 0, mg: 5, lg: 10 }}
          w='100%'
          shadow='base'
        >
          <VStack spacing={5}>
            <FormControl isRequired>
              <Stack direction='row'>
                <FormLabel>Email</FormLabel>
                <Text color='red.400'>{errors?.email}</Text>
              </Stack>

              <InputGroup>
                <InputLeftElement>
                  <MdOutlineEmail />
                </InputLeftElement>
                <Input
                  isInvalid={errors?.email !== ''}
                  bg={colorMode === 'dark' ? 'svgDark' : 'white'}
                  type='email'
                  errorBorderColor='red.400'
                  placeholder='Your Email'
                  name='email'
                  value={form.email}
                  onChange={(e) => handleInputs(e)}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <Stack direction='row'>
                <FormLabel>Title</FormLabel>
                <Text color='red.400'>{errors?.title}</Text>
              </Stack>

              <InputGroup>
                <InputLeftElement>
                  <MdTitle />
                </InputLeftElement>
                <Input
                  isInvalid={errors?.title !== ''}
                  type='text'
                  bg={colorMode === 'dark' ? 'svgDark' : 'white'}
                  errorBorderColor='red.400'
                  placeholder='Title'
                  name='title'
                  value={form.title}
                  onChange={(e) => handleInputs(e)}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <Stack direction='row'>
                <FormLabel>Message</FormLabel>
                <Text color='red.400'>{errors?.message}</Text>
              </Stack>
              <Textarea
                isInvalid={errors?.message !== ''}
                errorBorderColor='red.400'
                placeholder='Your Message'
                name='message'
                bg={colorMode === 'dark' ? 'svgDark' : 'white'}
                value={form.message}
                onChange={(e) => handleInputs(e)}
                resize='none'
                rows={6}
              />
            </FormControl>

            <Button
              variant='outline'
              bg='primary'
              color='white'
              w='100%'
              _hover={{ bg: 'secondary' }}
              _active={{ bg: 'primary' }}
              mb={50}
              onClick={handleSubmit}
            >
              Send Message
            </Button>
          </VStack>
        </Box>
        <Stack
          alignContent='center'
          justifyContent='center'
          px={{ base: 0, md: 10 }}
        >
          <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} w={320}>
            Get in Touch! Complete the contact form or check Socials.
          </Text>
          <Flex direction='column' alignItems='center' pt={6}>
            {contact?.slice(0, 3)?.map(({ name, value, Component }) => (
              <Tooltip
                key={name}
                label={
                  name === 'email'
                    ? hasCopiedEmail
                      ? 'Email Copied!'
                      : 'Copy Email'
                    : name === 'location'
                    ? hasCopiedLocation
                      ? 'Location Copied!'
                      : 'Copy Location'
                    : hasCopiedPhone
                    ? 'Phone Copied!'
                    : 'Copy Phone'
                }
                closeOnClick={false}
                hasArrow
              >
                <Button
                  variant='ghost'
                  my={2}
                  onClick={
                    name === 'email'
                      ? onCopyEmail
                      : name === 'phone'
                      ? onCopyPhone
                      : onCopyLocation
                  }
                  _hover={{ border: '2px solid #C62E46' }}
                  _active={{ color: 'primary' }}
                >
                  <Box fontSize={26} pr={2}>
                    {Component}
                  </Box>
                  <Text>{value}</Text>
                </Button>
              </Tooltip>
            ))}
          </Flex>
          <Flex mt={{ lg: 10, md: 10 }} alignItems='center' justify='center'>
            {socials?.map(({ Component, name, url, copy }) => (
              <>
                {copy ? (
                  <p key={name}></p>
                ) : (
                  <Link href={url!} passHref>
                    <IconButton
                      aria-label={name}
                      variant='ghost'
                      size='lg'
                      isRound={true}
                      fontSize={30}
                      mx={5}
                      _hover={{ bg: 'secondary', color: 'white' }}
                      _active={{ bg: 'primary', color: 'white' }}
                      key={name}
                      as={'a'}
                      rel='noopener noreferrer'
                      target='_blank'
                      href={url!}
                      icon={Component}
                    />
                  </Link>
                )}
              </>
            ))}
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
};
