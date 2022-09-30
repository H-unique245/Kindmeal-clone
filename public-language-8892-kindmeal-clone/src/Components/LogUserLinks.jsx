import { Button,  HStack,  Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { LoginModal } from './LoginModal';
import { SignUpModal } from './SignUpModal';
// import { extendTheme } from '@chakra-ui/react'

// // 2. Update the breakpoints as key-value pairs
// const breakpoints = {
//   sm: '320px',
//   md: '768px',
//   lg: '960px',
//   xl: '1200px',
//   '2xl': '1536px',
// }

// // 3. Extend the theme
// const theme = extendTheme({ breakpoints })

function LogUserLinks() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSignModalVisible, setIsSignModalVisible] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  return (
    <>
    <HStack>
     <Stack direction={{ base: 'column', sm: 'row' }} pr={2} display={{base:"none", md:"flex", lg:"flex"}} borderRight="1.5px solid black" spacing={{base:1, md:4}} align='center'>
  <Text fontSize={{base:"8px",sm:"10px", md:"15px"}}>Login</Text>
  <Button width={{base:"1rem",sm:"2.8rem", md:"3rem",lg:"5rem"}} height={{md:"1.5rem"}} fontSize={{base:"8px",sm:"10px", md:"15px"}}colorScheme='facebook'>Facebook</Button>
  <Button width={{base:"1.5rem", sm:"2.5rem",md:"3rem",lg:"5rem"}} height={{md:"1.5rem"}} fontSize={{base:"8px",sm:"10px", md:"15px"}} bgColor="blackAlpha.700" color="white" onClick={() => setIsModalVisible(true)}> Email</Button>
  {isModalVisible && (
            <LoginModal
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
          )}
</Stack>
<Text onClick={() => setIsSignModalVisible(true)} >Signup</Text>
{isSignModalVisible && (
            <SignUpModal
              isSignModalVisible={isSignModalVisible}
              setIsSignModalVisible={setIsSignModalVisible}
            />
          )}
</HStack>
{/* <Button
            variant={["base", "sm", "md"]}
            
          >
            View more{" "}
          </Button>
           */}

    </>
  )
}

export default LogUserLinks
