import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

export const ContentSkill = ({ skills }: { skills: string[] }) => {
  return (
    <Flex
      marginTop='10px'
      fontSize='12px'
      p={0}
      flexWrap='wrap'
      justifyContent='center'
    >
      {skills.map((tech, i) => (
        <Box
          key={i}
          borderRadius={2}
          display='inline-block'
          padding='2px 10px'
          bg='#40484d'
          color='rgba(255, 255, 255, 0.7)'
          m='3px 2px'
          textAlign='center'
          flexGrow={1}
        >
          {tech}{' '}
        </Box>
      ))}
    </Flex>
  );
};
