import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  VStack,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import SocialLinks from './SocialLinks';
import LogUserLinks from './LogUserLinks';
import NavList from './NavList';
import { NavLink } from 'react-router-dom';
import {BiHomeCircle,BiFoodMenu} from "react-icons/bi"
import {GiMeal,GiHotMeal,GiArtilleryShell} from "react-icons/gi";
import {MdOutlineAddReaction,MdLiveHelp} from "react-icons/md"
import {VscFileSymlinkDirectory} from "react-icons/vsc"
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';


const links = [
  {
    to: "/",
    title: "Home",
    icon: <BiHomeCircle/>
  },
  {
    to: "/meals",
    title: "Meal Deals",
    icon: <GiMeal />
  },
  {
    to: "/moments",
    title: "KindMoments",
    icon:<MdOutlineAddReaction />
  },
  {
    to: "/picks",
    title: "Hot Picks",
    icon: <GiHotMeal />
  },
  {
      to: "/recipe",
      title: "Recipes",
      icon: <BiFoodMenu />
  },
  {
      to: "/directory",
      title: "Directory",
      icon: <VscFileSymlinkDirectory />
  },
  {
      to: "/aticles",
      title: "Articles",
      icon: <GiArtilleryShell />
  },
  {
      to: "/help",
      title: "Help",
      icon: <MdLiveHelp />
  }
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {user,handleLogout}=useContext(AppContext);

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
            <Box w={{base:"8rem",sm:"10rem", md:"20rem"}}>
              <NavLink to="/">
              <Image src="https://www.kindmeal.my/images/logo-kindmeal.png"  alt="kinmealLogo" />
              </NavLink>
              </Box>
          </HStack>
            {/* importing component for social links here */}
            {/*  */}
            <SocialLinks />
            {user.isAuth?
            <>
             <Box>{user.userName}</Box>
             <Button onClick={handleLogout} >Logout</Button>
             </>:  
            <LogUserLinks />
          }
        </Flex>
        

        {isOpen ? (
          <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
          <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              <HStack alignItems={'center'} >
              <Box w="6rem">
                <NavLink to="/" ><Image src="https://www.kindmeal.my/images/logo-kindmeal.png"  alt="kinmealLogo" />
                </NavLink>
                </Box>
            <LogUserLinks />
              </HStack>
              </DrawerHeader>
            <DrawerBody h="10rem">
              <VStack  align={'flex-start'}>
            {links.map((item) => (
        <HStack
          key={item.title}
        >
          {item.icon}
        <NavLink
          to={item.to}
        >
          {item.title}
        </NavLink>
        </HStack>
      ))}
      </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        ) : null}
      </Box>
      
      <NavList />
      <Box
        >
        
    </Box>

    </>
  );
}


