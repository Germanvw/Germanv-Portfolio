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
        _hover={{ bg: 'secondary', color: 'white' }}
        _active={{ bg: 'primary', color: 'white' }}
        _focus={{
          boxShadow: 'outline',
        }}
      >
        CV
      </MenuButton>
      <MenuList bg={colorMode === 'dark' ? 'svgDark' : 'white'}>
        <MenuItem
          _hover={{ color: 'primary' }}
          as='a'
          href='/pdf/German_Vazquez_esp.pdf'
          rel='noopener noreferrer'
          target='_blank'
        >
          Español
        </MenuItem>
        <MenuItem
          _hover={{ color: 'primary' }}
          as='a'
          href='/pdf/German_Vazquez_eng.pdf'
          rel='noopener noreferrer'
          target='_blank'
        >
          English
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
