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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import SocialLinks from "./SocialLinks";
import LogUserLinks from "./LogUserLinks";
import NavList from "./NavList";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { links } from "../Data/Navlist";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, handleLogout } = useContext(AppContext);

  return (
    <>
      <Box
        px={{ base: "2rem", md: "6.5rem" }}
        py="1rem"
        mb={{ base: 1, sm: 2, md: 0 }}
        borderBottom={{
          base: "1px solid green",
          sm: "1.3px solid green",
          md: "none",
        }}
      >
        <Flex
          h={16}
          gap={2}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems={"center"}>
            <Box w={{ base: "8rem", sm: "10rem", md: "12rem", lg: "20rem" }}>
              <NavLink to="/">
                <Image
                  src="https://www.kindmeal.my/images/logo-kindmeal.png"
                  alt="kinmealLogo"
                />
              </NavLink>
            </Box>
          </HStack>
          {/* importing component for social links here */}
          {/*  */}
          <SocialLinks />
          {user.isAuth ? (
            <>
              <Box>{user.userName}</Box>
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <LogUserLinks display={{ base: "none", md: "flex", lg: "flex" }} />
          )}
        </Flex>

        {isOpen ? (
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                <HStack alignItems={"center"}>
                  <Box w="6rem">
                    <NavLink to="/">
                      <Image
                        src="https://www.kindmeal.my/images/logo-kindmeal.png"
                        alt="kinmealLogo"
                      />
                    </NavLink>
                  </Box>
                  <LogUserLinks
                    display={{ base: "flex", md: "flex", lg: "flex" }}
                  />
                </HStack>
              </DrawerHeader>
              <DrawerBody h="10rem">
                <VStack align={"flex-start"}>
                  {links.map((item) => (
                    <HStack key={item.title}>
                      {item.icon}
                      <NavLink to={item.to}>{item.title}</NavLink>
                    </HStack>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        ) : null}
      </Box>
      <NavList />
      <Box></Box>
    </>
  );
}
