import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

//'Meal Deals','KindMoments','Hot Picks','Recipes','Directory','Articles','Help'       

const links = [
    {
      to: "/",
      title: "Home"
    },
    {
      to: "/meals",
      title: "Meal Deals"
    },
    {
      to: "/moments",
      title: "KindMoments"
    },
    {
      to: "/picks",
      title: "Hot Picks"
    },
    {
        to: "/recipe",
        title: "Recipes"
    },
    {
        to: "/directory",
        title: "Directory"
    },
    {
        to: "/aticles",
        title: "Articles"
    },
    {
        to: "/help",
        title: "Help"
    }
  ];
  const baseStyle = {
    color: "White",
    fontSize:"18px",
    fontWeight:"400",
    lineHeight:"40px",
    textDecoration: "none",
    // padding:"10px",
  };
  
  const activeStyle = {
    color: "White",
    fontSize:"18px",
    fontWeight:"400",
    lineHeight:"40px",
    backgroundColor: "green",
    textDecoration: "none",
    // padding:"10px"
  };
  
// const NavLink = ({ children,to }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     to={to}>
//     {children}
//   </Link>
// );

export default function NavList() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('green.400', 'green.500')} px={4}>
        <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack  spacing={{sm:7,md:9,lg:14}} ml={{lg:"10%"}} justifyContent={'center'} alignItems={'center'}>
            <HStack
              as={'nav'}
              maxW={{md:'5xl',lg:'6xl'}}
              px={15}
              justifyContent={'space-evenly'}
              alignItems={'center'}
            //   ml={40}
              spacing={{sm:10,md:12,lg:20}}
              display={{ base: 'none', md: 'flex' }}>
              {links.map((item) => (
        // activeStyle, or activeClass
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={item.to}
          key={item.title}
        >
          {item.title}
        </NavLink>
      ))}
            </HStack>
          </HStack>
          
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            {links.map((item) => (
        // activeStyle, or activeClass
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={item.to}
          key={item.title}
        >
          {item.title}
        </NavLink>
      ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}