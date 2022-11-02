import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    Input,
    InputRightElement,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react';
import { MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('teal.200', 'teal.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box>
                <Flex h={24} alignItems={'center'} justifyContent={'space-between'} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                    <Box>LF Libreria</Box>
                    <InputGroup maxWidth={96}>
                        <InputRightElement><SearchIcon color='gray.300' /></InputRightElement>
                        <Input type='tel' placeholder='Buscar por titulo/ Autor/ Palabra Clave' />
                    </InputGroup>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
                <Flex bg={useColorModeValue('teal.400', 'teal.800')} justifyContent={'center'} padding={2}>
                    <NavLink>TERROR</NavLink>
                    <NavLink>SUSPENSO</NavLink>
                    <NavLink>COMEDIA</NavLink>
                    <NavLink>ROMANCE</NavLink>
                    <NavLink>Top 100</NavLink>
                    <NavLink>CONTACTO</NavLink>
                </Flex>
            </Box>
        </>
    );
}