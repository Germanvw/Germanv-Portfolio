import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
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
import { useState, useEffect, useRef } from 'react';
import { AlertItem } from './AlertItem';
import emailjs from '@emailjs/browser';

const initForm = {
  email: '',
  title: '',
  message: '',
};

export const ContactForm = () => {
  const { colorMode } = useColorMode();

  const formRef = useRef(null) as React.RefObject<HTMLFormElement>;

  const [form, setForm] = useState(initForm);
  const [errors, setErrors] = useState(initForm);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

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

    return { ...errors, ...newErrors };
  };
  console.log(
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE
  );
  const handleInputs = ({ target }: any) => {
    setForm({ ...form, [target.name]: target.value });
    setErrors({ ...errors, [target.name]: '' });
  };

  const handleSubmit = () => {
    const errors = handleValidation(form);
    if (Object.values(errors).every((v) => v === '')) {
      setLoading(true);
      sendEmail();
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_USERID!
      )
      .then(() => {
        setLoading(false);
        setShowAlert(true);
        setForm(initForm);
      });
  };

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  }, [showAlert]);
  return (
    <Stack direction={{ base: 'column', lg: 'row' }}>
      <Box
        bg={colorMode === 'dark' ? 'svgDark' : 'svgLight'}
        borderRadius='lg'
        p={8}
        px={{ base: 10, lg: 20 }}
        mx={{ base: 0, mg: 5, lg: 10 }}
        shadow='base'
      >
        <VStack spacing={5} width='auto'>
          <form ref={formRef} onSubmit={handleSubmit}>
            <FormControl isRequired isInvalid={errors?.email !== ''}>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <MdOutlineEmail />
                </InputLeftElement>
                <Input
                  bg={colorMode === 'dark' ? 'svgDark' : 'white'}
                  type='email'
                  width='100%'
                  errorBorderColor='red.400'
                  placeholder='Your Email'
                  name='email'
                  isInvalid={errors?.email !== ''}
                  value={form.email}
                  onChange={(e) => handleInputs(e)}
                />
              </InputGroup>
              {errors?.email ? (
                <FormErrorMessage mb={2}>{errors?.email}</FormErrorMessage>
              ) : (
                <Box height='32px'></Box>
              )}
            </FormControl>
            <FormControl isRequired isInvalid={errors?.title !== ''}>
              <FormLabel>Title</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <MdTitle />
                </InputLeftElement>
                <Input
                  bg={colorMode === 'dark' ? 'svgDark' : 'white'}
                  type='text'
                  width='100%'
                  errorBorderColor='red.400'
                  placeholder='Title'
                  name='title'
                  isInvalid={errors?.title !== ''}
                  value={form.title}
                  onChange={(e) => handleInputs(e)}
                />
              </InputGroup>
              {errors?.title ? (
                <FormErrorMessage mb={2}>{errors?.title}</FormErrorMessage>
              ) : (
                <Box height='32px'></Box>
              )}
            </FormControl>
            <FormControl isRequired isInvalid={errors?.message !== ''}>
              <FormLabel>Message</FormLabel>
              <Textarea
                isInvalid={errors?.message !== ''}
                errorBorderColor='red.400'
                placeholder='Your Message'
                width='100%'
                name='message'
                bg={colorMode === 'dark' ? 'svgDark' : 'white'}
                value={form.message}
                onChange={(e) => handleInputs(e)}
                resize='none'
                rows={6}
              />
              {errors?.message ? (
                <FormErrorMessage mb={2}>{errors?.message}</FormErrorMessage>
              ) : (
                <Box height='32px'></Box>
              )}
            </FormControl>
            <Stack direction='column'>
              <Center mb={loading || showAlert ? '32px' : '0'}>
                {loading && <Spinner color='primary' />}
                {showAlert && <AlertItem type='success' text='Email Sended' />}
              </Center>
              <Button
                variant='outline'
                bg='primary'
                color='white'
                _hover={{ bg: 'secondary' }}
                _active={{ bg: 'primary' }}
                onClick={handleSubmit}
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </VStack>
      </Box>
      <Stack
        alignContent='center'
        justifyContent='center'
        px={{ base: 0, md: 10 }}
      >
        <Text
          color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
          w='auto'
          minW={250}
        >
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
                px={0.5}
                _hover={{ border: '2px solid #C62E46' }}
                _active={{ color: 'primary' }}
              >
                <Box fontSize={26} pr={2}>
                  {Component}
                </Box>
                <Text fontSize={{ base: 14, sm: 16 }}>{value}</Text>
              </Button>
            </Tooltip>
          ))}
        </Flex>
        <Flex mt={{ lg: 10, md: 10 }} alignItems='center' justify='center'>
          {socials?.map(({ Component, name, url, copy }) => (
            <Box key={name}>
              {!copy && (
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
                    as={'a'}
                    rel='noopener noreferrer'
                    target='_blank'
                    href={url!}
                    icon={Component}
                  />
                </Link>
              )}
            </Box>
          ))}
        </Flex>
      </Stack>
    </Stack>
  );
};
