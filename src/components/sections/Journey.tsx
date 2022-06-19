import {
  Box,
  Divider,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { BsFillCalendarFill } from 'react-icons/bs';
import { journey } from '../../data/journey';
import { ContentSkill } from '../elements/ContentSkill';

export const Journey = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack width='100%' mb={20}>
      <Stack direction='row' alignItems='center' mb={10}>
        <Heading minW={200} id='Journey'>
          Journey
        </Heading>
        <Divider />
      </Stack>
      <Stack
        id='cd-timeline'
        margin={{ base: '48px 0 48px 0', lg: '32px 0 32px 0' }}
        padding='32px 0'
        position='relative'
      >
        {journey?.map(
          ({ title, date, label, icon, description, technologies }, i) => (
            <Box
              className='cd-timeline-block'
              key={i}
              position='relative'
              margin={{ base: '48px 0 48px 0', lg: '32px 0 32px 0' }}
            >
              <Flex
                alignItems='center'
                justifyContent='center'
                className='cd-timeline-img'
                fontSize={20}
                border={`2px solid ${
                  colorMode === 'dark' ? '#C62E46' : '#C62E46'
                }`}
                borderRadius={50}
                height={{ base: '30px', lg: '40px' }}
                width={{ base: '30px', lg: '40px' }}
                color={colorMode === 'dark' ? '#C62E46' : '#F1F5F7'}
                bg={colorMode === 'dark' ? '#1c1c1c' : '#C62E46'}
              >
                {icon}
              </Flex>
              <Box
                className='cd-timeline-content'
                marginRight='30px'
                margin='16px 0'
                lineHeight='1.6'
                marginLeft='60px'
                width={{ base: '360px', lg: '360px' }}
                borderRadius={10}
                padding='10px 20px'
                borderRightColor={colorMode === 'dark' ? 'red' : 'red'}
                bg={colorMode === 'dark' ? 'svgDark' : 'svgLight'}
                position='relative'
              >
                <Heading fontSize={30} as='h4'>
                  {title}
                </Heading>
                <Stack
                  timeline-content-info
                  direction={{ base: 'column', lg: 'row' }}
                  alignItems='center'
                  fontSize={{ base: '16px', lg: '12px' }}
                  my={4}
                >
                  <Text color='primary'>{label}</Text>
                  <Spacer></Spacer>
                  <Stack direction='row' alignItems='center' color='secondary'>
                    <Box fontSize='14px' marginBottom='3px'>
                      <BsFillCalendarFill />
                    </Box>
                    <Text p={0}>{date}</Text>
                  </Stack>
                </Stack>
                <Text>{description}</Text>
                <Box py={2}>
                  <ContentSkill skills={technologies} />
                </Box>
              </Box>
            </Box>
          )
        )}
      </Stack>
    </Stack>
  );
};
