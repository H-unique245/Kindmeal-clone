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
import { Link, NavLink } from 'react-router-dom';

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
    color: "black",
    textDecoration: "none"
  };
  
  const activeStyle = {
    backgroundColor: "green",
    textDecoration: "none"
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
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
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