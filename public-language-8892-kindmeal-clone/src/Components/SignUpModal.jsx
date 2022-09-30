import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Box,
    Image,
    Heading,
    HStack,
    Text,
    Link,
  } from "@chakra-ui/react";
  
  export function SignUpModal({ isSignModalVisible, setIsSignModalVisible }) {
    // const { isOpen, onOpen, onClose } = useDisclosure();
  
    const onClose = () => {
      setIsSignModalVisible(false);
    };
    return (
      <>
         <Modal isOpen={isSignModalVisible} size="xl" m={0} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Box align="center">
          <Image src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="loginHead" />
          </Box>
           </ModalHeader>
          <ModalCloseButton />
          <ModalBody w="xl">
            <Heading lineHeight={1.5} color="blackAlpha.700" textAlign="center" fontSize={{ base: 'xl', md: '2xl' }}>Join KindMeal For FREE Now</Heading>
            <Text textAlign="center">Please select the type of membership to proceed</Text>

            <Box boxShadow="xs" _hover={{bgColor:"gray.100", cursor:"pointer"}} border="0.5px solid gray" rounded="xl" mt={6} mb={4} p={5}>
                <HStack>
                    <Box w="70%"><Image src="https://www.kindmeal.my/images/join_normal.png" alt="food_lover" /></Box>
                    <Box>
                        <Heading fontSize={{ base: 'l', md: 'xl' }}  color="blackAlpha.700" mb={3}>Food Lover</Heading>
                        <Text align="start">Join FREE to enjoy yummy deals, share reviews and meet our community of compassionate food lovers.</Text>
                    </Box>
                </HStack>
            </Box>
            <Box boxShadow="xs"_hover={{bgColor:"gray.100", cursor:"pointer"}} border="0.5px solid gray"  rounded="xl"  mb={4} p={5}>
                <HStack >
                    <Box w="70%"><Image  src="https://www.kindmeal.my/images/join_shop.png" alt="Shop/Owner" /></Box>
                    <Box>
                        <Heading fontSize={{ base: 'l', md: 'xl' }} color="blackAlpha.700" mb={3}>Restaurant/ Shop Owner</Heading>
                        <Text align="start">Join FREE to enjoy yummy deals, share reviews and meet our community of compassionate food lovers.</Text>
                    </Box>
                </HStack>
            </Box>
          </ModalBody>

            <HStack justifyContent="space-between"p={2}>
                <Link>Member Login</Link>
                <Link>Forgot PassWord?</Link>

            </HStack>
        </ModalContent>
      </Modal>
      </>
    );
  }
  