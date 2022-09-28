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
            <Box w={{base:"8rem",sm:"10rem", md:"20rem"}}><Image src="https://www.kindmeal.my/images/logo-kindmeal.png"  alt="kinmealLogo" /></Box>
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
          <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
          <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              <HStack alignItems={'center'} >
              <Box w="6rem"><Image src="https://www.kindmeal.my/images/logo-kindmeal.png"  alt="kinmealLogo" /></Box>
            <LogUserLinks />
              </HStack>
              </DrawerHeader>
            <DrawerBody h="10rem">
              <VStack  align={'flex-start'}>
            {links.map((item) => (
        // activeStyle, or activeClass
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
    <Box p={4}>Main Content Here</Box>

    </>
  );
}


//'Meal Deals','KindMoments','Hot Picks','Recipes','Directory','Articles','Help'       
