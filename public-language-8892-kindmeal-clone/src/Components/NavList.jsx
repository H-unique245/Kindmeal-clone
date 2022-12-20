import {
  Box,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import styles from "./NavList.module.css";

//'Meal Deals','KindMoments','Hot Picks','Recipes','Directory','Articles','Help'       

const links = [
    {
      path: "/",
      title: "Home"
    },
    {
      path: "/meals",
      title: "Meal Deals"
    },
    {
      path: "/moments",
      title: "KindMoments"
    },
    {
      path: "/picks",
      title: "Hot Picks"
    },
    {
        path: "/recipe",
        title: "Recipes"
    },
    {
        path: "/directory",
        title: "Directory"
    },
    {
        path: "/articles",
        title: "Articles"
    },
    {
        path: "/help",
        title: "Help"
    }
  ];



export default function NavList() {

  return (
    <>
      <Box bgColor={{base:'white',sm:'green.400',md:'green.400'}} >
        <Flex h={{sm:8,md:12}} mb={2} alignItems={'center'} justifyContent={'space-between'}
        display={{ base: 'none',sm: 'none',md: 'flex'}}
        >
            <HStack
              maxW={{sm:'l',md:'5xl',lg:'7xl'}}
              justifyContent={'space-evenly'}
              alignItems={'center'}
              ml={{sm:10,md:10,lg:40}}
              spacing={{sm:3,md:3,lg:'3.5rem'}}
              display={{ base: 'none',sm: 'flex', md: 'flex' }}>
              {links.map((item) => (
        // activeStyle, or activeClass
        <NavLink
        className={({ isActive }) =>
        isActive ? styles.active : styles.default
      }
            key={item.path}
          to={item.path} end
        >
          {item.title}
        </NavLink>
      ))}
            </HStack>
        </Flex>
      </Box>

    </>
  );
}