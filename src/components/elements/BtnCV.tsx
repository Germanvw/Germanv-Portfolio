import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

export const BtnCV = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        fontSize='20'
        borderRadius='md'
        borderWidth='1px'
        bg='primary'
        color='white'
        transition='all 0.2s'
        _hover={{ bg: 'white', color: 'secondary' }}
        _focus={{
          boxShadow: 'outline',
        }}
      >
        CV
      </MenuButton>
      <MenuList>
        <MenuItem _hover={{ color: 'primary' }}>Español</MenuItem>
        <MenuItem _hover={{ color: 'primary' }}>English</MenuItem>
      </MenuList>
    </Menu>
  );
};
