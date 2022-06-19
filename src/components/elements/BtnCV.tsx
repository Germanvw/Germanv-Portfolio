import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from '@chakra-ui/react';

export const BtnCV = () => {
  const { colorMode } = useColorMode();
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
      <MenuList bg={colorMode === 'dark' ? 'svgDark' : 'white'}>
        <MenuItem _hover={{ color: 'primary' }}>Español</MenuItem>
        <MenuItem _hover={{ color: 'primary' }}>English</MenuItem>
      </MenuList>
    </Menu>
  );
};
