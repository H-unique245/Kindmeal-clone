import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Box,
    Image,
    Stack,
    Heading,
    FormControl,
    Input,
    useColorModeValue,
    Divider,
    HStack,
    Link,
    Spacer,
  } from "@chakra-ui/react";
import { useState } from "react";
  import {RiFacebookCircleLine} from "react-icons/ri"
import { SignUpModal } from "./SignUpModal";
  
  export function LoginModal({ isModalVisible, setIsModalVisible }) {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const [logUser,setLogUser] = useState({email:"", password:""})
  const [isSignModalVisible, setIsSignModalVisible] = useState(false);

  const handleChange=(e)=>{
    const {name,value}= e.target;

    setLogUser({...logUser, [name]:value})
  }

  const handleSubmit=()=>{
    console.log(logUser)
  }
    const onClose = () => {
      setIsModalVisible(false);
    };


    const SignModalClick=()=>{
      setIsSignModalVisible(true);
      // onClose();
      }
    return (
      <>
        <Modal isOpen={isModalVisible} size="lg"  onClose={onClose}  >
          <ModalOverlay />
          <ModalContent  w="80%" m="auto" rounded="xl" boxShadow='dark-lg'>
            <ModalHeader>
                <Box align="center">
                <Image src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="loginHead" />
                </Box>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
        <Heading lineHeight={1.2} color="blackAlpha.500" textAlign="center" fontSize={{ base: 'xl', md: '2xl' }}>
          Member Login
        </Heading>
            <Stack
        spacing={4}
        w={'full'}
        maxW={'l'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        p={2}
        my={6}
        mb={2}>
        <FormControl id="email" isRequired>
          <Input
            name="email"
            value={logUser.email}
            onChange={handleChange}
            placeholder="Your Email"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <Input type="password" 
            name="password"
            value={logUser.password} 
            onChange={handleChange}
            _placeholder={{ color: 'gray.500' }}
          placeholder="Your Password" />
        </FormControl>
        <Stack spacing={2}>
          <Button
            w="75%"
            m="auto"
            fontWeight="800"
            fontSize="xl"
            letterSpacing={1}
            onClick={handleSubmit}
            bg={'green.500'}
            color={'white'}
            _hover={{
              bg: 'green.600',
            }}>
            Login
          </Button>
        </Stack>
      </Stack>
            </ModalBody>
            <Divider orientation='horizontal' borderColor="blackAlpha.600"/>
  
                <Stack mt={6}>
              <Button w="70%" m="auto" leftIcon={<RiFacebookCircleLine size={35} />} fontSize="xl" colorScheme='facebook'>Login With Facebook</Button>
              <HStack justifyContent="space-between"p={2}>
                <Box><Link>Forgot Password ?</Link></Box>
                <Spacer/>
                <Spacer/>
                <Box onClick={SignModalClick} ><Link>Not a member? Sign Up Free!!</Link>
                {isSignModalVisible && (
            <SignUpModal
              isSignModalVisible={isSignModalVisible}
              setIsSignModalVisible={setIsSignModalVisible}
            />
          )}
                </Box>
              </HStack>
              </Stack>
          </ModalContent>
        </Modal>
      </>
    );
  }
  