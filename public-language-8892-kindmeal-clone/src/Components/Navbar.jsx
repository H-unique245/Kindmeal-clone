import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
//   useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import SocialLinks from './SocialLinks';
import LogUserLinks from './LogUserLinks';
import NavList from './NavList';
// import { NavLink } from 'react-router-dom';

// const Links = ['Dashboard', 'Projects', 'Team'];

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={{base:"2rem", md:"6.5rem"}} py="1rem">
        <Flex h={16}  alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack  alignItems={'center'}>
            <Box w={{base:"8rem",sm:"10rem", md:"20rem"}} border="1px solid red"><Image src="https://www.kindmeal.my/images/logo-kindmeal.png"  alt="kinmealLogo" /></Box>
            {/* importing component for social links here */}
            {/*  */}
          </HStack>
            <SocialLinks />
          {/* <Flex alignItems={'center'}> */}
            <LogUserLinks />
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
          {/* </Flex> */}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            {/* <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack> */}
            <Stack as={'nav'} spacing={4}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
          </Box>
        ) : null}
      </Box>
      <NavList />
      <Box
    //   {/*
    // w={{base:"15rem",sm:"15rem",md:"100%"}} 
    //   bg={useColorModeValue('gray.50', 'gray.900')}
    //   color={useColorModeValue('gray.700', 'gray.200')} */}
      
    //   {/* <Container */}
        // as={Box}
        // maxW={'10xl'}
        // py={4}
        // direction={{ base: 'column', md: 'row' }}
        // spacing={4}
        
        // align={{ base: 'center', md: 'center' }}
        >
        
    </Box>
    <Box p={4}>Main Content Here</Box>

    </>
  );
}


//'Meal Deals','KindMoments','Hot Picks','Recipes','Directory','Articles','Help'       
